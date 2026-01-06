import { motion } from 'framer-motion';
import type { SlideProps } from '../../../types/presentation';

export function ResultsSlide({ isActive }: SlideProps) {
  const metrics = [
    {
      value: '30%',
      label: 'Validation Throughput',
      description: 'Improvement in data processing efficiency',
      color: 'from-blue-500 to-cyan-500',
      icon: '⚡',
    },
    {
      value: '35%',
      label: 'Faster Recovery',
      description: 'Reduced mean time to incident resolution',
      color: 'from-purple-500 to-pink-500',
      icon: '🚀',
    },
    {
      value: '99.9%',
      label: 'Uptime',
      description: 'Across all regions and services',
      color: 'from-green-500 to-emerald-500',
      icon: '✅',
    },
  ];

  const lessons = [
    'Data quality improves when producers see failures early',
    'Observability is critical for preventing silent failures',
    'Validation should produce quality scores, not binary checks',
    'Feedback loops create accountability and reduce repeated issues',
  ];

  return (
    <div className="w-full max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
          Results & Impact
        </h2>
      </motion.div>

      {/* Metrics Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={isActive ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
            className="relative overflow-hidden"
          >
            <div className="p-6 bg-[#2d2d2d] rounded-lg border border-[#3c3c3c] hover:border-[#4b5563] transition-all hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl">{metric.icon}</span>
                <div className={`text-5xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                  {metric.value}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {metric.label}
              </h3>
              <p className="text-sm text-[#9ca3af]">{metric.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Achievement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mb-12 p-6 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg border border-yellow-500/30"
      >
        <div className="flex items-center gap-4">
          <span className="text-5xl">🎯</span>
          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              Trustworthy AI Outputs
            </h3>
            <p className="text-lg text-[#cccccc]">
              Achieved through systematic data quality assurance and validation frameworks
            </p>
          </div>
        </div>
      </motion.div>

      {/* Lessons Learned */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="p-6 bg-[#2d2d2d] rounded-lg border border-[#3c3c3c]"
      >
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span>💡</span> Key Lessons:
        </h3>
        <div className="space-y-3">
          {lessons.map((lesson, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isActive ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
              className="flex items-start gap-3"
            >
              <span className="text-green-400 mt-1">✓</span>
              <span className="text-[#cccccc]">{lesson}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
