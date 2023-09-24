'use client'
import React, { useState } from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

const skillsData = [
  { title: 'HTML5', image: 'https://th.bing.com/th/id/OIP.yoU6dIBrWrT17ccEvQu7OQHaHa?pid=ImgDet&rs=1' },
  { title: 'CSS3', image: 'https://blogs.glowscotland.org.uk/nl/public/ColtnessHS-ComputingScience/uploads/sites/12638/2017/06/css.png' },
  { title: 'JAVASCRIPT', image: 'https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-javascript-programming-language-code-coding-png-image_5288940.png' },
  { title: 'REACT', image: 'https://i.ibb.co/0Yv9ccn/REACT.png' },
  { title: 'NEXT JS', image: 'https://i.ibb.co/GThsmdw/NEXTJS.png' },
  { title: 'NODE JS', image: 'https://i.ibb.co/7gqXFgS/NODEJS.png' },
  { title: 'EXPRESS JS', image: 'https://i.ibb.co/MGDsXX5/EXPRESSJS.jpg' },
  { title: 'MONGODB', image: 'https://th.bing.com/th/id/OIP.ynwcNJH1HUECyQwXoX511QHaHa?pid=ImgDet&rs=1' },
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
        <div className="max-w-screen-lg p-4 w-full">
          <h2 className="text-center font- text-3xl text-slate-400 m-6">I'm proficient in working with :-</h2>
          <div className="flex justify-center">
            <div className="w-full md:w-48 p-2">
              <div className="flex items-center flex-col">
                <div className="image-container">
                  <img src={skillsData[currentIndex].image} alt={skillsData[currentIndex].title} className="rounded-lg shadow-lg object-cover" style={{ width: '200px', height: '200px' }} />
                  <br />
                </div>
                <div className="font-bold text-xl text-center mt-2">
                  <p className='text-slate-200 shadow-md'>{skillsData[currentIndex].title}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4 gap-16">
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
