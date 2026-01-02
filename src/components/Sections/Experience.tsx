import { profile } from "../../data/profile";

export function Experience() {
  return (
    <div className="max-w-4xl mx-auto px-1 md:px-0">
      {/* File header */}
      <div className="text-ide-text-muted text-xs md:text-sm mb-3 md:mb-4">
        <span className="syntax-comment">{`// experience.tsx - Work history timeline`}</span>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
        <span className="syntax-comment"># </span>
        Work Experience
      </h1>

      {/* Code-style header - hidden on small mobile */}
      <div className="hidden sm:block bg-ide-sidebar rounded-lg p-3 md:p-4 border border-ide-border mb-4 md:mb-6 font-mono text-xs md:text-sm">
        <span className="syntax-keyword">import</span>
        <span className="text-ide-text"> {"{ "}</span>
        <span className="syntax-variable">Experience</span>
        <span className="text-ide-text">{" }"} </span>
        <span className="syntax-keyword">from</span>
        <span className="syntax-string"> "@career/timeline"</span>
        <span className="text-ide-text">;</span>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-2 md:left-4 top-0 bottom-0 w-0.5 bg-ide-border" />

        {profile.experience.map((exp, index) => (
          <div
            key={index}
            className="relative pl-8 md:pl-12 pb-6 md:pb-8 last:pb-0"
          >
            {/* Timeline dot */}
            <div
              className={`absolute left-0 md:left-2 w-4 h-4 md:w-5 md:h-5 rounded-full border-2 ${
                exp.current
                  ? "bg-ide-accent-green border-ide-accent-green"
                  : "bg-ide-sidebar border-ide-border"
              }`}
            >
              {exp.current && (
                <div className="absolute inset-0 rounded-full bg-ide-accent-green animate-ping opacity-50" />
              )}
            </div>

            {/* Experience card */}
            <div className="card">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3 md:mb-4">
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-ide-text flex items-center gap-2 flex-wrap">
                    {exp.company}
                    {exp.current && (
                      <span className="badge badge-success text-xs">
                        Current
                      </span>
                    )}
                  </h3>
                  <p className="text-ide-accent text-sm md:text-base">
                    {exp.role}
                  </p>
                  <p className="text-ide-text-muted text-xs md:text-sm">
                    📍 {exp.location} • 📅 {exp.period}
                  </p>
                </div>
              </div>

              {/* Code-style component - hidden on small mobile */}
              <div className="hidden sm:block bg-ide-terminal rounded p-3 md:p-4 font-mono text-xs mb-3 md:mb-4 overflow-x-auto">
                <div>
                  <span className="syntax-keyword">{"<"}</span>
                  <span className="syntax-function">Position</span>
                </div>
                <div className="ml-4">
                  <span className="syntax-property">company</span>
                  <span className="text-ide-text">=</span>
                  <span className="syntax-string">"{exp.company}"</span>
                </div>
                <div className="ml-4">
                  <span className="syntax-property">role</span>
                  <span className="text-ide-text">=</span>
                  <span className="syntax-string">"{exp.role}"</span>
                </div>
                <div className="ml-4">
                  <span className="syntax-property">period</span>
                  <span className="text-ide-text">=</span>
                  <span className="syntax-string">"{exp.period}"</span>
                </div>
                <div className="ml-4">
                  <span className="syntax-property">technologies</span>
                  <span className="text-ide-text">=</span>
                  <span className="text-ide-text">{"{["}</span>
                  <span className="syntax-string">
                    {exp.technologies
                      .slice(0, 3)
                      .map((t) => `"${t}"`)
                      .join(", ")}
                  </span>
                  <span className="text-ide-text">{"]}"}</span>
                </div>
                <div>
                  <span className="syntax-keyword">{"/>"}</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-3 md:mb-4">
                <h4 className="text-xs md:text-sm font-semibold text-ide-text-muted mb-2">
                  Key Achievements:
                </h4>
                <ul className="space-y-1.5 md:space-y-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li
                      key={hIndex}
                      className="flex items-start gap-2 text-xs md:text-sm text-ide-text-muted"
                    >
                      <span className="text-ide-accent-green mt-0.5 md:mt-1">
                        ▸
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="badge badge-primary text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary stats */}
      <div className="mt-6 md:mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        <div className="card text-center py-3 md:py-4">
          <div className="text-2xl md:text-3xl font-bold text-ide-accent">
            6+
          </div>
          <div className="text-xs md:text-sm text-ide-text-muted">
            Years Experience
          </div>
        </div>
        <div className="card text-center py-3 md:py-4">
          <div className="text-2xl md:text-3xl font-bold text-ide-accent-green">
            4
          </div>
          <div className="text-xs md:text-sm text-ide-text-muted">
            Companies
          </div>
        </div>
        <div className="card text-center py-3 md:py-4">
          <div className="text-2xl md:text-3xl font-bold text-ide-accent-purple">
            1000+
          </div>
          <div className="text-xs md:text-sm text-ide-text-muted">
            Edge Devices
          </div>
        </div>
        <div className="card text-center py-3 md:py-4">
          <div className="text-2xl md:text-3xl font-bold text-ide-accent-yellow">
            30%
          </div>
          <div className="text-xs md:text-sm text-ide-text-muted">
            Build Time Reduced
          </div>
        </div>
      </div>
    </div>
  );
}
