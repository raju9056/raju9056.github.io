import { motion } from 'framer-motion';
import type { SlideProps } from '../../../types/presentation';
import { MermaidDiagram } from '../MermaidDiagram';

export function ArchitectureSlide({ isActive }: SlideProps) {
  const architectureDiagram = `
flowchart LR
    %% Sources
    A[Enterprise Data Sources]

    %% Ingestion
    A --> B[Ingestion Layer]

    %% Preprocessing
    B --> C[Preprocessing and Normalization]

    %% Validation
    C --> D[Validation and Quality Rules]

    D -->|Valid| E[Quality Scoring]
    D -->|Invalid| F[Failure Handling]

    %% Failure Paths
    F --> F1[Retry Pipelines]
    F --> F2[Manual Review]
    F --> F3[Producer Feedback]

    %% Trusted Data
    E --> G[Trusted Data Store]
    G --> G1[Operational Database]
    G --> G2[Analytics / Warehouse]

    %% Consumption
    G --> H[Query and Retrieval Layer]
    H --> I[AI / ML Systems]
    I --> J[Downstream Consumers]

    %% Observability
    B --> O[Metrics and Logs]
    C --> O
    D --> O
    G --> O

    O --> P[Dashboards and Alerts]

    %% Platform Boundary
    subgraph Scalable Data Platform
        B
        C
        D
        E
        G
        H
    end
  `;

  const keyComponents = [
    {
      icon: '📥',
      title: 'Ingestion & Normalization',
      description: 'Controlled entry point with format detection and structure normalization',
    },
    {
      icon: '✅',
      title: 'Validation & Quality',
      description: 'Explicit rules, quality scoring, and intentional failure routing',
    },
    {
      icon: '🔄',
      title: 'Feedback Loops',
      description: 'Retry pipelines, manual review, and producer feedback mechanisms',
    },
    {
      icon: '📊',
      title: 'Observability',
      description: 'Metrics, logs, dashboards, and alerts across all pipeline stages',
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
            <span className="text-2xl">🏗️</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            System Architecture
          </h2>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-6"
      >
        <p className="text-lg text-[#cccccc]">
          Scalable data platform with validation, quality scoring, and feedback loops
        </p>
      </motion.div>

      {/* Mermaid Diagram */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-8 p-6 bg-[#1e1e1e] rounded-lg border border-[#3c3c3c]"
      >
        <MermaidDiagram id="architecture-diagram" chart={architectureDiagram} />
      </motion.div>

      {/* Key Components */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span>🔑</span> Key Components:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {keyComponents.map((component, index) => (
            <motion.div
              key={component.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isActive ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              className="flex items-start gap-3 p-4 bg-[#2d2d2d] rounded-lg border border-[#3c3c3c] hover:border-blue-500/50 transition-colors"
            >
              <span className="text-2xl">{component.icon}</span>
              <div>
                <h4 className="text-base font-semibold text-blue-400 mb-1">
                  {component.title}
                </h4>
                <p className="text-sm text-[#cccccc]">{component.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
