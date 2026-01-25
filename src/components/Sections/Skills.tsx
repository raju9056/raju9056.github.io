import { profile } from "../../data/profile";

export function Skills() {
  const categoryIcons: { [key: string]: string } = {
    "Languages": "💻",
    "Cloud & Data Platforms": "☁️",
    "Data Engineering & Analytics": "📊",
    "Tools & Frameworks": "🔧",
    "DevOps & Observability": "🚀",
    "BI & Visualization": "📈",
    "Frontend (Familiar)": "🎨",
    "Security & Governance": "🔒",
    "Methodologies": "⚡",
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-0">
      {/* Section Header */}
      <div className="mb-12">
        <div className="text-ide-text-muted text-xs md:text-sm mb-4">
          <span className="syntax-comment">{`// tech_arsenal.ts`}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="syntax-comment">const </span>
          <span className="text-ide-accent-cyan">skillSet</span>
          <span className="text-ide-text"> = [</span>
        </h1>
        <p className="text-ide-text-muted">Full spectrum of technologies and tools I work with</p>
      </div>

      {/* Skills Grid */}
      <div className="space-y-8">
        {profile.skillCategories.map((category, catIndex) => (
          <div key={category.category} className="skill-category">
            {/* Category Header */}
            <div className="skill-category-header">
              <span className="skill-category-icon">{categoryIcons[category.category] || "⚙️"}</span>
              <h2 className="skill-category-name">{category.category}</h2>
              <span className="skill-category-count">{category.items.length}</span>
            </div>

            {/* Skills List */}
            <div className="skill-items-grid">
              {category.items.map((item) => (
                <div key={item} className="skill-item-wrapper">
                  <div className={`skill-item skill-item-${catIndex}`}>
                    <span className="skill-dot" />
                    <span className="skill-name">{item}</span>
                    <div className="skill-glow" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Closing bracket */}
      <div className="mt-12 text-ide-text-muted">
        <p className="syntax-comment">{`]`}</p>
      </div>

      <style>{`
        .skill-category {
          margin-bottom: 3rem;
          animation: fadeInUp 0.6s ease-out;
        }

        .skill-category-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid rgba(137, 180, 250, 0.2);
        }

        .skill-category-icon {
          font-size: 1.75rem;
          flex-shrink: 0;
        }

        .skill-category-name {
          font-size: 1.25rem;
          font-weight: 700;
          color: #cdd6f4;
          margin: 0;
          flex: 1;
        }

        .skill-category-count {
          background: rgba(137, 180, 250, 0.1);
          border: 1px solid rgba(137, 180, 250, 0.2);
          border-radius: 999px;
          padding: 0.25rem 0.75rem;
          font-size: 0.85rem;
          color: #89b4fa;
          font-weight: 600;
        }

        .skill-items-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1rem;
        }

        .skill-item-wrapper {
          animation: fadeInUp 0.6s ease-out;
        }

        .skill-item {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.875rem 1.25rem;
          background: rgba(24, 24, 37, 0.5);
          border: 1px solid rgba(137, 180, 250, 0.15);
          border-radius: 0.75rem;
          color: #cdd6f4;
          font-weight: 500;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .skill-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent);
          transition: left 0.6s ease;
        }

        .skill-item:hover::before {
          left: 100%;
        }

        .skill-dot {
          width: 6px;
          height: 6px;
          background: #f5c2e7;
          border-radius: 50%;
          flex-shrink: 0;
          animation: dotPulse 2s ease-in-out infinite;
        }

        .skill-item:hover .skill-dot {
          animation: dotPulse 1s ease-in-out infinite;
        }

        .skill-name {
          position: relative;
          z-index: 1;
          white-space: nowrap;
        }

        .skill-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent, rgba(245, 194, 231, 0.3), transparent);
          opacity: 0;
          border-radius: 0.75rem;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .skill-item:hover {
          background: rgba(24, 24, 37, 0.8);
          border-color: rgba(245, 194, 231, 0.4);
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(245, 194, 231, 0.15);
        }

        .skill-item:hover .skill-glow {
          opacity: 1;
        }

        /* Skill item color variations */
        .skill-item-0 { --skill-color: #f5c2e7; }
        .skill-item-1 { --skill-color: #89b4fa; }
        .skill-item-2 { --skill-color: #a6e3a1; }
        .skill-item-3 { --skill-color: #f9e2af; }
        .skill-item-4 { --skill-color: #cba6f7; }
        .skill-item-5 { --skill-color: #94e2d5; }
        .skill-item-6 { --skill-color: #fab387; }
        .skill-item-7 { --skill-color: #f38ba8; }
        .skill-item-8 { --skill-color: #a6e3a1; }

        .skill-item-0:hover,
        .skill-item-1:hover,
        .skill-item-2:hover,
        .skill-item-3:hover,
        .skill-item-4:hover,
        .skill-item-5:hover,
        .skill-item-6:hover,
        .skill-item-7:hover,
        .skill-item-8:hover {
          border-color: var(--skill-color);
        }

        @keyframes dotPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.6;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .skill-items-grid {
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            gap: 0.75rem;
          }

          .skill-item {
            padding: 0.75rem 1rem;
            font-size: 0.85rem;
          }

          .skill-category-header {
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
