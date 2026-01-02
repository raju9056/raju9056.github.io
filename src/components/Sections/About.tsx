import { profile } from "../../data/profile";

export function About() {
  return (
    <div className="max-w-4xl mx-auto px-1 md:px-0">
      {/* File header */}
      <div className="text-ide-text-muted text-xs md:text-sm mb-3 md:mb-4">
        <span className="syntax-comment">{`// about.md - Learn more about me`}</span>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
        <span className="syntax-comment"># </span>
        About Me
      </h1>

      {/* Bio section */}
      <div className="prose prose-invert max-w-none">
        <div className="bg-ide-sidebar rounded-lg p-4 md:p-6 border border-ide-border mb-4 md:mb-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 md:gap-4">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-ide-accent/20 rounded-full flex items-center justify-center text-2xl md:text-3xl flex-shrink-0">
              👨‍💻
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-lg md:text-xl font-semibold text-ide-text">
                {profile.personal.name}
              </h2>
              <p className="text-ide-accent text-sm md:text-base">
                Data & Cloud Engineer
              </p>
              <p className="text-ide-text-muted text-xs md:text-sm mt-1">
                📍 {profile.personal.location || "Dallas, TX"}
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-lg md:text-xl font-semibold text-ide-text mt-6 md:mt-8 mb-3 md:mb-4">
          <span className="syntax-comment">## </span>
          Professional Summary
        </h2>
        <p className="text-ide-text-muted leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
          {profile.summary}
        </p>

        <h2 className="text-lg md:text-xl font-semibold text-ide-text mt-6 md:mt-8 mb-3 md:mb-4">
          <span className="syntax-comment">## </span>
          What I Do
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
          <div className="card">
            <div className="text-xl md:text-2xl mb-2">📊</div>
            <h3 className="font-semibold text-ide-text mb-1 md:mb-2 text-sm md:text-base">
              Data Engineering
            </h3>
            <p className="text-ide-text-muted text-xs md:text-sm">
              6+ years designing ETL/ELT pipelines, data lakes, and real-time
              streaming systems with Spark, Kafka, and Databricks.
            </p>
          </div>

          <div className="card">
            <div className="text-xl md:text-2xl mb-2">☁️</div>
            <h3 className="font-semibold text-ide-text mb-1 md:mb-2 text-sm md:text-base">
              Cloud Platforms
            </h3>
            <p className="text-ide-text-muted text-xs md:text-sm">
              Expert in Azure (ADF, Databricks, EventHub, ADLS) and AWS (S3,
              Lambda, ECS, Redshift) for scalable solutions.
            </p>
          </div>

          <div className="card">
            <div className="text-xl md:text-2xl mb-2">🔧</div>
            <h3 className="font-semibold text-ide-text mb-1 md:mb-2 text-sm md:text-base">
              DevOps & CI/CD
            </h3>
            <p className="text-ide-text-muted text-xs md:text-sm">
              Proficient in Azure DevOps, GitLab CI/CD, Kubernetes, Docker, and
              infrastructure automation with Terraform.
            </p>
          </div>

          <div className="card">
            <div className="text-xl md:text-2xl mb-2">🤖</div>
            <h3 className="font-semibold text-ide-text mb-1 md:mb-2 text-sm md:text-base">
              AI/ML Projects
            </h3>
            <p className="text-ide-text-muted text-xs md:text-sm">
              Building intelligent systems with LLMs, data analysis agents, and
              machine learning models for actionable insights.
            </p>
          </div>
        </div>

        <h2 className="text-lg md:text-xl font-semibold text-ide-text mt-6 md:mt-8 mb-3 md:mb-4">
          <span className="syntax-comment">## </span>
          Education
        </h2>

        <div className="space-y-3 md:space-y-4">
          {profile.education.map((edu, index) => (
            <div
              key={index}
              className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-ide-sidebar rounded-lg border border-ide-border"
            >
              <div className="text-xl md:text-2xl flex-shrink-0">🎓</div>
              <div>
                <h3 className="font-semibold text-ide-text text-sm md:text-base">
                  {edu.degree}
                </h3>
                <p className="text-ide-accent text-xs md:text-sm">
                  {edu.institution}
                </p>
                <p className="text-ide-text-muted text-xs">
                  {edu.location} • {edu.period}
                </p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-lg md:text-xl font-semibold text-ide-text mt-6 md:mt-8 mb-3 md:mb-4">
          <span className="syntax-comment">## </span>
          Awards & Recognition
        </h2>

        <div className="space-y-2 md:space-y-3">
          {profile.awards.map((award, index) => (
            <div
              key={index}
              className="flex items-start gap-2 md:gap-3 p-2 md:p-3 bg-ide-sidebar rounded-lg border border-ide-border"
            >
              <span className="text-lg md:text-xl flex-shrink-0">🏆</span>
              <div>
                <span className="font-semibold text-ide-accent text-sm md:text-base">
                  {award.company}
                </span>
                <p className="text-ide-text-muted text-xs md:text-sm">
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-lg md:text-xl font-semibold text-ide-text mt-6 md:mt-8 mb-3 md:mb-4">
          <span className="syntax-comment">## </span>
          Publications
        </h2>

        <div className="space-y-2 md:space-y-3">
          {profile.publications.map((pub, index) => (
            <a
              key={index}
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 md:gap-3 p-2 md:p-3 bg-ide-sidebar rounded-lg border border-ide-border hover:border-ide-accent/50 transition-colors"
            >
              <span className="text-lg md:text-xl flex-shrink-0">📝</span>
              <div>
                <span className="font-semibold text-ide-text hover:text-ide-accent text-sm md:text-base">
                  {pub.title}
                </span>
                <p className="text-ide-text-muted text-xs">{pub.type}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
