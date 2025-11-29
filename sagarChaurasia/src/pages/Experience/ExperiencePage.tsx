import { Briefcase, Calendar } from "lucide-react";
import ExperienceData from "../../data/ExperienceData";
import { JSX } from "react/jsx-runtime";

export default function ExperiencePage() {
  function highlightText(text: string) {
    const keywords = [
      "HTML",
      "CSS",
      "JavASCRIPT",
      "Tailwind CSS",
      "Docker",
      "Prisma ORM",
      "Postgres",
      "Supabase",
      "Microsoft Azure",
      "Hostinger",
      "Gemini AI",
      "Specialist Developer",
      "Chrome extensions",
      "4.5★",
      "RESTful APIs",
      "Agile",
      "Apache server",
      "Admin Dashboard",
      "HR",
      "Admin",
      "Marketing",
      "feedback",
      " high-quality solutions",
      "project lifecycles"
    ];

    // Split text into parts and highlight keywords
    const parts = [];
    let currentText = text;
    console.log(currentText)
    let lastIndex = 0;

    // Create a regex pattern for all keywords
    const keywordPattern = new RegExp(`\\b(${keywords.join("|")})\\b`, "gi");

    // Find all keyword matches
    let match;
    while ((match = keywordPattern.exec(text)) !== null) {
      // Add text before the match
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }
      // Add highlighted keyword
      parts.push(
        <span
          key={`keyword-${match.index}`}
          className="font-bold text-slate-900"
        >
          {match[0]}
        </span>
      );

      lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    // Highlight numbers and percentages in the remaining text parts
    const finalParts: (string | JSX.Element)[] = [];
    parts.forEach((part, index) => {
      if (typeof part === "string") {
        const numberPattern = /(\d+(?:\.\d+)?%?)/g;
        const textParts = [];
        let lastIdx = 0;
        let numberMatch;

        while ((numberMatch = numberPattern.exec(part)) !== null) {
          if (numberMatch.index > lastIdx) {
            textParts.push(part.slice(lastIdx, numberMatch.index));
          }

          textParts.push(
            <span
              key={`number-${index}-${numberMatch.index}`}
              className="font-bold text-zinc-900"
            >
              {numberMatch[0]}
            </span>
          );

          lastIdx = numberMatch.index + numberMatch[0].length;
        }

        if (lastIdx < part.length) {
          textParts.push(part.slice(lastIdx));
        }

        finalParts.push(...textParts);
      } else {
        finalParts.push(part);
      }
    });

    return <span>{finalParts}</span>;
  }

  return (
    <>
      <section id="Experience">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Briefcase className="text-blue-600" size={20} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Experience</h2>
        </div>

        <div className="space-y-6">
          {ExperienceData.map((exp, index) => (
            <div className="border-l-4 border-blue-200 pl-6 pb-6" key={index}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {exp.JobTitle}
                  </h3>
                  <p className="text-blue-600 font-medium">{exp.CompanyName}</p>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  <Calendar size={14} />
                  {exp.Duration}
                </div>
              </div>
              <ul className="text-gray-600 space-y-2">
                {exp.Responsibilities.map((item, idx) => (
                  <li key={idx}>• {highlightText(item)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
