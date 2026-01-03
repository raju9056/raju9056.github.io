import { profile } from "../../data/profile";

export function Hero() {
  return (
    <div className="max-w-4xl mx-auto px-1 md:px-0">
      {/* Main heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
        <span className="syntax-comment"># </span>
        <span className="text-gradient">Hello, World!</span> 👋
      </h1>

      <div className="mt-4 md:mt-6 space-y-4">
        <p className="text-lg md:text-xl text-ide-text">
          I'm{" "}
          <span className="text-ide-accent-pink font-semibold">
            {profile.personal.name}
          </span>
        </p>

        <div className="flex flex-wrap gap-2 text-xs md:text-sm">
          <span className="badge badge-primary">Data & Cloud Engineer</span>
          <span className="badge badge-success">6+ Years Experience</span>
          <span className="badge badge-warning">Open to Opportunities</span>
        </div>

        {/* Code block intro */}
        <div className="bg-ide-sidebar rounded-lg p-3 md:p-4 mt-4 md:mt-6 border border-ide-border overflow-hidden">
          <div className="flex items-center gap-2 mb-2 md:mb-3 text-xs text-ide-text-muted">
            <span>📄</span>
            <span>profile.ts</span>
          </div>
          <pre className="text-xs md:text-sm overflow-x-auto">
            <code>
              <span className="syntax-keyword">const</span>{" "}
              <span className="syntax-variable">engineer</span>{" "}
              <span className="text-ide-text">=</span> {"{"}
              {"\n"} <span className="syntax-property">name</span>:{" "}
              <span className="syntax-string">"{profile.personal.name}"</span>,
              {"\n"} <span className="syntax-property">role</span>:{" "}
              <span className="syntax-string">"Data & Cloud Engineer"</span>,
              {"\n"} <span className="syntax-property">expertise</span>: [{"\n"}{" "}
              <span className="syntax-string">"Azure & AWS"</span>,{"\n"}{" "}
              <span className="syntax-string">"ETL/ELT Pipelines"</span>,{"\n"}{" "}
              <span className="syntax-string">"Data Engineering"</span>,{"\n"}{" "}
              ],
              {"\n"} <span className="syntax-property">languages</span>: [{"\n"}{" "}
              <span className="syntax-string">"Python"</span>,{" "}
              <span className="syntax-string">"SQL"</span>,{" "}
              <span className="syntax-string">"Java"</span>,{"\n"} ],
              {"\n"} <span className="syntax-property">passion</span>:{" "}
              <span className="syntax-string">
                "Building scalable data solutions"
              </span>
              ,{"\n"}
              {"}"};
            </code>
          </pre>
        </div>

        {/* Summary */}
        <div className="mt-4 md:mt-6">
          <h2 className="text-base md:text-lg font-semibold text-ide-text mb-2">
            <span className="syntax-comment">## </span>About Me
          </h2>
          <p className="text-sm md:text-base text-ide-text-muted leading-relaxed">
            {profile.summary}
          </p>
        </div>

        {/* Feature Highlights - AI Chat & Contact */}
        <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* AI Chat Feature */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-ide-sidebar border border-ide-border rounded-lg p-4 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🤖</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-ide-text font-semibold text-sm mb-1 flex items-center gap-2">
                    AI Assistant
                    <span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30">
                      NEW
                    </span>
                  </h3>
                  <p className="text-ide-text-muted text-xs mb-3">
                    Chat with my AI assistant to learn about my experience, skills, and projects
                  </p>
                  <button
                    onClick={() => {
                      // Trigger AI chat - this will be handled by the parent component
                      const event = new CustomEvent('openAIChat');
                      window.dispatchEvent(event);
                    }}
                    className="btn btn-primary text-xs py-1.5 px-3 flex items-center gap-2"
                  >
                    <span>💬</span>
                    <span>Start Chat</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Feature */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-ide-sidebar border border-ide-border rounded-lg p-4 hover:border-green-500/50 transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📧</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-ide-text font-semibold text-sm mb-1 flex items-center gap-2">
                    Get in Touch
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  </h3>
                  <p className="text-ide-text-muted text-xs mb-3">
                    Send me a message directly through the contact form
                  </p>
                  <button
                    onClick={() => {
                      // Open contact tab
                      const event = new CustomEvent('openContactTab');
                      window.dispatchEvent(event);
                    }}
                    className="btn btn-secondary text-xs py-1.5 px-3 flex items-center gap-2 hover:bg-green-500/20 hover:border-green-500/50"
                  >
                    <span>✉️</span>
                    <span>Contact Me</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick links */}
        <div className="mt-6 md:mt-8 flex flex-wrap gap-3 md:gap-4">
          <a
            href={profile.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary flex items-center gap-2 text-sm md:text-base"
          >
            <span>🐙</span>
            <span>GitHub</span>
          </a>
          <a
            href={profile.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary flex items-center gap-2 text-sm md:text-base"
          >
            <span>💼</span>
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${profile.personal.email}`}
            className="btn btn-secondary flex items-center gap-2 text-sm md:text-base"
          >
            <span>📧</span>
            <span>Email</span>
          </a>
        </div>

        {/* Status indicator */}
        <div className="mt-6 md:mt-8 inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-ide-accent-green/10 border border-ide-accent-green/30 rounded-full">
          <span className="w-2 h-2 bg-ide-accent-green rounded-full animate-pulse" />
          <span className="text-ide-accent-green text-xs md:text-sm">
            Available for opportunities
          </span>
        </div>
      </div>
    </div>
  );
}
