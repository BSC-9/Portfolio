import React from 'react';

const Skills = () => {
  return (
    <section id="skills">
    <div className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-red-900 to-pink-500 bg-clip-text text-transparent text-center mb-12 lg:pb-12">Area of Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex items-center justify-center p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <img src={`${process.env.PUBLIC_URL}/Pictures/Reactpic.jpeg`} alt="React" className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg" />
          </div>
          <div className="flex items-center justify-center p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <img src={`${process.env.PUBLIC_URL}/Pictures/Tailwindcss.jpg`} alt="Tailwind CSS" className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg" />
          </div>
          <div className="flex items-center justify-center p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <img src={`${process.env.PUBLIC_URL}/Pictures/javascriptpic.jpg`} alt="JavaScript" className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg" />
          </div>
          <div className="flex items-center justify-center p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <img src={`${process.env.PUBLIC_URL}/Pictures/Pythonpic.jpg`} alt="Python" className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg" />
          </div>
          <div className="flex items-center justify-center p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <img src={`${process.env.PUBLIC_URL}/Pictures/sci.png`} alt="Scikit-learn" className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg" />
          </div>
          <div className="flex items-center justify-center p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <img src={`${process.env.PUBLIC_URL}/Pictures/CPP.png`} alt="C++" className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg" />
          </div>
          <div className="flex items-center justify-center p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <img src={`${process.env.PUBLIC_URL}/Pictures/git.png`} alt="Git" className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg" />
          </div>
          <div className="flex items-center justify-center p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <img src={`${process.env.PUBLIC_URL}/Pictures/azure.png`} alt="Azure" className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg" />
          </div>
          <div className="flex items-center justify-center p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <img src={`${process.env.PUBLIC_URL}/Pictures/mysql.png`} alt="MySQL" className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Skills;
