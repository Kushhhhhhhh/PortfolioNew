'use client'
import React, { useState } from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

const skillsData = [
  { title: 'HTML', image: require('../assets/HTML.png').default },
  { title: 'CSS', image: require('../assets/CSS.jpeg').default },
  { title: 'JS', image: require('../assets/JS.jpeg').default },
  { title: 'REACT', image: require('../assets/REACT.png').default },
  { title: 'NEXTJS', image: require('../assets/NEXTJS.png').default },
  { title: 'NODEJS', image: require('../assets/NODEJS.webp').default },
  { title: 'EXPRESSJS', image: require('../assets/EXPRESSJS.jpeg').default },
  { title: 'MONGODB', image: require('../assets/MONGODB.jpg').default },
];

const Skill = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % skillsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + skillsData.length) % skillsData.length);
  };

  return (
    <>
      <Navbar />
      <main className="flex mt-5 justify-center w-full min-h-screen">
        <div>
          <h2 className="text-center font-semibold text-slate-400 m-8">I'm proficient in working with :-</h2>
          <div className="flex justify-center">
            <div className="w-full md:w-48 p-2">
              <div className="flex items-center flex-col">
                <img src={skillsData[currentIndex].image} alt={skillsData[currentIndex].title} className="w-full h-auto" />
                <div className="font-bold text-xl text-center mt-2">
                  <p>{skillsData[currentIndex].title}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button onClick={prevSlide} className="mr-2" disabled={currentIndex === 0}>
              Previous
            </button>
            <button onClick={nextSlide} className="ml-2" disabled={currentIndex === skillsData.length - 1}>
              Next
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Skill;
