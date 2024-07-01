import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Projects = () => {
  const projects = [
    {
      name: 'Accident Detection and Alarming System',
      imageUrl: `${process.env.PUBLIC_URL}/Pictures/Accident.jpeg`,
      githubUrl: 'https://github.com/BSC-9/Accident_Detection_and_alarming_system',
    },
    {
      name: 'Portfolio',
      imageUrl: `${process.env.PUBLIC_URL}/Pictures/portfoliopic.png`,
      githubUrl: 'https://github.com/BSC-9/Portfolio',
    },
    {
      name: 'SIH_INTERNAL-2023_DIGITAL_TWIN',
      imageUrl: `${process.env.PUBLIC_URL}/Pictures/SIH.jpeg`,
      githubUrl: 'https://github.com/BSC-9/SIH_INTERNAL-2023_DIGITAL_TWIN',
    },
    {
      name: 'Client-Lawyer Case Type Classification',
      imageUrl: `${process.env.PUBLIC_URL}/Pictures/law.png`,
      githubUrl: 'https://github.com/BSC-9/Client-Lawyer-case-type-classification',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section id='projects'>
    <div className="bg-gray-900 min-h-screen py-10 lg:py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl lg:text-5xl font-bold mb-10 lg:mb-20 text-center bg-gradient-to-r from-red-900 to-pink-500 bg-clip-text text-transparent">MY PROJECTS</h2>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="flex justify-center">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="block transform transition duration-300 hover:scale-105 cursor-pointer">
                <img src={project.imageUrl} alt={project.name} className="w-full max-w-3xl h-auto rounded-lg shadow-lg mx-auto" />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </section>
  );
};

export default Projects;
