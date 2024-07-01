import React from 'react';
import srm from '../Pictures/srm.png';
import vaels from '../Pictures/vaels.jpeg';

const Education = () => {
  return (
    <section id="education">
    <div className="bg-gray-900 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-20 text-center bg-gradient-to-r from-red-900 to-pink-500 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 mb-12 flex items-center lg:pl-20">
            <div className="flex-1">
              <p className="font-bold text-3xl text-white mb-4">SRM Institute of Science & Technology</p>
              <p className="text-xl text-gray-300 mb-2">B.Tech CSE - AI ML</p>
              <p className="text-xl text-gray-300 mb-2">2022 - 2026</p>
              <p className="text-xl text-gray-300 mb-2">CGPA: 9.25 till 2nd year</p>
            </div>
            <div className="ml-6">
              <img src={srm} alt="SRM Institute of Science & Technology" className="rounded-lg" />
            </div>
          </div>
        </div>
        <div>
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 flex items-center lg:pl-20">
            <div className="flex-1">
              <p className="font-bold text-3xl text-white mb-4">Vaels International School</p>
              <p className="text-xl text-gray-300 mb-2">IGCSE, AS Level, A Level</p>
              <p className="text-xl text-gray-300 mb-2">2019-2022</p>
            </div>
            <div className="ml-6">
              <img src={vaels} alt="Vaels International School" className="rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Education;
