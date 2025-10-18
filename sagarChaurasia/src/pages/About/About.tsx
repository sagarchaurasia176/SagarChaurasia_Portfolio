import { useState } from "react";

export default function About() {
  const [less, setLess] = useState(false);

    return (
    <>
      <section id="About" className=" text-black p-8 mt-8 rounded">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        {/* create a simple line */}
        <hr className="border-gray-300 my-4" />
        <p className="text-md">
          I am currently working at Volga_Infosys as a Specialist FullStack
          Developer, where I am recognized for my ability to solve problems
          quickly and deliver efficient solutions.
          {!less ? (
            <>
              <span>
                Over the course of my work, I have successfully built and
                deployed three major projects leveraging the MERN stack, Docker,
                and Next.js. Beyond my professional role, I have also developed
                two personal Chrome extensions, both of which have been
                well-received by users and hold an impressive 4.5-star rating on
                the Chrome Web Store.
              </span>
              <button
                className="text-blue-500 ml-2"
                onClick={() => setLess(true)}
              >
                Read more
              </button>
            </>
          ) : (
            <>
              <span>
                Over the course of my work, I have successfully built and
                deployed three major projects leveraging the MERN stack, Docker,
                and Next.js. Beyond my professional role, I have also developed
                two personal Chrome extensions, both of which have been
                well-received by users and hold an impressive 4.5-star rating on
                the Chrome Web Store. I am passionate about building scalable,
                high-performance applications and constantly look for
                opportunities to take on challenging problems. My quick
                problem-solving skills and hands-on experience make me a
                valuable contributor to any team I work with.
              </span>
              <button
                className="text-blue-500 ml-2"
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
