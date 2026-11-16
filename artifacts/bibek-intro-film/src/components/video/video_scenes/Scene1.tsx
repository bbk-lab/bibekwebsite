import { motion } from 'framer-motion';

const ease = 'easeOut';

export function Scene1() {
  return (
    <motion.section
      className="film-scene"
      style={{ background: 'var(--paper)', color: 'var(--ink)' }}
      initial={{ opacity: 0, scale: 1.025 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.035 }}
      transition={{ duration: 0.52, ease }}
    >
      <div className="film-mono" style={{ position: 'absolute', top: '7.5%', left: '6%' }}>
        CIVIL ENGINEER · NEPAL
      </div>
      <svg className="bridge-art" viewBox="0 0 780 590" aria-hidden="true">
        <motion.path d="M34 342H746" stroke="#222a27" strokeWidth="3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.75, delay: 0.26, ease }} />
        <motion.path d="M192 342V134M588 342V134" stroke="#222a27" strokeWidth="5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.62, delay: 0.44, ease }} />
        <motion.path d="M61 258 192 140Q390 354 588 140L719 258" stroke="#315c50" strokeWidth="5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.72, ease }} />
        <motion.path d="M70 342H710" stroke="#222a27" strokeWidth="8" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.52, delay: 1.5, ease }} />
        {[122, 161, 215, 268, 320, 372, 424, 476, 529, 581, 634, 677].map((x, i) => {
          const y = 140 + Math.pow((x - 390) / 198, 2) * 214;
          return (
            <motion.line key={x} x1={x} y1={y} x2={x} y2="342" stroke="#74847b" strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.38, delay: 1.03 + i * 0.045, ease }} />
          );
        })}
        <motion.path d="M192 405V430M588 405V430M192 420H588" stroke="#d16b43" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.45, delay: 1.9, ease }} />
        <text x="390" y="451" textAnchor="middle" fill="#65716a" fontFamily="DM Mono, monospace" fontSize="15" letterSpacing="3">MAIN SPAN</text>
        <text x="40" y="545" fill="#65716a" fontFamily="DM Mono, monospace" fontSize="14" letterSpacing="2">FIELD NOTE / 01</text>
        <text x="740" y="545" textAnchor="end" fill="#65716a" fontFamily="DM Mono, monospace" fontSize="14" letterSpacing="2">NEPAL</text>
      </svg>
      <motion.div className="film-title" style={{ position: 'absolute', left: '6%', top: '28%', zIndex: 2, color: 'var(--ink)' }}
        initial={{ opacity: 0, y: 28, clipPath: 'inset(0 100% 0 0)' }}
        animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0% 0 0)' }}
        transition={{ duration: 0.7, delay: 0.38, ease }}>
        BIBEK<br /><span style={{ color: 'var(--green)' }}>REGMI</span>
      </motion.div>
      <motion.p className="film-serif" style={{ position: 'absolute', left: '6.2%', top: '67%', width: '33%', margin: 0, zIndex: 2 }}
        initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 1.65, ease }}>
        Plans meet<br />the ground.
      </motion.p>
      <motion.div className="film-mono" style={{ position: 'absolute', bottom: '8%', left: '6%', color: 'var(--muted)' }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.3, duration: 0.35 }}>
        STRUCTURAL STUDY · CONCEPTUAL DRAWING
      </motion.div>
    </motion.section>
  );
}
