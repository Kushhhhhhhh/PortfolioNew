'use client'
import React from 'react'
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

const Skill = () => {
    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB'];
  
  return  <>
  <Navbar />

      <main className='w-full min-h-screen'>
      <div>
      <h2>My Skill Set</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
      </main>

   <Footer />   
</>
}

export default Skill;
