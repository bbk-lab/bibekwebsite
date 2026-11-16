import { motion } from 'framer-motion';

const ease = 'easeOut';

export function Scene6() {
  return (
    <motion.section
      className="film-scene"
      style={{ background: 'var(--green)', color: 'var(--paper)' }}
      initial={{ opacity: 0, clipPath: 'circle(0% at 50% 55%)' }}
      animate={{ opacity: 1, clipPath: 'circle(150% at 50% 55%)' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.62, ease }}
    >
      <motion.div className="film-mono" style={{ position: 'absolute', left: '7%', top: '10%', color: '#c9d4ca' }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
        FIELD TO FUTURE
      </motion.div>
      <motion.h1 className="film-title" style={{ position: 'absolute', left: '7%', top: '29%', margin: 0, fontSize: '18vmin', letterSpacing: '-.095em', whiteSpace: 'nowrap' }}
        initial={{ opacity: 0, scale: 0.88, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease }}>
        BIBEK REGMI
      </motion.h1>
      <motion.div style={{ position: 'absolute', left: '7%', top: '58%', width: '86%', height: '3px', background: 'var(--paper)', transformOrigin: 'left' }}
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.72, delay: 0.62, ease }} />
      <motion.div className="film-mono" style={{ position: 'absolute', left: '7%', top: '65%', color: '#d5ddd3', fontSize: '1.8vmin' }}
        initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.12, duration: 0.4 }}>
        CIVIL ENGINEER · NEPAL
      </motion.div>
      <motion.p className="film-serif" style={{ position: 'absolute', right: '7%', top: '65%', width: '43%', margin: 0, fontSize: '3.55vmin', textAlign: 'right' }}
        initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.55, duration: 0.48, ease }}>
        Good construction is a thousand careful decisions.
      </motion.p>
      <motion.div style={{ position: 'absolute', left: '7%', top: '57.65%', width: '1.2vmin', height: '1.2vmin', borderRadius: '50%', background: 'var(--orange)' }}
        initial={{ x: 0 }} animate={{ x: ['0vw', '80vw', '0vw'] }} transition={{ duration: 2.3, delay: 1.55, ease: 'easeInOut' }} />
    </motion.section>
  );
}
