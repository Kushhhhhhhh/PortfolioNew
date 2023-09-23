'use client'
import React from 'react'
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';


const Skill = () => {
    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB'];
  
  return  <>
  <Navbar />
  <main className="flex items-center justify-center w-full min-h-screen">
  <div>
    <h2 className="text-center text-slate-500">My Skill Set</h2>
    <ul className="text-center">
      {skills.map((skill, index) => (
        <li key={index} className="py-2 transition ease-in-out duration-300 transform hover:scale-105">
          {skill}
        </li>
      ))}
    </ul>
  </div>
</main>

   <Footer />   
</>
}

export default Skill;
