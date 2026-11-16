import { motion } from 'framer-motion';

const ease = 'easeOut';
const tasks = [
  ['01', 'DAILY WORK PLAN'],
  ['02', 'LABOUR + MACHINERY'],
  ['03', 'DRAWINGS → EXECUTION'],
];

export function Scene2() {
  return (
    <motion.section
      className="film-scene"
      style={{ background: 'var(--paper-dim)', color: 'var(--ink)' }}
      initial={{ opacity: 0, rotate: -1.2, scale: 1.04 }}
      animate={{ opacity: 1, rotate: 0, scale: 1 }}
      exit={{ opacity: 0, x: -18 }}
      transition={{ duration: 0.58, ease }}
    >
      <div className="plan-grid" style={{ position: 'absolute', inset: '8% 7% 10% 31%', transform: 'rotate(-3deg)', border: '1px solid #315c5038' }} />
      <motion.div style={{ position: 'absolute', left: '8%', top: '14%', width: '4px', height: '71%', background: 'var(--green)', transformOrigin: 'top' }}
        initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.72, delay: 0.22, ease }} />
      <div className="film-mono" style={{ position: 'absolute', left: '11%', top: '13%', color: 'var(--green)' }}>CURRENT PRACTICE / 01</div>
      <motion.h1 className="film-title" style={{ position: 'absolute', left: '11%', top: '24%', margin: 0, fontSize: '9vmin', maxWidth: '41vw' }}
        initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.52, delay: 0.28, ease }}>
        SITE<br />ENGINEER
      </motion.h1>
      <motion.p className="film-mono" style={{ position: 'absolute', left: '11%', top: '47%', width: '31vw', margin: 0, color: 'var(--muted)', lineHeight: 1.65 }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.78 }}>
        BANDAN BHAGWATI<br />NIRMAN SEWA PVT. LTD.
      </motion.p>
      <div style={{ position: 'absolute', left: '48%', top: '20%', width: '44%', height: '66%', borderTop: '1px solid var(--green)', borderBottom: '1px solid var(--green)', transform: 'rotate(-4deg)', opacity: 0.65 }} />
      {tasks.map(([number, label], i) => (
        <motion.div key={number} style={{ position: 'absolute', right: '9%', top: `${28 + i * 17}%`, width: '38%', display: 'flex', gap: '2vmin', alignItems: 'center', padding: '1.1vmin 0', borderBottom: '1px solid #315c5066' }}
          initial={{ opacity: 0, x: 25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45, delay: 1.1 + i * 1.15, ease }}>
          <span className="film-mono" style={{ color: 'var(--orange)' }}>{number}</span>
          <span className="film-eyebrow" style={{ fontSize: '2.35vmin' }}>{label}</span>
          <span style={{ marginLeft: 'auto', width: '1.2vmin', height: '1.2vmin', borderRadius: '50%', background: 'var(--green)' }} />
        </motion.div>
      ))}
      <motion.div className="film-mono" style={{ position: 'absolute', left: '11%', bottom: '10%', color: 'var(--green)' }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.05, duration: 0.35 }}>
        JULY 2025 — PRESENT
      </motion.div>
      <motion.div style={{ position: 'absolute', right: '8%', bottom: '14%', width: '31%', height: '2px', background: 'var(--orange)', transformOrigin: 'left' }}
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 4.55, duration: 0.55, ease }} />
    </motion.section>
  );
}
