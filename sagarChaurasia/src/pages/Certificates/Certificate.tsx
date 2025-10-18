import { Code } from "lucide-react";
import certifications from "../../data/Certification";

// certifcaicate page
export default function CertificatePage() {
  return (
    <section id="certificates">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-purple-100 rounded-lg">
          <Code className="text-purple-600" size={20} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">
            Certifications_(Courses)
        </h2>
      </div>

      {/* Project Cards */}
      {/* create two div one left and right */}
      <div className="grid md:grid-cols-2 gap-6">
      <div className="flex flex-col gap-6">
        {certifications.map((val, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white"
          >
            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {val.title}
            </h3>
            {/* Description */}
            <p className="text-gray-600 mb-3">{val.webDev}</p>
            <p className="text-gray-600 mb-3">Issued by: {val.company}</p>
            <p className="text-gray-600 mb-3">Credential ID: {val.link}</p>
         
          </div>
        ))}
      </div>
       {/* image */}
        <div className="flex flex-col items-center">
            {
                certifications.map((val, index) => (
                    <div key={index} className="mb-6">
                        <img src={val.image} alt={val.title} className="rounded-lg shadow-md" />
                    </div>
                ))
            }
            </div> 
      </div>


    </section>
  );
}
