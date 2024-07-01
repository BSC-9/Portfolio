import React from 'react';
import Reactpic from '../Pictures/Reactpic.jpeg';
import Tailwindcss from '../Pictures/Tailwindcss.jpg';
import Javascriptpic from '../Pictures/javascriptpic.jpg';
import Pythonpic from '../Pictures/Pythonpic.jpg';
import sci from '../Pictures/sci.png';
import CPP from '../Pictures/CPP.png';
import git from '../Pictures/git.png';
import azure from '../Pictures/azure.png';
import mysql from '../Pictures/mysql.png';

const Skills = () => {
  return (
    <section id="skills">
    <div className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-red-900 to-pink-500 bg-clip-text text-transparent text-center mb-12 lg:pb-12">Area of Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex items-center justify-center p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <img src={Reactpic} alt="React" className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg" />
          </div>
          <div className="flex items-center justify-center p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <img src={Tailwindcss} alt="Tailwind CSS" className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg" />
          </div>
          <div className="flex items-center justify-center p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <img src={Javascriptpic} alt="JavaScript" className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg" />
          </div>
          <div className="flex items-center justify-center p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <img src={Pythonpic} alt="Python" className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg" />
          </div>
          <div className="flex items-center justify-center p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <img src={sci} alt="Scikit-learn" className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg" />
          </div>
          <div className="flex items-center justify-center p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <img src={CPP} alt="C++" className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg" />
          </div>
          <div className="flex items-center justify-center p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <img src={git} alt="Git" className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg" />
          </div>
          <div className="flex items-center justify-center p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <img src={azure} alt="Azure" className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg" />
          </div>
          <div className="flex items-center justify-center p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <img src={mysql} alt="MySQL" className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Skills;
