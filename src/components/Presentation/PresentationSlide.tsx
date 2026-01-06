import { motion, AnimatePresence } from 'framer-motion';
import type { SlideProps } from '../../types/presentation';

interface PresentationSlideWrapperProps extends SlideProps {
  children: React.ReactNode;
}

export function PresentationSlide({
  children,
  isActive,
  direction
}: PresentationSlideWrapperProps) {
  const variants = {
    enter: (direction: 'forward' | 'backward' | 'none') => ({
      x: direction === 'forward' ? 1000 : direction === 'backward' ? -1000 : 0,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: 'forward' | 'backward' | 'none') => ({
      x: direction === 'forward' ? -1000 : direction === 'backward' ? 1000 : 0,
      opacity: 0,
    }),
  };

  return (
    <AnimatePresence mode="wait" custom={direction}>
      {isActive && (
        <motion.div
          key="slide"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="w-full min-h-full flex items-center justify-center p-6 md:p-12 py-8 md:py-16"
        >
          <div className="w-full max-h-full overflow-auto">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
