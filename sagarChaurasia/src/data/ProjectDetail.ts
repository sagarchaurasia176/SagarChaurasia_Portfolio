import type { Project } from "../types/Project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Dr-Buddy – DSA Revision Buddy (Chrome Extension)",
    description:
      "Dr-Buddy is a productivity-focused Chrome extension designed to help you track your DSA (Data Structures & Algorithms) progress. It reminds you at the right time with Chrome notifications, making it perfect for consistent daily practice and preparing for coding interviews! 💻🔔",
    tags: [
      "React",
      "TypeScript",
      "Firebase",
      "Chrome Extension APIs",
      "Tailwind CSS",
      "Webpack",
    ],
    imageUrl:
      "https://res.cloudinary.com/dc3mdr2ol/image/upload/v1756328934/chrs_enwb13.png",
    LiveUrl: "https://drbuddy.dev-saga.in",
    githubUrl: "https://github.com/sagarchaurasia176/DRB_ChromeExtension",
  },
  {
    id: 2,
    title: "Code-Analyzer–(Chrome Extension)",
    description:
      "The (Code-Analyzer) Chrome Extension is designed to help developers optimize their algorithms by providing instant insights into time and space complexity. Whether you are browsing coding platforms, reviewing code snippets, or working on your own projects, this extension simplifies complexity analysis, allowing you to write more efficient and optimized code.",
    tags: [
      "Typescript",
      "React",
      "Tailwind CSS",
      "Node.Js,",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Docker",
      "Cloudflare",
    ],
    imageUrl:
      "https://res.cloudinary.com/dc3mdr2ol/image/upload/v1756328934/db_gbrp3h.png",
    LiveUrl: "https://canalyzer.dev-saga.in",
    githubUrl:
      "https://github.com/sagarchaurasia176/Code-Analyzer-chrome-extension",
  },
];
