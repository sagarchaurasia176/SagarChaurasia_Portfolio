import { skillCategories } from "../../data/skills";
import SectionHeading from "../ui/SectionHeading";

// skills
// functionality  added
export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-surface-50 dark:bg-surface-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Technologies I work with on a regular basis"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category : any) => (
            <div
              key={category.title}
              className="p-6 rounded-xl bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 hover:border-surface-300 dark:hover:border-surface-600 hover:shadow-sm transition-all duration-200"
            >
              <h3 className="text-sm font-semibold text-surface-500 dark:text-surface-400 uppercase tracking-wider mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill : any) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-50 dark:bg-surface-700/50 border border-surface-100 dark:border-surface-600 hover:border-surface-300 dark:hover:border-surface-500 transition-colors duration-200"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-5 h-5"
                      loading="lazy"
                    />
                    <span className="text-sm font-medium text-surface-700 dark:text-surface-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
