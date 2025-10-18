import { Contact2, Github, Globe, Linkedin } from "lucide-react";

export default function SocialPage() {
  return (
    <>
      <section>
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Connect with me
        </h2>
        <div className="flex flex-col gap-3">
          <a
            href="https://github.com/sagarchaurasia176"
            target="_blank"
            className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Github size={20} />
            <span>github.com/sagarchaurasia176</span>
          </a>
          <a
            href="https://www.linkedin.com/in/sagarchaurasia74/"
            target="_blank"
            className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Linkedin size={20} />
            <span>linkedin.com/in/sagarchaurasia74</span>
          </a>
          {/* contact number */}
          <a
            href="tel:+917020303176"
            className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Contact2 size={20} />
            <span>+91 7988595603</span>
          </a>
          <a
            href="https://drive.google.com/file/d/1oIah83fJx0PeTtXdjVTsEVbnUsRo9kcO/view"
            target="_blank"
            className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Globe size={20} />
            <span>resume</span>
          </a>
        </div>
      </section>
    </>
  );
}
