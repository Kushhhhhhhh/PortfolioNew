'use client'
import React from 'react'

const About = () => {
  return (
  <>
<main className="w-full min-h-screen container mx-auto py-8">
<h1 className="text-4xl font-bold mb-4 text-center">About Me</h1>

{/* Introduction */}
<div className="mb-8 ">
  <h2 className="text-2xl font-bold mb-4 transition duration-150 ease-out hover:ease-in">Introduction</h2>
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
    <div className="bg-white p-6 rounded-lg shadow-lg ">
      <h3 className="text-xl text-slate-800 font-semibold">Name</h3>
      <p className="text-slate-600">Kush Sharma</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-lg ">
      <h3 className="text-xl text-slate-800 font-semibold">Currently Pursuing</h3>
      <p className="text-slate-600">Bachelor's in Computer Application</p>
    </div>
  </div>
</div>

{/* Education */}
<div>
  <h2 className="text-2xl font-bold mb-4">Education</h2>
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl text-slate-800 font-semibold">High School</h3>
      <p className="text-slate-600">I have completed my high school in 2022 with 7.92 CGPA</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl text-slate-800 font-semibold">College</h3>
      <p className="text-slate-600">Currently I'm in my Second Year and In the last Semester, I've scored 7.2 CGPA</p>
    </div>
  </div>
</div>
</main>
  </>
  )
}

export default About;








