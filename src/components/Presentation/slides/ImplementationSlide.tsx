import { motion } from 'framer-motion';
import type { SlideProps } from '../../../types/presentation';
import { MermaidDiagram } from '../MermaidDiagram';

export function ImplementationSlide({ isActive }: SlideProps) {
  const architectureDiagram = `
flowchart LR
    %% Sources
    A[Enterprise Data Sources]

    %% Ingestion
    A --> B[Ingestion Layer]

    %% Platform Boundary
    subgraph Platform["Scalable Data Platform"]
        direction LR
        B
        C[Preprocessing and Normalization]
        D[Validation and Quality Rules]
        E[Quality Scoring]
        G[Trusted Data Store]
        H[Query and Retrieval Layer]
    end

    %% Preprocessing
    B --> C

    %% Validation
    C --> D

    D -->|Valid| E
    D -->|Invalid| F[Failure Handling]

    %% Failure Paths
    F --> F1[Retry Pipelines]
    F --> F2[Manual Review]
    F --> F3[Producer Feedback]

    %% Trusted Data
    E --> G
    G --> G1[Operational Database]
    G --> G2[Analytics / Warehouse]

    %% Consumption
    G --> H
    H --> I[AI / ML Systems]
    I --> J[Downstream Consumers]

    %% Observability
    B --> O[Metrics and Logs]
    C --> O
    D --> O
    G --> O

    O --> P[Dashboards and Alerts]
  `;

  const challenges = [
    'Multimodal data (text, PDFs, images, video, sensors)',
    'Inconsistent formats and metadata',
    'Silent pipeline failures',
  ];

  const solutions = [
    {
      icon: '🔧',
      title: 'Preprocessing as First-Class System',
      description: 'Not an auxiliary step, but the core of data reliability',
    },
    {
      icon: '✅',
      title: 'Validation Framework',
      description: 'Quality scores, not binary checks; intentional failure routing',
    },
    {
      icon: '🔄',
      title: 'Feedback Loops',
      description: 'Producer accountability through visible failures',
    },
  ];

  const techStack = [
    { name: 'Kafka', icon: '📨' },
    { name: 'EventHub', icon: '⚡' },
    { name: 'Kubernetes', icon: '☸️' },
    { name: 'Prometheus', icon: '📊' },
    { name: 'Grafana', icon: '📈' },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
            <span className="text-2xl">3️⃣</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Phase 3: Implementation
          </h2>
        </div>
      </motion.div>

      {/* Challenges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8"
      >
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span>⚠️</span> Enterprise Challenges:
        </h3>
        <div className="space-y-2">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isActive ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              className="flex items-center gap-3 text-[#cccccc]"
            >
              <span className="text-red-400">▸</span>
              <span>{challenge}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Solutions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mb-8"
      >
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span>💡</span> Solution Architecture:
        </h3>
        <div className="grid gap-4">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.15 }}
              className="flex items-start gap-4 p-4 bg-[#2d2d2d] rounded-lg border border-[#3c3c3c] hover:border-green-500/50 transition-colors"
            >
              <span className="text-3xl">{solution.icon}</span>
              <div>
                <h4 className="text-lg font-semibold text-green-400 mb-1">
                  {solution.title}
                </h4>
                <p className="text-sm text-[#cccccc]">{solution.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* System Architecture Diagram */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="mb-8"
      >
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span>🏗️</span> System Architecture:
        </h3>
        <div className="p-4 bg-[#1e1e1e] rounded-lg border border-[#3c3c3c] relative">
          <MermaidDiagram id="implementation-architecture" chart={architectureDiagram} />
          {/* Custom HTML label for Scalable Data Platform */}
          <div className="absolute bottom-[25%] left-[13%] text-white text-sm font-semibold pointer-events-none">
            Scalable Data Platform
          </div>
        </div>
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="p-5 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg border border-green-500/30"
      >
        <h3 className="text-lg font-semibold text-white mb-4">
          🛠️ Technology Stack:
        </h3>
        <div className="flex flex-wrap gap-3">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isActive ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 1.8 + index * 0.1 }}
              className="flex items-center gap-2 px-4 py-2 bg-[#2d2d2d] rounded-full border border-[#4b5563]"
            >
              <span>{tech.icon}</span>
              <span className="text-sm text-[#cccccc]">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
