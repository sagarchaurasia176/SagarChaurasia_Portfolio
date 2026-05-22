import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Leetscope | Chrome Extension",
    description:
      "A Chrome Extension that helps developers optimize algorithms by providing instant insights into time and space complexity. Simplifies complexity analysis on coding platforms and code snippets.",
    tags: ["TypeScript", "React", "Tailwind CSS", "webpack"],
    imageUrl:
      "https://res.cloudinary.com/dc3mdr2ol/image/upload/v1779472854/Screenshot_2026-05-22_233004_myncmm.png",
    liveUrl: "https://leetscope.dev-saga.in/",
    githubUrl:
      "https://github.com/sagarchaurasia176/LeetScope-CodeAnalyzer-chrome-extension",
  },
  {
    id: 2,
    title: "DSA Revision Buddy | Chrome extenison",
    description:
      "A productivity-focused Chrome Extension that helps you track DSA (Data Structures & Algorithms) questions and reminds you at the right time with Chrome notifications. Perfect for consistent daily practice and coding interview prep!",
    tags: ["React.js", "TypeScript", "Tailwind CSS"],
    imageUrl:
      "https://res.cloudinary.com/dc3mdr2ol/image/upload/v1756328934/chrs_enwb13.png",
    liveUrl: "https://drbuddy.dev-saga.in/",
    githubUrl:
      "https://github.com/sagarchaurasia176/DSA_REV_BUDDY_Chorme_Extensiom",
  },
];

// ai-sdk project

export const AI_projects: Project[] = [
  {
    id: 1,
    title: "VideoMind | Learn Faster with AI Video Insights",
    description:
      "Built an AI-powered platform where users can paste YouTube links, ask questions, and instantly get contextual answers without watching full-length videos. Features include AI-generated mind maps, voice interaction, and semantic video understanding to improve learning and productivity by simplifying long-form video content consumption.",
    tags: ["Next.js", "MongoDB", "Prisma", "Claude API", "Tailwind CSS"],
    imageUrl:
    "https://res.cloudinary.com/dc3mdr2ol/image/upload/v1779473130/Screenshot_2026-05-16_011650_rmscxb.png",  
    liveUrl: "#",
    githubUrl:
      "https://github.com/sagarchaurasia176/Vid-Intel.ai",
  },
  //   {
  //   id: 2,
  //   title: "Comming soon...",
  //   description:"",
  //   tags: [""],
  //   imageUrl:
  //   "",  
  //   liveUrl: "#",
  //   githubUrl:
  //     "",
  // },
];
