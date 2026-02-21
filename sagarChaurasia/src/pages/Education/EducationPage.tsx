import { GraduationCap } from "lucide-react";
import education from "../../data/Education";

export default function EducationPage() {
  return (
    <>
      <section id="Education">
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-orange-100 rounded-lg">
            <GraduationCap className="text-orange-600" size={20} />
          </div>
          <h2 className="text-xl font-bold text-gray-800">Education</h2>
        </div>

        {/* Education List */}
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-4 border rounded-xl shadow-sm hover:shadow-md transition bg-white"
            >
              <h3 className="font-semibold text-gray-800 text-lg">
                {edu.degree}, {edu.field}
              </h3>
              <p className="text-blue-600 text-sm">{edu.institution}</p>
              <p className="text-gray-500 text-sm">
                {edu.startDate} - {edu.endDate}
              </p>
              {edu.Grade && (
                <p className="text-gray-600 text-sm">Grade: {edu.Grade}</p>
              )}

              {edu.skills && edu.skills.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {edu.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-orange-50 text-orange-700 text-xs rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
