import { Briefcase, Calendar } from "lucide-react";
import ExperienceData from "../../data/ExperienceData";

export default function ExperiencePage() {
  function highlightText(text: string) {
    const keywords = [
      "MERN stack",
      "Next.js",
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
    ];

    let highlighted = text;

    // Highlight tech keywords
    keywords.forEach((keyword) => {
      highlighted = highlighted.replace(
        new RegExp(`(${keyword})`, "gi"),
        `<span class="font-extrabold">$1</span>`
      );
    });

    // Highlight numbers and percentages
    highlighted = highlighted.replace(
      /(\d+(\.\d+)?%?)/g,
      `<span class="font-bold text-gray-900">$1</span>`
    );

    return <span dangerouslySetInnerHTML={{ __html: highlighted }} />;
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
            <div
              className="border-l-4 border-blue-200 pl-6 pb-6"
              key={index}
            >
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
