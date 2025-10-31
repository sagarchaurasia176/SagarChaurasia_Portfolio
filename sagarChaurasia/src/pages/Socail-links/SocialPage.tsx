import { Contact2, Github, Globe, Linkedin, Code2 } from "lucide-react";

export default function SocialPage() {
  return (
    <>
      <section className="font-inter">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6 font-poppins">
          Connect with me
        </h2>
        <div className="flex flex-col ">
          <a
            href="https://github.com/sagarchaurasia176"
            target="_blank"
            className="flex items-center gap-4 text-slate-700 hover:text-indigo-600 transition-all duration-300 font-medium hover:bg-slate-50 p-2 rounded-lg"
          >
            <Github size={22} className="text-slate-600" />
            <span className="font-inter">github.com/sagarchaurasia176</span>
          </a>
          <a
            href="https://www.linkedin.com/in/sagarchaurasia74/"
            target="_blank"
            className="flex items-center gap-4 text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium hover:bg-slate-50 p-2 rounded-lg"
          >
            <Linkedin size={22} className="text-blue-500" />
            <span className="font-inter">linkedin.com/in/sagarchaurasia74</span>
          </a>
          {/* contact number */}
          <a
            href="tel:+917020303176"
            className="flex items-center gap-4 text-slate-700 hover:text-emerald-600 transition-all duration-300 font-medium hover:bg-slate-50 p-2 rounded-lg"
          >
            <Contact2 size={22} className="text-emerald-500" />
            <span className="font-inter">+91 7988595603</span>
          </a>
          <a
            href="https://drive.google.com/file/d/1oIah83fJx0PeTtXdjVTsEVbnUsRo9kcO/view"
            target="_blank"
            className="flex items-center gap-4 text-slate-700 hover:text-purple-600 transition-all duration-300 font-medium hover:bg-slate-50 p-2 rounded-lg"
          >
            <Globe size={22} className="text-purple-500" />
            <span className="font-inter">Resume</span>
          </a>
          {/* leetcode */}
          <a
            href="https://leetcode.com/u/chaurasiasagar/"
            target="_blank"
            className="flex items-center gap-4 text-slate-700 hover:text-orange-600 transition-all duration-300 font-medium hover:bg-slate-50 p-2 rounded-lg"
          >
            <Code2 size={22} className="text-orange-500" />
            <span className="font-inter">
              Problem Solving & Coding Challenges
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
