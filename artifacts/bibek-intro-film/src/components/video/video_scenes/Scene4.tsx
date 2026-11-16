import { motion } from 'framer-motion';

const ease = 'easeOut';
const interests = [
  { text: 'RESILIENCE', x: 58, y: 32, delay: 3.05 },
  { text: 'BIM + AUTOMATION', x: 73, y: 54, delay: 3.8 },
  { text: 'LOW-CARBON MATERIALS', x: 54, y: 74, delay: 4.55 },
];

export function Scene4() {
  return (
    <motion.section
      className="film-scene"
      style={{ background: 'var(--green)', color: 'var(--paper)' }}
      initial={{ opacity: 0, clipPath: 'circle(0% at 75% 45%)' }}
      animate={{ opacity: 1, clipPath: 'circle(150% at 75% 45%)' }}
      exit={{ opacity: 0, scale: 1.025 }}
      transition={{ duration: 0.72, ease }}
    >
      <svg className="research-contours" viewBox="0 0 950 700" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} aria-hidden="true">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <motion.path key={i} d={`M${440 + i * 20} 40 C${690 + i * 22} ${90 + i * 14}, ${500 + i * 28} ${235 + i * 13}, ${865 - i * 16} ${340 + i * 10} S${770 + i * 20} ${580 + i * 8}, 950 ${640 - i * 20}`}
            fill="none" stroke="#e9e5d8" strokeOpacity=".3" strokeWidth="1.3" pathLength="1"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.8, delay: 0.2 + i * 0.12, ease }} />
        ))}
        <motion.path d="M550 230 690 360 800 240 860 455 675 520" fill="none" stroke="#d16b43" strokeWidth="2.5" pathLength="1"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.55, delay: 1.05, ease }} />
        {[[550, 230], [690, 360], [800, 240], [860, 455], [675, 520]].map(([cx, cy], i) => (
          <motion.circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="7" fill="#d16b43" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1.35 + i * 0.2, duration: 0.28 }} />
        ))}
      </svg>
      <motion.div className="film-mono" style={{ position: 'absolute', left: '7%', top: '10%', color: '#c9d4ca' }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        RESEARCH / 01
      </motion.div>
      <motion.h2 className="film-serif" style={{ position: 'absolute', left: '7%', top: '24%', width: '51%', margin: 0, fontSize: '6.5vmin', zIndex: 2 }}
        initial={{ opacity: 0, y: 17, clipPath: 'inset(0 0 100% 0)' }}
        animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
        transition={{ duration: 0.7, delay: 0.55, ease }}>
        Construction Workforce Development in Nepal:
        <br /><span style={{ color: '#e6b59e' }}>Addressing the Skills Gap</span>
      </motion.h2>
      <motion.div className="film-mono" style={{ position: 'absolute', left: '7%', bottom: '11%', color: '#d1d9ce', fontSize: '1.45vmin' }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.35, duration: 0.4 }}>
        PAPER-BASED ARTICLE · DOI 10.5281/ZENODO.13854213
      </motion.div>
      {interests.map((item) => (
        <motion.div key={item.text} className="film-mono" style={{ position: 'absolute', left: `${item.x}%`, top: `${item.y}%`, color: 'var(--paper)', zIndex: 2, fontSize: '1.5vmin' }}
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: item.delay, duration: 0.36, ease }}>
          {item.text}
        </motion.div>
      ))}
      <motion.div style={{ position: 'absolute', right: '7%', top: '8%', width: '1.1vmin', height: '1.1vmin', borderRadius: '50%', background: 'var(--orange)', boxShadow: '0 0 0 1.6vmin #d16b4322' }}
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.6, duration: 0.3 }} />
    </motion.section>
  );
}
