


import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Let’s connect on my socials 🚀
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-8 mt-8">
        {/* Email */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=akritiuniyal31@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-4xl hover:text-purple-400 transition"
        >
          <FaEnvelope />
        </a>



        {/* GitHub */}
        <a
          href="https://github.com/AkritiUniyal"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-4xl hover:text-purple-400 transition"
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/akriti-uniyal-029640291/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-4xl hover:text-purple-400 transition"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};

export default Contact;
