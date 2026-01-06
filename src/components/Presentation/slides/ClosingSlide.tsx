import { motion } from 'framer-motion';
import type { SlideProps } from '../../../types/presentation';

export function ClosingSlide({ isActive }: SlideProps) {
  const expertise = [
    {
      icon: '📊',
      text: 'Multimodal data curation',
    },
    {
      icon: '✅',
      text: 'Systematic validation frameworks',
    },
    {
      icon: '🔧',
      text: 'Data quality as engineering discipline',
    },
    {
      icon: '📈',
      text: 'Scalable data assurance operations',
    },
    {
      icon: '🔄',
      text: 'Feedback loops between consumers and generators',
    },
  ];

  const principles = [
    'I design systems assuming data is unreliable by default',
    'I prioritize validation, observability, and feedback loops',
    'I focus on building scalable platforms that don\'t hide failures',
  ];

  return (
    <div className="w-full max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
          Core Expertise & Principles
        </h2>
      </motion.div>

      {/* Expertise Areas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-12 p-8 bg-[#2d2d2d] rounded-lg border border-[#3c3c3c]"
      >
        <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
          <span className="text-3xl">🎯</span>
          What I Bring:
        </h3>
        <div className="space-y-4">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isActive ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              className="flex items-center gap-4 p-4 bg-[#1e1e1e] rounded-lg border border-blue-500/30 hover:border-blue-500/60 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">{item.icon}</span>
              </div>
              <span className="text-lg text-[#cccccc]">{item.text}</span>
              <span className="ml-auto text-blue-400 text-2xl">✓</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Core Belief */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="mb-12 p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border-2 border-blue-500/50"
      >
        <p className="text-2xl md:text-3xl font-bold text-center text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text leading-relaxed">
          "Data quality is an engineering discipline,
          <br />
          not a manual cleanup task"
        </p>
      </motion.div>

      {/* Engineering Principles */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="space-y-4"
      >
        {principles.map((principle, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 1.3 + index * 0.1 }}
            className="flex items-start gap-3 p-4 bg-[#2d2d2d] rounded-lg"
          >
            <span className="text-blue-400 text-xl mt-1">▸</span>
            <span className="text-lg text-[#cccccc]">{principle}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Thank You */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1.7 }}
        className="mt-16 text-center"
      >
        <p className="text-3xl font-semibold text-white mb-4">
          Thank You
        </p>
        <p className="text-lg text-[#9ca3af]">
          Questions & Discussion
        </p>
      </motion.div>
    </div>
  );
}
