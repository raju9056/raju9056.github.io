import { motion } from 'framer-motion';
import type { SlideProps } from '../../../types/presentation';

export function OpeningSlide({ isActive }: SlideProps) {
  return (
    <div className="w-full max-w-5xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Data Engineering Journey
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-2xl md:text-3xl text-[#cccccc] mb-12">
          From Discovery to Implementation
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16"
      >
        <p className="text-3xl md:text-4xl font-semibold text-white mb-4">
          Raju Yallappa
        </p>
        <p className="text-xl md:text-2xl text-[#9ca3af]">
          Data & Cloud Engineer
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-16 text-sm text-[#6b7280]"
      >
        <p>6+ Years Experience | Cloud-Native Data Platforms | Multimodal Data</p>
      </motion.div>
    </div>
  );
}
