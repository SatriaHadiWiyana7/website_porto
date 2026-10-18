import { motion } from 'framer-motion';
import { useParallax } from './Parallax';
import '../styles/text-reveal.css';

const entrances = {
  mask: { y: '105%', rotateX: -35, opacity: 0 },
  perspective: { rotateX: 75, opacity: 0, scale: .94 },
  focus: { filter: 'blur(9px)', opacity: 0, scale: .96 },
};

export default function TextReveal({ children, mode = 'mask', className = '' }) {
  const { enabled } = useParallax();
  const text = String(children);
  if (!enabled) return <span className={className}>{text}</span>;

  return (
    <motion.span key={`${mode}-${text}`} className={`text-reveal text-reveal--${mode} ${className}`} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .3 }}>
      <span className="text-reveal-accessible">{text}</span>
      <span aria-hidden="true">
        {text.split(' ').map((word, index) => (
          <span key={`${word}-${index}`} className="text-reveal-word">
            <motion.span variants={{ hidden: entrances[mode] || entrances.mask, visible: { y: 0, rotateX: 0, opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: .75, delay: Math.min(index * .045, .36), ease: [.22, 1, .36, 1] } } }}>{word}</motion.span>{' '}
          </span>
        ))}
      </span>
    </motion.span>
  );
}
