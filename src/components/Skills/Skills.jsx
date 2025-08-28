
import React from "react";
import { SkillsInfo } from "../../constants";

const Skills = () => {
  // Flatten all skills from every category
  const allSkills = SkillsInfo.flatMap((category) => category.skills);

  return (
    <section
      id="skills"
      className="py-24 px-[10vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">

        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 justify-items-center">
        {allSkills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center text-center transition-transform hover:scale-110"
          >
            <img
              src={skill.logo}
              alt={`${skill.name} logo`}
              className="w-12 h-12 sm:w-14 sm:h-14 mb-2"
            />
            <span className="text-sm sm:text-base text-gray-300">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
