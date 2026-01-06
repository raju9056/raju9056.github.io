import { motion } from 'framer-motion';
import type { SlideProps } from '../../../types/presentation';

export function DiscoverySlide({ isActive }: SlideProps) {
  const observations = [
    {
      icon: '🔍',
      title: 'Early Career',
      description: 'Building features and cloud-native platforms',
    },
    {
      icon: '⚠️',
      title: 'Critical Observation',
      description: 'Production failures were data issues, not code issues',
    },
    {
      icon: '🤔',
      title: 'Questions Emerged',
      description: 'How do systems behave, fail, and recover at scale?',
    },
  ];

  const questions = [
    'How do complex systems behave over time?',
    'How do they fail and recover?',
    'How is correctness preserved at scale?',
  ];

  return (
    <div className="w-full max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
            <span className="text-2xl">1️⃣</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Phase 1: Discovery
          </h2>
        </div>
      </motion.div>

      {/* Observations */}
      <div className="space-y-6 mb-12">
        {observations.map((obs, index) => (
          <motion.div
            key={obs.title}
            initial={{ opacity: 0, x: -20 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
            className="flex items-start gap-4 p-6 bg-[#2d2d2d] rounded-lg border border-[#3c3c3c] hover:border-blue-500/50 transition-colors"
          >
            <span className="text-4xl">{obs.icon}</span>
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                {obs.title}
              </h3>
              <p className="text-lg text-[#cccccc]">{obs.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Key Questions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-l-4 border-blue-500 rounded-r-lg"
      >
        <p className="text-xl font-semibold text-white mb-4">
          🎯 Questions That Emerged:
        </p>
        <ul className="space-y-3">
          {questions.map((question, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={isActive ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
              className="text-lg text-[#cccccc] flex items-start gap-3"
            >
              <span className="text-blue-400 mt-1">▸</span>
              <span>{question}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
