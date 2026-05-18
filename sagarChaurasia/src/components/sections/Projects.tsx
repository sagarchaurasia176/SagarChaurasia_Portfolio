import { Github, ExternalLink } from "lucide-react";
import { projects } from "../../data/projects";
import SectionHeading from "../ui/SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-surface-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of projects I've built and shipped"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 overflow-hidden hover:border-surface-300 dark:hover:border-surface-600 hover:shadow-md dark:hover:shadow-surface-900/50 transition-all duration-200"
            >
              {/* Project Image */}
              <div className="aspect-video bg-surface-100 dark:bg-surface-700 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-surface-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-surface-500 dark:text-surface-400 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.slice(0, 5).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-surface-100 dark:bg-surface-700 text-surface-600 dark:text-surface-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 5 && (
                    <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-surface-100 dark:bg-surface-700 text-surface-400">
                      +{project.tags.length - 5}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors duration-200"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-surface-700 dark:text-surface-300 border border-surface-300 dark:border-surface-600 rounded-lg hover:border-surface-400 dark:hover:border-surface-500 hover:text-surface-900 dark:hover:text-white transition-colors duration-200"
                    >
                      <Github size={14} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
