'use client'
import React from 'react'
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

const About = () => {
  return (
  <>
  <Navbar />
<main className="w-full min-h-screen container mx-auto py-8">
  <h1 className="text-4xl font-bold mb-4 text-center">About Me</h1>

  {/* Introduction */}
  <div className="max-w-screen-lg mx-auto mb-8">
    <h2 className="text-2xl font-bold mb-4 transition duration-150 ease-out hover:ease-in">Introduction</h2>
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl text-slate-800 font-semibold">Name</h3>
        <p className="text-slate-600">Kush Sharma</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl text-slate-800 font-semibold">Currently Pursuing</h3>
        <p className="text-slate-600">Bachelor's in Computer Application (2022-2025).</p>
      </div>
    </div>
  </div>

  {/* Education */}
  <div className="max-w-screen-lg mx-auto mb-8">
    <h2 className="text-2xl font-bold mb-4">Education</h2>
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl text-slate-800 font-semibold">High School</h3>
        <p className="text-slate-600">I have completed my high school in 2022 with 7.92 CGPA.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl text-slate-800 font-semibold">College</h3>
        <p className="text-slate-600">Currently I'm in my Second Year and In the last Semester, I've scored 7.2 CGPA</p>
      </div>
    </div>
  </div>

  {/* Self Evaluation */}
  <div className="max-w-screen-lg mx-auto mb-8">
    <h2 className="text-2xl font-bold mb-4">Self Evaluation</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl text-slate-800 font-semibold">Personal Growth</h3>
        <p className="text-slate-600">
          Reflecting on my experiences and seeking opportunities for growth in various aspects of life.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl text-slate-800 font-semibold">Adaptability</h3>
        <p className="text-slate-600">
          Quickly adjusting to new environments, technologies, and roles to stay effective and productive.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl text-slate-800 font-semibold">Continuous Learning</h3>
        <p className="text-slate-600">
          Actively seeking and absorbing knowledge to stay updated with industry trends and improve skills.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl text-slate-800 font-semibold">Team Collaboration</h3>
        <p className="text-slate-600">
          Working effectively with diverse teams, valuing different perspectives, and contributing to collective success.
        </p>
      </div>
    </div>
  </div>
</main>
<Footer />
  </>
  )
}

export default About;








