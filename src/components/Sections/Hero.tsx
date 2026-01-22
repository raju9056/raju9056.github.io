import { profile } from "../../data/profile";
import "../styles/hero.css";

export function Hero() {
  return (
    <div className="hero-container">
      {/* Animated background elements */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-blob hero-blob-3" />

      <div className="max-w-6xl mx-auto px-1 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
          {/* Left side - Text content */}
          <div className="hero-content space-y-6 md:space-y-8 order-2 lg:order-1">
            {/* Main greeting */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                <span className="syntax-comment"># </span>
                <span className="hero-gradient-text">Hello, I'm {profile.personal.name}</span>
              </h1>
              <p className="text-lg md:text-2xl text-ide-accent-cyan font-light">
                Data & Cloud Engineer
              </p>
            </div>

            {/* Badge showcase */}
            <div className="flex flex-wrap gap-3">
              <span className="hero-badge">💾 Data Engineering</span>
              <span className="hero-badge">☁️ Cloud Architect</span>
              <span className="hero-badge">🚀 6+ Years</span>
            </div>

            {/* Description */}
            <div className="hero-description bg-ide-sidebar/50 backdrop-blur-md rounded-xl p-6 border border-ide-border/30 hover:border-ide-accent-pink/50 transition-colors duration-300">
              <p className="text-base md:text-lg text-ide-text leading-relaxed">
                {profile.summary}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={profile.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn hero-btn-primary group"
              >
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  🐙
                </span>
                <span>View GitHub</span>
              </a>
              <a
                href={`mailto:${profile.personal.email}`}
                className="hero-btn hero-btn-secondary group"
              >
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  📧
                </span>
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Status indicator */}
            <div className="hero-status inline-flex items-center gap-3 px-5 py-3 bg-ide-accent-green/10 border border-ide-accent-green/30 rounded-full">
              <span className="w-2 h-2 bg-ide-accent-green rounded-full animate-pulse" />
              <span className="text-ide-accent-green text-sm">
                Open to opportunities
              </span>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="hero-image-wrapper order-1 lg:order-2">
            <div className="hero-image-container">
              <img
                src="/profile.jpeg"
                alt={profile.personal.name}
                className="hero-image"
              />
              <div className="hero-image-border" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
