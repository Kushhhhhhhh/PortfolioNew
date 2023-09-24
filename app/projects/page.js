import React from 'react'
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

const Projects = () => {

   const data = [
      {
        project: {
          title: "Kiks",
          description: "My Social Media App"
        }
      },
    ];

  return <>
 <Navbar />

    <main className='w-full min-h-screen'>
    <div className="card card-side bg-base-100 shadow-xl">
  <figure>
   <img src="" alt="Movie"/>
   </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">{language}</button>
    </div>
  </div>
</div>  
    </main>

 <Footer /> 
    </>
}

export default Projects;
