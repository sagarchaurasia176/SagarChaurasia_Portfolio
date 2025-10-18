import { Award } from "lucide-react";
import {
  frontendSkills,
  backendSkills,
  databaseSkills,
  cloudSkills,
  tools,
} from "../../data/Skills";

export default function SkillsPage() {
  return (
    <section id="skills">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-green-100 rounded-lg">
          <Award className="text-green-600" size={20} />
        </div>
        <h2 className="text-xl font-bold text-gray-800">Skills</h2>
      </div>

      {/* Skills Section */}
      <div className="space-y-6">
        {/* Frontend */}
        <div>
          <h4 className="font-semibold text-gray-700 mb-2">Frontend</h4>
          <div className="flex flex-wrap gap-3">
            {frontendSkills.map((skill) => (
              <span
                key={skill.name}
                className="flex items-center gap-2 bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full"
              >
                <img src={skill.icon} alt={skill.name} className="w-4 h-4" />
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div>
          <h4 className="font-semibold text-gray-700 mb-2">Backend</h4>
          <div className="flex flex-wrap gap-3">
            {backendSkills.map((skill) => (
              <span
                key={skill.name}
                className="flex items-center gap-2 bg-green-50 text-green-700 text-sm px-3 py-1 rounded-full"
              >
                <img src={skill.icon} alt={skill.name} className="w-4 h-4" />
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Database */}
        <div>
          <h4 className="font-semibold text-gray-700 mb-2">Database</h4>
          <div className="flex flex-wrap gap-3">
            {databaseSkills.map((skill) => (
              <span
                key={skill.name}
                className="flex items-center gap-2 bg-yellow-50 text-yellow-700 text-sm px-3 py-1 rounded-full"
              >
                <img src={skill.icon} alt={skill.name} className="w-4 h-4" />
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Cloud */}
        <div>
          <h4 className="font-semibold text-gray-700 mb-2">Cloud & DevOps</h4>
          <div className="flex flex-wrap gap-3">
            {cloudSkills.map((skill) => (
              <span
                key={skill.name}
                className="flex items-center gap-2 bg-purple-50 text-purple-700 text-sm px-3 py-1 rounded-full"
              >
                <img src={skill.icon} alt={skill.name} className="w-4 h-4" />
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h4 className="font-semibold text-gray-700 mb-2">Tools</h4>
          <div className="flex flex-wrap gap-3">
            {tools.map((skill) => (
              <span
                key={skill.name}
                className="flex items-center gap-2 bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
              >
                <img src={skill.icon} alt={skill.name} className="w-4 h-4" />
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
