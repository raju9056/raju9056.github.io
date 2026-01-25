import { profile } from "../../data/profile";

export function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-0">
      {/* Section Header */}
      <div className="mb-12">
        <div className="text-ide-text-muted text-xs md:text-sm mb-4">
          <span className="syntax-comment">{`// career_overview.tsx`}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="syntax-comment">const </span>
          <span className="text-ide-accent-cyan">whoAmI</span>
          <span className="text-ide-text"> = </span>
          <span className="syntax-comment">{`{`}</span>
        </h1>
      </div>

      <div className="space-y-8">
        {/* Hero Profile Card */}
        <div className="about-hero-card">
          <div className="about-profile-section">
            <div className="about-avatar">
              <span className="about-avatar-emoji">👨‍💻</span>
            </div>
            <div className="about-info">
              <h2 className="about-name">{profile.personal.name}</h2>
              <p className="about-title">{profile.personal.title}</p>
              <p className="about-location">📍 {profile.personal.location}</p>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="about-section">
          <h2 className="about-section-title">
            <span className="syntax-comment">## </span>
            The Journey
          </h2>
          <p className="about-summary-text">
            {profile.summary}
          </p>
        </div>

        {/* Core Competencies */}
        <div className="about-section">
          <h2 className="about-section-title">
            <span className="syntax-comment">## </span>
            Core Competencies
          </h2>
          <div className="competencies-grid">
            <div className="competency-card">
              <div className="competency-icon">🤖</div>
              <h3>AI & Machine Learning</h3>
              <p>LLMs, RAG, data analysis agents, and intelligent systems</p>
            </div>
            <div className="competency-card">
              <div className="competency-icon">💾</div>
              <h3>Data Engineering</h3>
              <p>ETL/ELT pipelines, data lakes, real-time streaming</p>
            </div>
            <div className="competency-card">
              <div className="competency-icon">☁️</div>
              <h3>Cloud Architecture</h3>
              <p>Azure, AWS, distributed systems, scalable solutions</p>
            </div>
            <div className="competency-card">
              <div className="competency-icon">⚙️</div>
              <h3>Software Engineering</h3>
              <p>Full-stack development, system design, best practices</p>
            </div>
            <div className="competency-card">
              <div className="competency-icon">🔧</div>
              <h3>DevOps & Infrastructure</h3>
              <p>CI/CD, Kubernetes, Docker, IaC with Terraform</p>
            </div>
            <div className="competency-card">
              <div className="competency-icon">📊</div>
              <h3>Analytics & Insights</h3>
              <p>Data science, visualization, business intelligence</p>
            </div>
          </div>
        </div>

        {/* Education */}
        {profile.education.length > 0 && (
          <div className="about-section">
            <h2 className="about-section-title">
              <span className="syntax-comment">## </span>
              Education
            </h2>
            <div className="timeline">
              {profile.education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker">🎓</div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">{edu.degree}</h3>
                    <p className="timeline-company">{edu.institution}</p>
                    <p className="timeline-period">
                      {edu.location} • {edu.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Awards & Recognition */}
        {profile.awards.length > 0 && (
          <div className="about-section">
            <h2 className="about-section-title">
              <span className="syntax-comment">## </span>
              Awards & Recognition
            </h2>
            <div className="achievements-grid">
              {profile.awards.map((award, index) => (
                <div key={index} className="achievement-badge">
                  <span className="achievement-icon">🏆</span>
                  <div className="achievement-text">
                    <p className="achievement-company">{award.company}</p>
                    <p className="achievement-description">{award.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Publications */}
        {profile.publications.length > 0 && (
          <div className="about-section">
            <h2 className="about-section-title">
              <span className="syntax-comment">## </span>
              Publications
            </h2>
            <div className="publications-list">
              {profile.publications.map((pub, index) => (
                <a
                  key={index}
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="publication-item"
                >
                  <span className="publication-icon">📝</span>
                  <div className="publication-content">
                    <h3 className="publication-title">{pub.title}</h3>
                    <p className="publication-type">{pub.type}</p>
                  </div>
                  <svg className="publication-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Closing code comment */}
      <div className="mt-12 text-ide-text-muted">
        <p className="syntax-comment">{`}`}</p>
      </div>

      <style>{`
        .about-hero-card {
          background: linear-gradient(135deg, rgba(245, 194, 231, 0.05), rgba(137, 180, 250, 0.05));
          border: 1px solid rgba(137, 180, 250, 0.2);
          border-radius: 1rem;
          padding: 2rem;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .about-hero-card:hover {
          background: linear-gradient(135deg, rgba(245, 194, 231, 0.1), rgba(137, 180, 250, 0.1));
          border-color: rgba(245, 194, 231, 0.3);
        }

        .about-profile-section {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .about-avatar {
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, #f5c2e7 0%, #cba6f7 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 15px rgba(245, 194, 231, 0.3);
        }

        .about-avatar-emoji {
          font-size: 3rem;
          filter: brightness(0) saturate(100%);
        }

        .about-info {
          flex: 1;
        }

        .about-name {
          font-size: 1.75rem;
          font-weight: 700;
          color: #cdd6f4;
          margin: 0;
        }

        .about-title {
          color: #f5c2e7;
          font-weight: 600;
          font-size: 1.1rem;
          margin: 0.5rem 0 0 0;
        }

        .about-location {
          color: #6c7086;
          margin: 0.5rem 0 0 0;
          font-size: 0.95rem;
        }

        .about-section {
          animation: fadeInUp 0.6s ease-out;
        }

        .about-section-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #cdd6f4;
          margin: 0 0 1.5rem 0;
        }

        .about-summary-text {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #cdd6f4;
          background: rgba(24, 24, 37, 0.5);
          border-left: 3px solid #f5c2e7;
          padding: 1.5rem;
          border-radius: 0.5rem;
          margin: 0;
        }

        .competencies-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .competency-card {
          background: rgba(24, 24, 37, 0.6);
          border: 1px solid rgba(137, 180, 250, 0.15);
          border-radius: 0.75rem;
          padding: 1.5rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .competency-card:hover {
          background: rgba(24, 24, 37, 0.9);
          border-color: rgba(245, 194, 231, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(245, 194, 231, 0.15);
        }

        .competency-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          display: block;
        }

        .competency-card h3 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #cdd6f4;
          margin: 0 0 0.5rem 0;
        }

        .competency-card p {
          font-size: 0.9rem;
          color: #6c7086;
          margin: 0;
          line-height: 1.5;
        }

        .timeline {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .timeline-item {
          display: flex;
          gap: 1.5rem;
          padding: 1.5rem;
          background: rgba(24, 24, 37, 0.5);
          border-left: 2px solid #89b4fa;
          border-radius: 0.5rem;
          transition: all 0.3s ease;
        }

        .timeline-item:hover {
          background: rgba(24, 24, 37, 0.8);
          border-left-color: #f5c2e7;
        }

        .timeline-marker {
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .timeline-content {
          flex: 1;
        }

        .timeline-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #cdd6f4;
          margin: 0 0 0.5rem 0;
        }

        .timeline-company {
          color: #89b4fa;
          font-weight: 500;
          margin: 0;
          font-size: 0.95rem;
        }

        .timeline-period {
          color: #6c7086;
          font-size: 0.85rem;
          margin: 0.5rem 0 0 0;
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1rem;
        }

        .achievement-badge {
          background: linear-gradient(135deg, rgba(166, 227, 161, 0.1), rgba(137, 180, 250, 0.1));
          border: 1px solid rgba(166, 227, 161, 0.2);
          border-radius: 0.75rem;
          padding: 1.25rem;
          display: flex;
          gap: 1rem;
          transition: all 0.3s ease;
        }

        .achievement-badge:hover {
          background: linear-gradient(135deg, rgba(166, 227, 161, 0.2), rgba(137, 180, 250, 0.2));
          border-color: rgba(166, 227, 161, 0.4);
          transform: translateY(-2px);
        }

        .achievement-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .achievement-text {
          flex: 1;
        }

        .achievement-company {
          font-weight: 600;
          color: #a6e3a1;
          margin: 0;
          font-size: 0.95rem;
        }

        .achievement-description {
          color: #6c7086;
          font-size: 0.85rem;
          margin: 0.5rem 0 0 0;
        }

        .publications-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .publication-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
          background: rgba(24, 24, 37, 0.5);
          border: 1px solid rgba(137, 180, 250, 0.15);
          border-radius: 0.75rem;
          text-decoration: none;
          transition: all 0.3s ease;
          color: inherit;
        }

        .publication-item:hover {
          background: rgba(24, 24, 37, 0.8);
          border-color: rgba(245, 194, 231, 0.3);
          transform: translateX(4px);
        }

        .publication-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .publication-content {
          flex: 1;
        }

        .publication-title {
          font-weight: 600;
          color: #cdd6f4;
          margin: 0 0 0.25rem 0;
          transition: color 0.3s ease;
        }

        .publication-item:hover .publication-title {
          color: #89b4fa;
        }

        .publication-type {
          color: #6c7086;
          font-size: 0.85rem;
          margin: 0;
        }

        .publication-arrow {
          width: 1.25rem;
          height: 1.25rem;
          color: #89b4fa;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .publication-item:hover .publication-arrow {
          transform: translateX(4px);
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
          .about-avatar {
            width: 80px;
            height: 80px;
          }

          .about-avatar-emoji {
            font-size: 2.5rem;
          }

          .about-name {
            font-size: 1.5rem;
          }

          .competencies-grid {
            grid-template-columns: 1fr;
          }

          .achievements-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
