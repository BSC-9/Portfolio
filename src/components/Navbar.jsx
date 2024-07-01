import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="font-poppins">
      <nav
        className={`fixed z-50 top-0 w-full mx-auto px-4 py-3 transition-colors duration-300 ${
          isScrolled ? "bg-white shadow-lg text-black" : "bg-transparent text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-3xl font-bold">Sasank</div>
          <div className="hidden md:flex space-x-10 ml-auto text-lg items-center"> {/* Updated flex properties */}
            <a
              className="hover:text-cyan-600 cursor-pointer"
              onClick={() => scroll("hero")}
            >
              Home
            </a>
            <a
              className="hover:text-cyan-600 cursor-pointer"
              onClick={() => scroll("about")}
            >
              About
            </a>
            <a
              className="hover:text-cyan-600 cursor-pointer"
              onClick={() => scroll("skills")}
            >
              Skills
            </a>
            <a
              className="hover:text-cyan-600 cursor-pointer"
              onClick={() => scroll("projects")}
            >
              Projects
            </a>
            <a
              className="hover:text-cyan-600 cursor-pointer"
              onClick={() => scroll("education")}
            >
              Education
            </a>
            <button
              className="bg-cyan-600 text-white px-4 py-2 rounded-xl hover:bg-cyan-700"
              onClick={() => scroll("contact")}
            >
              Contact
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            >
              <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="mt-4 md:hidden bg-white text-black">
            <a
              href="#"
              className="block py-2 text-lg hover:text-cyan-600"
              onClick={() => scroll("hero")}
            >
              Home
            </a>
            <a
              href="#"
              className="block py-2 text-lg hover:text-cyan-600"
              onClick={() => scroll("about")}
            >
              About
            </a>
            <a
              href="#"
              className="block py-2 text-lg hover:text-cyan-600"
              onClick={() => scroll("skills")}
            >
              Skills
            </a>
            <a
              href="#"
              className="block py-2 text-lg hover:text-cyan-600"
              onClick={() => scroll("projects")}
            >
              Projects
            </a>
            <a
              href="#"
              className="block py-2 text-lg hover:text-cyan-600"
              onClick={() => scroll("education")}
            >
              Education
            </a>
            <button
              className="mt-4 w-full bg-cyan-600 text-white px-4 py-2 rounded-xl hover:bg-cyan-700"
              onClick={() => scroll("contact")}
            >
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
