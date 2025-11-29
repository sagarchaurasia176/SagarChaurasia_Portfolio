import { useState } from "react";

export default function About() {
  const [less, setLess] = useState(false);

    return (
    <>
      <section id="About" className="text-black p-8 mt-8 mx-4 border border-gray-300 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        {/* create a simple line */}
        <hr className="border-gray-300 my-4" />
        <p className="text-md leading-relaxed">
          <strong>Remote Full Stack Developer</strong> from <strong>Punjab, India</strong> with experience building and shipping <strong>3+ high-quality web applications</strong> using <strong>Next.js</strong> and the <strong>MERN stack</strong>.
          {!less ? (
            <>
              <span>
                I've deployed client projects on <strong>Apache Web Server</strong> with secure configurations and developed a complete <strong>MERN-based Admin Dashboard</strong> used daily by <strong>50+ employees</strong>. My work focuses on delivering <strong>fast, responsive, and user-friendly experiences</strong>.
              </span>
              <button
                className="text-blue-500 ml-2 hover:text-blue-700"
                onClick={() => setLess(true)}
              >
                Read more
              </button>
            </>
          ) : (
            <>
              <span>
                I've deployed client projects on <strong>Apache Web Server</strong> with secure configurations and developed a complete <strong>MERN-based Admin Dashboard</strong> used daily by <strong>50+ employees</strong>. My work focuses on delivering <strong>fast, responsive, and user-friendly experiences</strong>. I collaborate closely with <strong>senior developers</strong> to translate requirements into <strong>scalable solutions</strong> and have optimized system performance, improving <strong>page load speeds by 40%</strong> and reducing <strong>API latency by 30%</strong> through caching and code improvements.
              </span>
              <button
                className="text-blue-500 ml-2 hover:text-blue-700"
                onClick={() => setLess(false)}
              >
                Show less
              </button>
            </>
          )}
        </p>
      </section>
    </>
  );
}
