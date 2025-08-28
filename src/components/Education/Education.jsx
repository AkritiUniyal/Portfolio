



import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Here are the details of my academic background
        </p>
      </div>

      {/* Horizontal Timeline */}
      <div className="relative flex items-center justify-between overflow-x-auto space-x-16 py-10">
        {/* Horizontal Line */}
        <div className="absolute top-[200px] left-0 right-0 h-1 bg-white transform -translate-y-1/2 z-0"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div key={edu.id} className="relative flex-shrink-0 w-80">


            {/* Content Box */}
            <div className="mt-20 p-6 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]">
              <div className="flex items-center space-x-4">

                <div className=" bg-gray-400 border-4 border-[#8245ec] w-20 h-15 rounded-full flex justify-center items-center z-10">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <h4 className="text-md text-gray-300">{edu.school}</h4>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
              <p className="mt-2 text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
