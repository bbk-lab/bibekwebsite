import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp, Pause, Play, Repeat } from 'lucide-react';
import VideoTemplate, { SCENE_DURATIONS } from './VideoTemplate';
import { useSceneControls } from './useSceneControls';

const DETAILS = [
  'Intro',
  'On site',
  'Career',
  'Research',
  'Service',
  'Signature',
];
const FILES = [
  'src/components/video/video_scenes/Scene1.tsx',
  'src/components/video/video_scenes/Scene2.tsx',
  'src/components/video/video_scenes/Scene3.tsx',
  'src/components/video/video_scenes/Scene4.tsx',
  'src/components/video/video_scenes/Scene5.tsx',
  'src/components/video/video_scenes/Scene6.tsx',
];

function formatTime(ms: number) {
  const seconds = Math.floor(Math.max(0, ms) / 1000);
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
}

export default function VideoWithControls() {
  const isIframed = typeof window !== 'undefined' && window.self !== window.top;
  const player = useSceneControls(SCENE_DURATIONS);
  const {
    sceneKeys, activeIndex, locked, paused, mountKey, tick,
    durations, activeDuration, activeStartTime, totalDuration,
    onSceneChange, jumpTo, toggleLock, togglePause,
  } = player;
  const [collapsed, setCollapsed] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [tapPinned, setTapPinned] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const elapsedBase = useRef(0);
  const sensorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setElapsed(0);
    elapsedBase.current = 0;
  }, [tick]);

  useEffect(() => {
    if (paused) return;
    const start = performance.now();
    const interval = window.setInterval(() => {
      setElapsed(elapsedBase.current + (performance.now() - start));
    }, 80);
    return () => {
      window.clearInterval(interval);
      elapsedBase.current += performance.now() - start;
    };
  }, [paused, tick]);

  useEffect(() => {
    if (!(collapsed && tapPinned)) return;
    const handle = (event: PointerEvent) => {
      if (event.pointerType === 'mouse') return;
      if (sensorRef.current && !sensorRef.current.contains(event.target as Node)) setTapPinned(false);
    };
    document.addEventListener('pointerdown', handle);
    return () => document.removeEventListener('pointerdown', handle);
  }, [collapsed, tapPinned]);

  const jump = useCallback((index: number) => {
    jumpTo(index);
    const filePath = FILES[index];
    if (!filePath) return;
    window.parent.postMessage({
      type: 'REPLIT_VIDEO_SCENE_SELECTED',
      payload: { sceneIndex: index, sceneCount: sceneKeys.length, sceneTitle: DETAILS[index], filePath, lineNumber: 1 },
    }, '*');
  }, [jumpTo, sceneKeys.length]);
  const visible = !collapsed || hovering || tapPinned;
  const totalElapsed = Math.min(totalDuration, activeStartTime + Math.min(elapsed, activeDuration));

  if (!isIframed) return <VideoTemplate />;

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <VideoTemplate
        key={mountKey}
        durations={durations}
        loop
        paused={paused}
        onSceneChange={onSceneChange}
      />
      <div
        ref={sensorRef}
        className="control-sensor"
        onPointerEnter={(event) => { if (event.pointerType === 'mouse') setHovering(true); }}
        onPointerLeave={(event) => { if (event.pointerType === 'mouse') setHovering(false); }}
        onPointerDown={(event) => { if (event.pointerType !== 'mouse' && collapsed) setTapPinned(true); }}
      >
        <div style={{ flex: 1 }} aria-hidden="true" />
        <div className={`control-bar${visible ? '' : ' hidden'}`} aria-hidden={!visible}>
          <button className="control-button" type="button" onClick={togglePause} aria-label={paused ? 'Play' : 'Pause'} title={paused ? 'Play' : 'Pause'}>
            {paused ? <Play size="2.7vmin" /> : <Pause size="2.7vmin" />}
          </button>
          <button className="control-button" type="button" onClick={toggleLock} aria-label={locked ? 'Loop current scene: on' : 'Loop current scene: off'} aria-pressed={locked} title={locked ? 'Loop current scene: on' : 'Loop current scene: off'}>
            <Repeat size="2.5vmin" />
          </button>
          <div style={{ width: 1, height: '3.4vmin', background: '#f1eee641' }} />
          <div className="playback-track">
            {sceneKeys.map((key, index) => (
              <button key={key} type="button" className="playback-segment" aria-label={`Jump to scene ${index + 1}: ${DETAILS[index]}`} aria-current={activeIndex === index ? 'true' : undefined} onClick={() => jump(index)}>
                <span className="playback-fill" style={{ width: `${index < activeIndex ? 100 : index === activeIndex ? Math.min(100, elapsed / activeDuration * 100) : 0}%` }} />
              </button>
            ))}
          </div>
          <span className="control-readout">{activeIndex + 1}/{sceneKeys.length}</span>
          <span className="control-readout">{formatTime(totalElapsed)} / {formatTime(totalDuration)}</span>
          <button className="control-button" type="button" onClick={() => {
            setCollapsed((value) => {
              if (!value) { setHovering(false); setTapPinned(false); }
              return !value;
            });
          }} aria-label={collapsed ? 'Show controls' : 'Hide controls'} aria-expanded={!collapsed}>
            {collapsed ? <ChevronUp size="2.7vmin" /> : <ChevronDown size="2.7vmin" />}
          </button>
        </div>
      </div>
    </div>
  );
}
