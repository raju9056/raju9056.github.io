import { motion } from 'framer-motion';
import type { SlideProps } from '../../../types/presentation';

export function BackgroundSlide({ isActive }: SlideProps) {
  const dataTypes = [
    { icon: '📄', label: 'Text' },
    { icon: '📋', label: 'PDFs' },
    { icon: '🖼️', label: 'Images' },
    { icon: '🎥', label: 'Video' },
    { icon: '📊', label: 'Sensors' },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
          Background & Engineering Mindset
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-6 mb-12"
      >
        <div className="flex items-start gap-4">
          <span className="text-3xl">⏱️</span>
          <p className="text-xl md:text-2xl text-[#cccccc]">
            <span className="font-semibold text-blue-400">6+ years</span> building cloud-native data platforms
          </p>
        </div>

        <div className="flex items-start gap-4">
          <span className="text-3xl">🔧</span>
          <p className="text-xl md:text-2xl text-[#cccccc]">
            Specialized in <span className="font-semibold text-purple-400">multimodal data</span>
          </p>
        </div>
      </motion.div>

      {/* Data Types Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex justify-center gap-6 mb-12"
      >
        {dataTypes.map((type, index) => (
          <motion.div
            key={type.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isActive ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
            className="flex flex-col items-center gap-2 p-4 bg-[#2d2d2d] rounded-lg border border-[#3c3c3c]"
          >
            <span className="text-4xl">{type.icon}</span>
            <span className="text-sm text-[#9ca3af]">{type.label}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Key Insight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="mt-12 p-6 bg-gradient-to-r from-red-500/10 to-orange-500/10 border-l-4 border-orange-500 rounded-r-lg"
      >
        <p className="text-xl md:text-2xl text-white font-semibold mb-2">
          💡 Key Observation
        </p>
        <p className="text-lg md:text-xl text-[#cccccc]">
          "Production failures weren't caused by algorithms failing — they were caused by{' '}
          <span className="text-orange-400 font-semibold">data quality issues breaking silently</span>"
        </p>
      </motion.div>
    </div>
  );
}
