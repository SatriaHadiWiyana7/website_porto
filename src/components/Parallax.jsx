/* eslint-disable react-refresh/only-export-components -- The shared motion hook belongs beside its provider. */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useSyncExternalStore,
} from 'react';
import { motion, MotionConfig, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';

const MotionContext = createContext(null);
const subscribeHydration = () => () => {};
const getHydrated = () => true;
const getServerHydrated = () => false;

function useMediaQuery(query) {
  const subscribe = useCallback((onChange) => {
    const media = window.matchMedia(query);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, [query]);
  const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query]);
  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}

export function ParallaxProvider({ children }) {
  const hydrated = useSyncExternalStore(subscribeHydration, getHydrated, getServerHydrated);
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const compact = useMediaQuery('(max-width: 767px)');
  const coarsePointer = useMediaQuery('(pointer: coarse)');
  const enabled = hydrated && !reducedMotion;

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.motion = enabled ? 'on' : 'off';
    return () => { delete root.dataset.motion; };
  }, [enabled]);

  const value = useMemo(() => ({
    enabled,
    reducedMotion,
    compact,
    coarsePointer,
  }), [enabled, reducedMotion, compact, coarsePointer]);

  return (
    <MotionContext.Provider value={value}>
      <MotionConfig reducedMotion={enabled ? 'user' : 'always'}>
        {children}
      </MotionConfig>
    </MotionContext.Provider>
  );
}

export function useParallax() {
  const context = useContext(MotionContext);
  if (!context) throw new Error('useParallax must be used inside ParallaxProvider.');
  return context;
}

export function Parallax({
  children,
  className = '',
  speed = 40,
  horizontal = 0,
  rotate = 0,
  rotateX = 0,
  rotateY = 0,
  scale = 0,
  style,
  ...props
}) {
  const target = useRef(null);
  const attachTarget = useCallback((node) => {
    // Measure the stationary parent, so this layer's transforms never feed back
    // into its own scroll progress. Keep the existing one-element layout API.
    let anchor = node?.parentElement || null;
    while (anchor?.classList.contains('parallax-layer')) anchor = anchor.parentElement;
    target.current = anchor;
  }, []);
  const { enabled, compact } = useParallax();
  const { scrollYProgress } = useScroll({
    target,
    offset: ['start end', 'end start'],
  });
  // Touch screens still get scroll depth. Keep sideways travel restrained so
  // narrow text columns remain inside the viewport.
  const amplitude = compact ? 0.7 : 1;
  const sideways = compact ? 0.4 : 1;
  const depth = compact ? 0.85 : 1;
  const distance = speed * amplitude;
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const x = useTransform(scrollYProgress, [0, 1], [horizontal * sideways, -horizontal * sideways]);
  const rotation = useTransform(scrollYProgress, [0, 1], [rotate * amplitude, -rotate * amplitude]);
  const rotationX = useTransform(scrollYProgress, [0, 1], [rotateX * depth, -rotateX * depth]);
  const rotationY = useTransform(scrollYProgress, [0, 1], [rotateY * depth, -rotateY * depth]);
  const zoom = useTransform(scrollYProgress, [0, 1], [1 - scale * amplitude, 1 + scale * amplitude]);

  return (
    <motion.div
      {...props}
      ref={attachTarget}
      className={`parallax-layer ${className}`.trim()}
      style={{
        ...style,
        x: enabled ? x : 0,
        y: enabled ? y : 0,
        rotate: enabled ? rotation : 0,
        rotateX: enabled ? rotationX : 0,
        rotateY: enabled ? rotationY : 0,
        scale: enabled ? zoom : 1,
        ...(rotateX || rotateY ? { transformPerspective: 1200, transformStyle: 'preserve-3d' } : {}),
      }}
    >
      {children}
    </motion.div>
  );
}

export function TiltCard({ children, className = '', maxTilt = 10, perspective = 900, scrollTilt = true, style, ...props }) {
  const ref = useRef(null);
  const scrollAnchor = useRef(null);
  const attachCard = useCallback((node) => {
    ref.current = node;
    scrollAnchor.current = node?.parentElement || null;
  }, []);
  const boundsRef = useRef(null);
  const { enabled, coarsePointer } = useParallax();
  const canTilt = enabled && !coarsePointer;
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(pointerY, { stiffness: 175, damping: 24, mass: 0.65 });
  const rotateY = useSpring(pointerX, { stiffness: 175, damping: 24, mass: 0.65 });
  const spotlightX = useMotionValue('50%');
  const spotlightY = useMotionValue('50%');
  const { scrollYProgress } = useScroll({ target: scrollAnchor, offset: ['start end', 'end start'] });
  const touchTilt = Math.min(maxTilt, 3.5);
  const scrollRotateX = useTransform(scrollYProgress, [0, 1], [touchTilt, -touchTilt]);
  const scrollRotateY = useTransform(scrollYProgress, [0, 1], [-touchTilt * .65, touchTilt * .65]);
  const canScrollTilt = enabled && coarsePointer && scrollTilt;

  useEffect(() => {
    const card = ref.current;
    if (!card) return undefined;

    const prepareLayers = () => {
      card.querySelectorAll('[data-depth]').forEach((layer) => {
        const rawDepth = Number(layer.dataset.depth);
        const depth = Number.isFinite(rawDepth) ? Math.max(-100, Math.min(100, rawDepth)) : 24;
        layer.style.setProperty('--layer-depth', `${depth}px`);
      });
    };
    prepareLayers();
    const observer = new MutationObserver(prepareLayers);
    observer.observe(card, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!canTilt) {
      pointerX.set(0);
      pointerY.set(0);
      rotateX.jump(0);
      rotateY.jump(0);
    }
  }, [canTilt, pointerX, pointerY, rotateX, rotateY]);

  function resetTilt() {
    boundsRef.current = null;
    pointerX.set(0);
    pointerY.set(0);
    spotlightX.set('50%');
    spotlightY.set('50%');
  }

  function captureBounds(node) {
    const parent = node.parentElement;
    const parentBounds = parent.getBoundingClientRect();
    return { bounds: node.getBoundingClientRect(), parent, parentBounds };
  }

  function handlePointerMove(event) {
    if (!canTilt || event.pointerType === 'touch') return;
    const snapshot = boundsRef.current || captureBounds(event.currentTarget);
    boundsRef.current = snapshot;
    const { bounds } = snapshot;
    // Parent movement includes normal scrolling and any surrounding parallax;
    // measuring it avoids feeding this card's pointer tilt back into itself.
    const parentBounds = snapshot.parent.getBoundingClientRect();
    const left = bounds.left + parentBounds.left - snapshot.parentBounds.left;
    const top = bounds.top + parentBounds.top - snapshot.parentBounds.top;
    const x = Math.max(0, Math.min(1, (event.clientX - left) / bounds.width));
    const y = Math.max(0, Math.min(1, (event.clientY - top) / bounds.height));
    pointerX.set((x - 0.5) * maxTilt * 2);
    pointerY.set((0.5 - y) * maxTilt * 2);
    spotlightX.set(`${x * 100}%`);
    spotlightY.set(`${y * 100}%`);
  }

  return (
    <motion.div
      {...props}
      ref={attachCard}
      className={`tilt-card ${className}`.trim()}
      onPointerEnter={(event) => {
        boundsRef.current = captureBounds(event.currentTarget);
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      onPointerCancel={resetTilt}
      onFocusCapture={resetTilt}
      style={{
        ...style,
        transformPerspective: perspective,
        rotateX: canTilt ? rotateX : canScrollTilt ? scrollRotateX : 0,
        rotateY: canTilt ? rotateY : canScrollTilt ? scrollRotateY : 0,
        '--depth-scale': coarsePointer ? .45 : 1,
        '--spotlight-x': spotlightX,
        '--spotlight-y': spotlightY,
      }}
    >
      {children}
    </motion.div>
  );
}
