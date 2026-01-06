import { motion } from 'framer-motion';
import type { SlideProps } from '../../../types/presentation';

export function SpecializationSlide({ isActive }: SlideProps) {
  const focusAreas = [
    {
      icon: '✓',
      title: 'Data quality as explicit requirement',
      description: 'Not an afterthought, but a first-class concern',
    },
    {
      icon: '👁️',
      title: 'Failures must be observable',
      description: 'Silent failures are the enemy of reliability',
    },
    {
      icon: '📈',
      title: 'Scaling without hiding correctness',
      description: 'Performance gains should not compromise data integrity',
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
            <span className="text-2xl">2️⃣</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Phase 2: Specialization
          </h2>
        </div>
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-12 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/30"
      >
        <div className="flex items-center gap-4 mb-4">
          <span className="text-5xl">🎓</span>
          <div>
            <h3 className="text-2xl font-semibold text-white">
              Master's in Computer Science
            </h3>
            <p className="text-lg text-[#9ca3af]">
              Wichita State University | 2021-2022
            </p>
            <p className="text-md text-purple-400 mt-1">
              Focus: Data Quality & Distributed Systems
            </p>
          </div>
        </div>
      </motion.div>

      {/* Core Principle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-12 p-8 bg-[#2d2d2d] rounded-lg border-2 border-purple-500"
      >
        <p className="text-2xl md:text-3xl font-bold text-center text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
          "Data quality is an engineering discipline, not an implicit assumption"
        </p>
      </motion.div>

      {/* Focus Areas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h3 className="text-2xl font-semibold text-white mb-6">
          🎯 Engineering Focus:
        </h3>
        <div className="space-y-4">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, x: -20 }}
              animate={isActive ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.15 }}
              className="flex items-start gap-4 p-5 bg-[#2d2d2d] rounded-lg border border-[#3c3c3c] hover:border-purple-500/50 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-lg">{area.icon}</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-1">
                  {area.title}
                </h4>
                <p className="text-[#cccccc]">{area.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
