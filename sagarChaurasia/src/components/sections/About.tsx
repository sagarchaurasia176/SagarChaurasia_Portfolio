import { Code2, Chrome, Bot, Lightbulb } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const highlights = [
  {
    icon: Code2,
    title: "MERN Stack",
    description:
      "Building full-stack web applications with MongoDB, Express.js, React, and Node.js — from concept to production deployment.",
  },
  {
    icon: Chrome,
    title: "Chrome Extensions",
    description:
      "Creating productivity-focused browser extensions with React, TypeScript, and Chrome APIs that solve everyday developer pain points.",
  },
  {
    icon: Bot,
    title: "AI Projects",
    description:
      "Integrating AI models like Gemini to build intelligent features — from code analysis to automated content generation.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Strong DSA foundation with active LeetCode practice. Focused on writing clean, optimized, and maintainable code.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-surface-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="About Me"
          subtitle="A quick overview of what I do and what I'm passionate about"
        />

        {/* Bio */}
        <p className="text-surface-600 dark:text-surface-400 leading-relaxed max-w-3xl text-lg mb-12">
          I'm a <strong className="text-surface-800 dark:text-surface-200">Remote Full Stack Developer</strong> from
          Punjab, India with experience building and shipping{" "}
          <strong className="text-surface-800 dark:text-surface-200">3+ high-quality web applications</strong> using
          Next.js and the MERN stack. I've developed a complete admin dashboard
          used daily by 50+ employees, and optimized system performance —
          improving page load speeds by 40% and reducing API latency by 30%.
        </p>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group p-6 rounded-xl border border-surface-200 dark:border-surface-700 bg-surface-50/50 dark:bg-surface-900/50 hover:border-primary-200 dark:hover:border-primary-700 hover:bg-primary-50/30 dark:hover:bg-primary-900/20 transition-colors duration-200"
            >
              <div className="p-2.5 w-fit rounded-lg bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400 mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors duration-200">
                <item.icon size={20} />
              </div>
              <h3 className="font-semibold text-surface-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-surface-500 dark:text-surface-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
