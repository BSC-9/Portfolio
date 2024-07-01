import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 100);
  }, []);

  return (
    <section id='hero'>
    <div className="overflow-hidden text-white antialiased selection:bg-cyan-300 selection:text-cyan-900 h-screen">
      <div className="fixed top-0 left-0 z-[-10] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      
      <div className="pt-18 pb-8 lg:pt-20 lg:pb-1 relative h-full">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="flex flex-wrap items-center justify-center lg:justify-between h-full">
            <div className={`w-full lg:w-1/2 order-2 lg:order-1 mb-8 lg:mb-0 lg:pl-10 lg:mr-20 transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex flex-col items-center lg:items-start lg:ml-10">
                <h1 className="bg-gradient-to-r from-pink-900 to-red-500 pt-5 text-4xl lg:text-7xl font-bold tracking-tight lg:text-6xl bg-clip-text text-transparent">
                  I'M
                </h1>
                <h1 className="pb-4 lg:pb-8 text-4xl lg:text-7xl font-bold tracking-tight text-white lg:text-6xl text-center lg:text-left">
                  BALAJI SASANK CHAGANTI
                </h1>
                <span className="bg-gradient-to-r from-pink-900 to-purple-500 bg-clip-text text-3xl lg:text-5xl tracking-tight text-transparent text-center lg:text-left">
                  Front End and Machine Learning Developer
                </span>
              </div>
            </div>
            <div className={`w-full lg:w-auto flex justify-center lg:justify-end order-1 lg:mr-20 lg:pr-20 lg:order-2 mt-8 lg:mt-10 lg:ml-20 transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
              <div className="w-96 h-96 lg:w-128 lg:h-128 overflow-hidden rounded-full">
                <img
<<<<<<< HEAD
                  src={`${process.env.PUBLIC_URL}/Pictures/Balajipic.png`}
=======
                  src={`${process.env.PUBLIC_URL}/Pictures/balajipic.png`}
>>>>>>> 3beb2f466d64adc27af45582b14054c8069f60eb
                  alt="Your Photo"
                  className={`w-full h-full object-cover transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Hero;
