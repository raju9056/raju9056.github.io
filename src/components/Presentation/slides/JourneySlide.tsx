import { motion } from 'framer-motion';
import type { SlideProps } from '../../../types/presentation';

export function JourneySlide({ isActive }: SlideProps) {
  const phases = [
    {
      number: '1',
      title: 'Discovery',
      subtitle: 'The Problem',
      items: [
        'Building cloud-native platforms',
        'Noticed: Data quality issues',
        'Question: System behavior at scale?',
      ],
      color: 'from-blue-600 to-blue-800',
      borderColor: 'border-blue-500',
      bgColor: 'bg-blue-900/20',
    },
    {
      number: '2',
      title: 'Specialization',
      subtitle: 'The Learning',
      items: [
        "Master's in Computer Science",
        'Focused on data quality & distributed systems',
        'Core belief: Data quality is engineering',
      ],
      color: 'from-purple-600 to-purple-800',
      borderColor: 'border-purple-500',
      bgColor: 'bg-purple-900/20',
    },
    {
      number: '3',
      title: 'Implementation',
      subtitle: 'The Solution',
      items: [
        'Enterprise multimodal data challenges',
        'Preprocessing & validation systems',
        '30% throughput, 35% recovery, 99.9% uptime',
      ],
      color: 'from-green-600 to-green-800',
      borderColor: 'border-green-500',
      bgColor: 'bg-green-900/20',
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-8 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          My Journey: Three Phases
        </h2>
        <p className="text-lg text-[#9ca3af]">
          Discovery → Specialization → Implementation
        </p>
      </motion.div>

      {/* Three Phases */}
      <div className="grid md:grid-cols-3 gap-6">
        {phases.map((phase, index) => (
          <motion.div
            key={phase.number}
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
            className={`relative ${phase.bgColor} rounded-lg border-2 ${phase.borderColor} p-6 hover:scale-105 transition-transform`}
          >
            {/* Phase Number Badge */}
            <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
              {phase.number}
            </div>

            {/* Content */}
            <div className="mt-2">
              <h3 className="text-2xl font-bold text-white mb-1">
                {phase.title}
              </h3>
              <p className="text-sm text-[#9ca3af] mb-4 italic">
                {phase.subtitle}
              </p>
              <ul className="space-y-2">
                {phase.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#cccccc]">
                    <span className={`${phase.borderColor.replace('border', 'text')} mt-1`}>▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Arrow to next phase */}
            {index < phases.length - 1 && (
              <div className="hidden md:block absolute -right-8 top-1/2 transform -translate-y-1/2 text-4xl text-[#4b5563]">
                →
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
