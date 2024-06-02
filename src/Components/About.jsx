// src/Components/About.js
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';
import './About.css'; // Import the CSS for animations

const About = () => {
  return (
    <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('https://i.pinimg.com/originals/fb/a0/ba/fba0ba2c33fde3822352fdee5fce1c9b.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-white bg-opacity-80 p-10 rounded-lg shadow-lg backdrop-blur-lg max-w-lg mx-auto animate__animated animate__fadeIn">
          <img
            src="my.jpg"
            alt="Ojasvi Mittal"
            className="w-32 h-32 rounded-full mx-auto"
          />
          <h2 className="text-3xl font-bold text-center mt-4">Ojasvi Mittal</h2>
          <p className="text-center text-lg mt-2">Full Stack Developer</p>
          <p className="mt-4 text-center">
            Third-year Computer Science and Engineering undergrad at Graphic Era Hill University, Dehradun. Passionate about learning new programming languages and the latest tech advancements. Skilled in Python, C programming, and MERN stack. Always eager to tackle new challenges and build innovative projects.
          </p>
          <ul className="list-disc list-inside mt-4 text-left">
            <li>Python libraries & projects</li>
            <li>Android development</li>
            <li>Operating systems</li>
            <li>MERN (MongoDB, Express, React, Node)</li>
            <li>System security</li>
            <li>Tailwind CSS, React</li>
            <li>Web development projects</li>
          </ul>
          <div className="flex justify-center mt-6 space-x-4">
            <a
              href="https://github.com/thecarlover"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-transform transform hover:scale-110 duration-300 ease-in-out"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/ojasvi-mittal-a787821b2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-transform transform hover:scale-110 duration-300 ease-in-out"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default About;
