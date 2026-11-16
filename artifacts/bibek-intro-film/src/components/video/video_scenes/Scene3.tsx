import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSceneTimer } from '@/lib/video';

const roles = [
  { company: 'BODHI HOLDING PVT. LTD.', title: 'CONSTRUCTION SUPERVISOR INTERN', dates: 'AUG 2023 — FEB 2024' },
  { company: 'TUNDI GROUP', title: 'CONSTRUCTION PROJECT ENGINEER', dates: 'MAY 2024 — JULY 2025' },
  { company: 'BANDAN BHAGWATI NIRMAN SEWA PVT. LTD.', title: 'SITE ENGINEER', dates: 'JULY 2025 — PRESENT' },
];
const ease = 'easeOut';

export function Scene3() {
  const [active, setActive] = useState(0);
  useSceneTimer([
    { time: 1650, callback: () => setActive(1) },
    { time: 3200, callback: () => setActive(2) },
  ]);

  return (
    <motion.section
      className="film-scene"
      style={{ background: '#e8e5db', color: 'var(--ink)' }}
      initial={{ opacity: 0, scale: 0.985 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.5, ease }}
    >
      <motion.div className="film-mono" style={{ position: 'absolute', left: '7%', top: '10%', color: 'var(--muted)' }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
        A CAREER IN THE MAKING
      </motion.div>
      <motion.div style={{ position: 'absolute', left: '7%', right: '7%', top: '49%', height: '2px', background: 'var(--green)', transformOrigin: 'left' }}
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.9, delay: 0.18, ease }} />
      {roles.map((role, i) => {
        const current = i === active;
        const positions = [
          { left: '10%', top: '23%', align: 'left' },
          { left: '39%', top: '55%', align: 'center' },
          { left: '68%', top: '20%', align: 'right' },
        ];
        const p = positions[i];
        return (
          <motion.div key={role.company} style={{ position: 'absolute', left: p.left, top: p.top, width: i === 2 ? '27%' : '26%', transform: 'translateX(0)' }}>
            <motion.div style={{ position: 'absolute', left: i === 1 ? '50%' : i === 2 ? '84%' : '0%', top: i === 1 ? '-4.4vmin' : '26vmin', width: current ? '2.5vmin' : '1.25vmin', height: current ? '2.5vmin' : '1.25vmin', borderRadius: '50%', background: current ? 'var(--orange)' : 'var(--paper)', border: '2px solid var(--green)', zIndex: 2 }}
              animate={{ scale: current ? [1, 1.25, 1] : 1 }} transition={{ duration: 0.42, ease }} />
            <motion.div animate={{ opacity: current ? 1 : 0.4, y: current ? 0 : 3 }} transition={{ duration: 0.32 }}>
              <div className="film-mono" style={{ color: 'var(--green)', minHeight: '2.8em', fontSize: '1.4vmin' }}>{role.company}</div>
              <div className="film-eyebrow" style={{ marginTop: '1.2vmin', fontSize: '2.45vmin', lineHeight: 1.35, minHeight: '4em' }}>{role.title}</div>
              <div className="film-mono" style={{ marginTop: '1.2vmin', color: 'var(--muted)', fontSize: '1.4vmin' }}>{role.dates}</div>
            </motion.div>
          </motion.div>
        );
      })}
      <motion.div className="film-serif" style={{ position: 'absolute', left: '7%', bottom: '10%', width: '48%', fontSize: '4.4vmin' }}
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 4.55, ease }}>
        From supervision to site engineering.
      </motion.div>
      <motion.div style={{ position: 'absolute', right: '8%', bottom: '12%', width: '13vmin', height: '1px', background: 'var(--orange)', transformOrigin: 'left' }}
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 4.85, duration: 0.4 }} />
    </motion.section>
  );
}
