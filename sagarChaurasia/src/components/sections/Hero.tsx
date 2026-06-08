import { Github, Linkedin, Code2, ArrowDown, FileText } from "lucide-react";
import Button from "../ui/Button";

const orbitIcons = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB", angle: 0 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", alt: "Express.js", angle: 60 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React", angle: 120 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js", angle: 180 },
  { src: "https://www.svgrepo.com/show/306500/openai.svg", alt: "AI", angle: 240 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", alt: "Next.js", angle: 300 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-surface-50 via-white to-primary-50/30 dark:from-surface-950 dark:via-surface-900 dark:to-primary-900/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text Content */}
          <div>
            <p className="text-primary-600 dark:text-primary-400 font-medium mb-3 tracking-wide">
              Hello, I'm
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-surface-900 dark:text-white tracking-tight leading-tight">
              Sagar Chaurasia
            </h1>

            <h2 className="mt-3 text-xl sm:text-2xl font-semibold text-surface-600 dark:text-surface-400">
              Full Stack Developer
            </h2>

            <p className="mt-5 text-lg text-surface-500 dark:text-surface-400 leading-relaxed max-w-2xl">
              I build fast, scalable web applications and Chrome Extensions.
              Specializing in the MERN stack, Next.js, and AI-powered solutions
              that solve real-world problems.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                as="a"
                href="#projects"
                variant="primary"
                size="lg"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Projects
                <ArrowDown size={16} />
              </Button>
              <Button
                as="a"
                href="#contact"
                variant="outline"
                size="lg"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact Me
              </Button>
              <Button
                as="a"
                href="https://drive.google.com/file/d/1cmUwzE_srf3KIZgGdb2TAAALr0a_hLfj/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                size="lg"
              >
                <FileText size={16} />
                Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex items-center gap-4">
              <span className="text-xs text-surface-400 uppercase tracking-widest font-medium">
                Find me on
              </span>
              <div className="h-px w-8 bg-surface-300 dark:bg-surface-700" />
              <div className="flex gap-2 items-center justify-center">
                <a
                  href="https://github.com/sagarchaurasia176"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-surface-500 hover:text-surface-900 dark:hover:text-white hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/sagarchaurasia74/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-surface-500 hover:text-surface-900 dark:hover:text-white hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                
                <a
                  href="https://leetcode.com/u/chaurasiasagar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-surface-500 hover:text-surface-900 dark:hover:text-white hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-200"
                  aria-label="LeetCode"
                >
                  <Code2 size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right — Rotating Orbit */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-80 h-80">
              {/* Orbit ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-surface-200 dark:border-surface-700" />
              <div className="absolute inset-8 rounded-full border border-dashed border-surface-200/60 dark:border-surface-700/60" />

              {/* Center label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-3xl font-extrabold text-primary-600 dark:text-primary-400">
                    MERN
                  </span>
                  <span className="block text-xs font-medium text-surface-400 mt-1 tracking-wider uppercase">
                    + AI Stack
                  </span>
                </div>
              </div>

              {/* Orbiting Icons */}
              {orbitIcons.map((icon, i) => (
                <div
                  key={icon.alt}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 orbit-icon"
                  style={{
                    "--start-angle": `${icon.angle}deg`,
                    "--orbit-radius": "140px",
                    "--orbit-duration": `${22 + i * 2}s`,
                  } as React.CSSProperties}
                >
                  <div className="p-2.5 rounded-xl bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 shadow-sm">
                    <img
                      src={icon.src}
                      alt={icon.alt}
                      className="w-8 h-8"
                      loading="eager"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
