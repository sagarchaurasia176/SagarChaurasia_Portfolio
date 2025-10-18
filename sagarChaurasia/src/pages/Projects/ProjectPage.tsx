import { Code, Github, ExternalLink } from "lucide-react";
import { projects } from "../../data/ProjectDetail";

export default function ProjectPage() {
  return (
    <section id="Projects">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-purple-100 rounded-lg">
          <Code className="text-purple-600" size={20} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">
          Personal_(Projects)
        </h2>
      </div>
      {/* Project Cards */}
      <div className=" flex-col gap-6 grid ">
        {projects.map((val, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white"
          >
            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {val.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-3">{val.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {val.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-4">
              {val.githubUrl && (
                <a
                  href={val.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-700 hover:text-black text-sm"
                >
                  <Github size={16} /> Code
                </a>
              )}
              {val.LiveUrl && (
                <a
                  href={val.LiveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-purple-600 hover:text-purple-800 text-sm"
                >
                  <ExternalLink size={16} /> Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
