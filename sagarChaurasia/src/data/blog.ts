import type { BlogPost } from "../types";

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Production-Ready Chrome Extensions with React & TypeScript",
    excerpt:
      "A complete guide to building, testing, and publishing Chrome Extensions using modern React and TypeScript tooling with Webpack bundling.",
    category: "Chrome Extensions",
    date: "2025-11-15",
    readTime: "8 min read",
    url: "https://dops.dev-saga.in/",
  },
  {
    id: 2,
    title: "Dockerizing a MERN Stack Application for Production",
    excerpt:
      "Step-by-step guide to containerizing a full MERN stack app with Docker and Docker Compose, including multi-stage builds and environment management.",
    category: "DevOps",
    date: "2025-10-20",
    readTime: "12 min read",
    url: "https://dops.dev-saga.in/",
  },
  {
    id: 3,
    title: "Integrating Gemini AI into Your Next.js Application",
    excerpt:
      "Learn how to leverage Google's Gemini AI API to build intelligent features like content generation, code analysis, and conversational interfaces.",
    category: "AI",
    date: "2025-09-10",
    readTime: "10 min read",
    url: "https://dops.dev-saga.in/",
  },
  {
    id: 4,
    title: "Optimizing React Performance: Lessons from Building Admin Dashboards",
    excerpt:
      "Practical performance optimization techniques including code splitting, lazy loading, memoization, and API caching that improved load times by 40%.",
    category: "Web Development",
    date: "2025-08-05",
    readTime: "7 min read",
    url: "https://dops.dev-saga.in/",
  },
  {
    id: 5,
    title: "Setting Up CI/CD Pipelines with Jenkins for Node.js Apps",
    excerpt:
      "A practical walkthrough of configuring Jenkins pipelines for automated testing, building, and deployment of Node.js applications.",
    category: "DevOps",
    date: "2025-07-18",
    readTime: "9 min read",
    url: "https://dops.dev-saga.in/",
  },
  {
    id: 6,
    title: "Building a YouTube Distraction Blocker Chrome Extension",
    excerpt:
      "How I built a Chrome Extension that removes distracting elements from YouTube to boost productivity and maintain focus during study sessions.",
    category: "Chrome Extensions",
    date: "2025-06-22",
    readTime: "6 min read",
    url: "https://dops.dev-saga.in/",
  },
];

export const blogCategories = [
  "All",
  "Web Development",
  "DevOps",
  "AI",
  "Chrome Extensions",
];
