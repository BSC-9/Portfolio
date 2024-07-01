import React, { useEffect, useState } from 'react';

const About = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 100);
  }, []);

  return (
    <section id="about">
    <div className="selection:bg-cyan-300 selection:text-cyan-900 min-h-screen">
      <div className="fixed top-0 left-0 z-[-10] h-full w-full bg-[radial-gradient(circle, rgba(34,34,34,1) 0%, rgba(51,51,51,1) 35%, rgba(17,17,17,1) 100%)]"></div>
      
      <div className="pb-20 relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className={`transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="bg-gradient-to-r from-red-900 to-pink-500 bg-clip-text text-transparent text-4xl lg:text-5xl font-bold tracking-tight mb-14 text-center">
              About Me
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 w-16 bg-gradient-to-r from-pink-900 to-purple-500"></span>
            </h2>
            <div className="max-w-5xl mx-auto text-lg lg:text-xl text-white">
              <div className="bg-white p-6 rounded-lg text-black">
                <p className="mt-6 mb-6 leading-relaxed">
                  Passionate about crafting beautiful and functional web experiences.
                </p>
                <p className="mb-6">
                  I am Balaji Sasank Chaganti, a Third-year B.Tech student majoring in Computer Science. I excel in HTML, CSS, JavaScript, and front-end frameworks like React for building responsive and dynamic web applications. I am proficient in Python, C++, Java, particularly in Deep Learning and NLP using TensorFlow. Additionally, I have expertise in Azure and AWS, including EC2, S3, and SageMaker. My skills extend to MySQL for database management and version control with Git and PowerBI.
                </p>
                <p className="mb-6">
                  With a strong background in both front-end technologies and machine learning, I bring a unique perspective to the development process. I enjoy solving complex problems and pushing the boundaries of what's possible in the digital world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default About;
