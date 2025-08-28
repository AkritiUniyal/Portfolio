import React from "react";

const achievements = [
    {
        title: "Salesforce Agent Blazer Champion",
        link: "https://drive.google.com/file/d/1wtD2epULct19iJid5CUnfSc0Xt3He1TC/view?usp=sharing",
    },
    {
        title: "AWS Cloud Quest",
        link: "https://www.credly.com/badges/a14b814b-33f0-4d31-b349-0cfa0516edf6/linked_in?t=stk5zq",
    },
    {
        title: "SIH 2024 Finalist",
        link: "https://drive.google.com/file/d/1GXdEouIZ2PWqYi1zfoRy-QvnZYTxA_30/view?usp=drive_link",
    },
    {
        title: "GATE 2025 Qualified",
    },
];

const Achievements = () => {
    return (
        <section
            id="achievements-certifications"
            className="py-24 px-[10vw] font-sans bg-skills-gradient clip-path-custom"
        >
            {/* Section Title */}
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                    ACHIEVEMENTS & CERTIFICATIONS
                </h2>
                <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
                <p className="text-gray-400 mt-4 text-lg font-semibold">
                    Some of my notable achievements and certifications
                </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {achievements.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-white bg-gray-900 backdrop-blur-md p-6 rounded-2xl shadow-2xl 
                       hover:shadow-purple-500/50 hover:-translate-y-2 transform transition duration-300 
                       flex items-center justify-center text-center"
                    >
                        <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Achievements;
