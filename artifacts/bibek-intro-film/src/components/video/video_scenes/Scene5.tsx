import { motion } from 'framer-motion';
import certificate from '@assets/ewb-certificate.jpg';

const ease = 'easeOut';

export function Scene5() {
  return (
    <motion.section
      className="film-scene"
      style={{ background: 'var(--paper)', color: 'var(--ink)' }}
      initial={{ opacity: 0, clipPath: 'inset(0 0 0 100%)' }}
      animate={{ opacity: 1, clipPath: 'inset(0 0 0 0%)' }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.6, ease }}
    >
      <motion.figure className="certificate-frame" style={{ position: 'absolute', left: '7%', top: '14%', width: '49%', margin: 0, padding: '1.15vmin', background: '#faf9f4', border: '1px solid var(--rule)' }}
        initial={{ opacity: 0, rotateY: -8, scale: 0.96 }} animate={{ opacity: 1, rotateY: 0, scale: 1 }}
        transition={{ duration: 0.82, delay: 0.15, ease }}>
        <img src={certificate} alt="Certificate of Appreciation awarded to Bibek Regmi by Engineers Without Borders Nepal for Disaster Risk Reduction workshop volunteer contribution, October 2024 to February 2025; issued 15 February 2025." style={{ width: '100%', height: 'auto', display: 'block' }} />
      </motion.figure>
      <div style={{ position: 'absolute', left: '61%', top: '14%', bottom: '15%', width: '1px', background: 'var(--rule)' }} />
      <motion.div className="film-mono" style={{ position: 'absolute', left: '65%', top: '18%', width: '27%', color: 'var(--green)', fontSize: '1.5vmin' }}
        initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.72, duration: 0.4, ease }}>
        ENGINEERS WITHOUT BORDERS NEPAL
      </motion.div>
      <motion.h2 className="film-serif" style={{ position: 'absolute', left: '65%', top: '31%', width: '28%', margin: 0, fontSize: '4.7vmin' }}
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05, duration: 0.48, ease }}>
        Service is part of the practice.
      </motion.h2>
      <motion.p className="film-caption" style={{ position: 'absolute', left: '65%', top: '55%', width: '28%', margin: 0, color: 'var(--muted)', fontSize: '2.8vmin' }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.75, duration: 0.42 }}>
        Disaster Risk Reduction workshops
      </motion.p>
      <motion.div className="film-mono" style={{ position: 'absolute', left: '65%', top: '70%', width: '28%', color: 'var(--green)', fontSize: '1.45vmin', lineHeight: 1.7 }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4, duration: 0.4 }}>
        VOLUNTEER CONTRIBUTION<br />OCT 2024 — FEB 2025<br /><br />ISSUED 15 FEBRUARY 2025
      </motion.div>
      <motion.div style={{ position: 'absolute', left: '7%', bottom: '9%', width: '86%', height: '2px', background: 'var(--green)', transformOrigin: 'left' }}
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 3.55, duration: 0.48, ease }} />
    </motion.section>
  );
}
