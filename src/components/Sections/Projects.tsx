import { profile } from "../../data/profile";

export function Projects() {
  return (
    <div className="max-w-4xl mx-auto px-1 md:px-0">
      {/* File header */}
      <div className="text-ide-text-muted text-xs md:text-sm mb-3 md:mb-4">
        <span className="syntax-comment">{`// projects/index.tsx - Featured projects showcase`}</span>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
        <span className="syntax-comment"># </span>
        Projects
      </h1>

      {/* Code-style header - hidden on small mobile */}
      <div className="hidden sm:block bg-ide-sidebar rounded-lg p-3 md:p-4 border border-ide-border mb-4 md:mb-6 font-mono text-xs md:text-sm">
        <span className="syntax-keyword">export const</span>
        <span className="syntax-variable"> projects</span>
        <span className="text-ide-text"> = </span>
        <span className="syntax-function">fetchProjects</span>
        <span className="text-ide-text">(</span>
        <span className="syntax-string">"featured"</span>
        <span className="text-ide-text">);</span>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {profile.projects.map((project, index) => (
          <div key={index} className="card group">
            {/* Project header */}
            <div className="flex items-start justify-between mb-3 md:mb-4">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-ide-accent/20 rounded-lg flex items-center justify-center text-lg md:text-xl">
                  📁
                </div>
                <div>
                  <h3 className="font-semibold text-ide-text group-hover:text-ide-accent transition-colors text-sm md:text-base">
                    {project.name}
                  </h3>
                  {project.featured && (
                    <span className="text-xs text-ide-accent-yellow">
                      ⭐ Featured
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-ide-text-muted text-xs md:text-sm mb-3 md:mb-4">
              {project.description}
            </p>

            {/* Code preview - hidden on small mobile */}
            <div className="hidden sm:block bg-ide-terminal rounded p-2 md:p-3 font-mono text-xs mb-3 md:mb-4 overflow-x-auto">
              <div className="flex items-center gap-2 text-ide-text-muted mb-2">
                <span>📄</span>
                <span>README.md</span>
              </div>
              <div>
                <span className="syntax-comment"># {project.name}</span>
              </div>
              <div className="mt-1">
                <span className="text-ide-text-muted line-clamp-2">
                  {project.description}
                </span>
              </div>
              <div className="mt-2">
                <span className="syntax-comment">## Tech Stack</span>
              </div>
              <div className="mt-1">
                <span className="text-ide-text-muted">
                  {project.tags.slice(0, 3).join(" • ")}
                </span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="badge badge-primary text-xs">
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-2 md:gap-3 pt-3 md:pt-4 border-t border-ide-border">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost text-xs md:text-sm flex items-center gap-1 md:gap-2 px-2 md:px-3"
                >
                  <span>🐙</span>
                  <span>Code</span>
                </a>
              )}
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost text-xs md:text-sm flex items-center gap-1 md:gap-2 px-2 md:px-3"
                >
                  <span>🌐</span>
                  <span>Demo</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* GitHub CTA */}
      <div className="mt-6 md:mt-8 p-4 md:p-6 bg-ide-sidebar rounded-lg border border-ide-border text-center">
        <h3 className="text-base md:text-lg font-semibold text-ide-text mb-2">
          Want to see more?
        </h3>
        <p className="text-ide-text-muted text-sm mb-3 md:mb-4">
          Check out my GitHub profile for more projects and contributions.
        </p>
        <a
          href={profile.personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary inline-flex items-center gap-2 text-sm"
        >
          <span>🐙</span>
          <span>View GitHub Profile</span>
        </a>
      </div>

      {/* Terminal hint - hidden on small mobile */}
      <div className="hidden sm:block mt-4 md:mt-6 p-3 md:p-4 bg-ide-terminal rounded-lg font-mono text-xs md:text-sm">
        <span className="terminal-prompt">visitor@portfolio:~$</span>
        <span className="terminal-command ml-2">projects --filter ai</span>
        <div className="terminal-info mt-2">
          💡 Tip: Use the terminal below to filter projects by tag!
        </div>
      </div>
    </div>
  );
}
