import { MapPin, Calendar } from "lucide-react";
import { experienceData } from "../../data/experience";
import SectionHeading from "../ui/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-surface-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey and work history"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-surface-200" />

          <div className="space-y-8">
            {experienceData.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-1 w-2 h-2 -translate-x-[3.5px] rounded-full bg-primary-500 ring-4 ring-primary-100" />

                <div className="p-6 rounded-xl bg-white border border-surface-200 hover:border-surface-300 hover:shadow-sm transition-all duration-200">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-surface-900">
                        {exp.jobTitle}
                      </h3>
                      <p className="text-primary-600 font-medium text-sm">
                        {exp.companyName}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-surface-500">
                      <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-100">
                        <Calendar size={12} />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-100">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-sm text-surface-600 leading-relaxed"
                      >
                        <span className="mt-2 w-1 h-1 rounded-full bg-surface-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
