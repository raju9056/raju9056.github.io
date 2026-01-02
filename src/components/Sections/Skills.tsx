import { profile } from "../../data/profile";

export function Skills() {
  return (
    <div className="max-w-4xl mx-auto px-1 md:px-0">
      {/* File header */}
      <div className="text-ide-text-muted text-xs md:text-sm mb-3 md:mb-4">
        <span className="syntax-comment">{`// skills.json - Technical proficiencies`}</span>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
        <span className="syntax-comment"># </span>
        Technical Skills
      </h1>

      {/* JSON-style display - hidden on small mobile, visible on larger screens */}
      <div className="hidden sm:block bg-ide-sidebar rounded-lg p-4 md:p-6 border border-ide-border font-mono text-xs md:text-sm overflow-x-auto">
        <div className="text-ide-text">{"{"}</div>

        {profile.skillCategories.map((category, catIndex) => (
          <div key={category.category} className="ml-4 mt-4">
            <span className="syntax-property">"{category.category}"</span>
            <span className="text-ide-text">: [</span>
            <div className="ml-4 mt-2 space-y-1">
              {category.items.map((item, index) => (
                <div key={item}>
                  <span className="syntax-string">"{item}"</span>
                  {index < category.items.length - 1 && (
                    <span className="text-ide-text">,</span>
                  )}
                </div>
              ))}
            </div>
            <span className="text-ide-text">]</span>
            {catIndex < profile.skillCategories.length - 1 && (
              <span className="text-ide-text">,</span>
            )}
          </div>
        ))}

        <div className="mt-2 text-ide-text">{"}"}</div>
      </div>

      {/* Visual skill cards */}
      <h2 className="text-lg md:text-xl font-semibold text-ide-text mt-6 md:mt-8 mb-3 md:mb-4">
        <span className="syntax-comment">## </span>
        Skill Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {profile.skillCategories.map((category, index) => {
          const icons = ["💻", "☁️", "📊", "🔧", "🐳", "📈", "🔒", "⚡"];
          const badgeTypes = [
            "badge-primary",
            "badge-success",
            "badge-warning",
            "badge-primary",
            "badge-success",
            "badge-warning",
            "badge-primary",
            "badge-success",
          ];

          return (
            <div key={category.category} className="card">
              <h3 className="font-semibold text-ide-accent mb-2 md:mb-3 flex items-center gap-2 text-sm md:text-base">
                <span>{icons[index % icons.length]}</span> {category.category}
              </h3>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className={`badge ${
                      badgeTypes[index % badgeTypes.length]
                    } text-xs`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
