import { Github, Linkedin, Code2, ArrowUp } from "lucide-react";
import { navLinks } from "../../data/navigation";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-surface-900 text-surface-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight mb-3">
              Sagar Chaurasia
            </h3>
            <p className="text-sm text-surface-400 leading-relaxed">
              Full Stack Developer passionate about building efficient web
              applications, Chrome Extensions, and AI-powered solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-surface-200 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-sm text-surface-400 hover:text-white transition-colors duration-200"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-surface-200 uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/sagarchaurasia176"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-surface-800 text-surface-400 hover:text-white hover:bg-surface-700 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/sagarchaurasia74/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-surface-800 text-surface-400 hover:text-white hover:bg-surface-700 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://leetcode.com/u/chaurasiasagar/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-surface-800 text-surface-400 hover:text-white hover:bg-surface-700 transition-colors duration-200"
                aria-label="LeetCode"
              >
                <Code2 size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-surface-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-surface-500">
            &copy; {new Date().getFullYear()} Sagar Chaurasia. All rights
            reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-surface-800 text-surface-400 hover:text-white hover:bg-surface-700 transition-colors duration-200 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
