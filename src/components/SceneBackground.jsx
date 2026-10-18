import { motion, useScroll, useTransform } from 'framer-motion';
import { useParallax } from './Parallax';

export default function SceneBackground() {
  const { enabled, compact } = useParallax();
  const { scrollYProgress } = useScroll();
  const amplitude = compact ? 0.5 : 1;
  const farY = useTransform(scrollYProgress, [0, 1], [0, -90 * amplitude]);
  const nearY = useTransform(scrollYProgress, [0, 1], [0, -180 * amplitude]);

  return (
    <div className="scene-background" aria-hidden="true">
      <div className="scene-light" />
      <motion.div
        className="scene-plane scene-plane--far"
        style={{ y: enabled ? farY : 0, rotate: -13 }}
      />
      <motion.div
        className="scene-plane scene-plane--near"
        style={{ y: enabled ? nearY : 0, rotate: 22 }}
      />
    </div>
  );
}
