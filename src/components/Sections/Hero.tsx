import { profile } from "../../data/profile";
import "../styles/hero.css";

export function Hero() {
  const titles = profile.personal.title.split(" | ");

  const handleAIChatClick = () => {
    // Dispatch custom event to open AI Chat
    window.dispatchEvent(new CustomEvent("openAIChat"));
  };

  return (
    <div className="hero-container">
      {/* Enhanced animated background with floating particles */}
      <div className="hero-background">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
        <div className="floating-particles">
          {[...Array(12)].map((_, i) => (
            <div key={i} className={`particle particle-${i}`} />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="min-h-screen flex flex-col justify-center">
          {/* Top Section: Name/Title + Profile Picture */}
          <div className="hero-top-section">
            <div className="hero-top-left">
              {/* Code comment style intro */}
              <div className="hero-intro">
                <p className="syntax-comment">// Senior Developer & AI Specialist</p>
                <p className="syntax-comment">const portfolio = {`{`}</p>
              </div>

              {/* Main headline with typing animation */}
              <div className="hero-headline-wrapper">
                <h1 className="hero-headline">
                  {profile.personal.name.split(" ")[0]}
                  <span className="hero-highlight">.</span>
                </h1>
                <p className="hero-subheading">
                  I build intelligent systems &<br />
                  solve complex problems with code
                </p>
              </div>
            </div>

            {/* Profile Picture - Right Side */}
            <div className="hero-top-right">
              <div className="hero-image-wrapper-new">
                <div className="image-frame">
                  <img
                    src="/profile.jpeg"
                    alt={profile.personal.name}
                    className="hero-profile-image"
                  />
                  <div className="image-glow" />
                  <div className="image-frame-border" />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="hero-content-wrapper">
            {/* Left content */}
            <div className="hero-left-content">

              {/* Dynamic role badges */}
              <div className="hero-roles-container">
                {titles.map((title, index) => (
                  <span key={index} className="hero-role-badge">
                    {title.trim()}
                  </span>
                ))}
              </div>

              {/* Description with enhanced styling */}
              <div className="hero-description-new">
                <p className="text-base md:text-lg text-ide-text leading-relaxed">
                  {profile.summary}
                </p>
              </div>

              {/* Specialty areas */}
              <div className="hero-specialties">
                <div className="specialty-item">
                  <span className="specialty-icon">🤖</span>
                  <span>AI & LLMs</span>
                </div>
                <div className="specialty-item">
                  <span className="specialty-icon">📊</span>
                  <span>Data Science</span>
                </div>
                <div className="specialty-item">
                  <span className="specialty-icon">⚙️</span>
                  <span>System Design</span>
                </div>
                <div className="specialty-item">
                  <span className="specialty-icon">☁️</span>
                  <span>Cloud Native</span>
                </div>
              </div>

              {/* Buttons Section */}
              <div className="hero-buttons-section">
                {/* Enhanced CTA Buttons */}
                <div className="hero-cta-buttons">
                  <a
                    href={profile.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-btn-main"
                  >
                    <span>View My Work</span>
                    <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>

                {/* AI Chat Highlight */}
                <div className="hero-ai-chat-teaser">
                  <button 
                    onClick={handleAIChatClick}
                    className="ai-chat-badge"
                    type="button"
                    aria-label="Open AI Chat"
                  >
                    <span className="ai-chat-icon">🤖</span>
                    <span>Try My AI Assistant</span>
                    <svg className="ai-chat-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Closing code comment */}
              <div className="hero-outro">
                <p className="syntax-comment">{`}`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
