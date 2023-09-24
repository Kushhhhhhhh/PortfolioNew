'use client'
import React from 'react'
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

const Skill = () => {

const skillsData = [
  { title: 'HTML', image: '../assets/HTML.png' },
  { title: 'CSS', image: '' },
  
];
  
  return  <>
  <Navbar />
  <main className="flex items-center justify-center w-full min-h-screen">
  <div>
    <h2 className="text-center text-slate-500">I'm proficient in working with :-</h2>
    <div className="flex space-x-4 overflow-x-auto">
          {skillsData.map((skill, index) => (
            <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
              <img src={skill.image} alt={skill.title} className="w-full" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{skill.title}</div>
              </div>
            </div>
          ))}
        </div>
  </div>
</main>

   <Footer />   
</>
};

export default Skill;
