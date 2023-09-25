'use client'
import React, { useState } from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import ProjectCard from '../components/ProjectCard.js';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All'); 

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
 
    console.log('Selected tab:', tabName);
  };
  const projectsData = [
    {
      projectName: "KiK's - Make Friends",
      description: "Kiks - Make Friends is a revolutionary social app connecting people worldwide, fostering genuine connections and meaningful friendships effortlessly.",
      imageUrl: "https://i.ibb.co/nntzPMw/kik.png",
      languagesUsed: ["React + Redux", "Tailwind CSS"], 
    },
    {
      projectName: "SumZ - Article Summarizer",
      description: "Sumz, the cutting-edge AI article summarizer, condenses lengthy content into concise insights, enhancing efficiency and comprehension effortlessly.",
      imageUrl: "https://i.ibb.co/Lzddzgd/sumz.png",
      languagesUsed: ["React + Redux", "Tailwind CSS"],
    },
    {
      projectName: "Sushi Delight",
      description: "Sushi Delight, the go-to food order website, offers an array of delectable sushi options for a delightful culinary experience.",
      imageUrl: "https://i.ibb.co/1LX3DQS/sushi.png",
      languagesUsed: ["HTML", "CSS", "JavaScript"], 
    },
    {
      projectName: "Bubble Game",
      description: "In Bubble Game, strategically hatch bubbles with the right numbers, aiming for high scores and a thrilling gaming experience.",
      imageUrl: "https://i.ibb.co/Z840wqg/bubble.png",
      languagesUsed: ["HTML", "CSS", "JavaScript"], 
    },
    {
      projectName: "Weather Buddy",
      description: "Weather Buddy, your reliable weather app, offers accurate forecasts and helpful weather insights, ensuring you're prepared for any climate changes.",
      imageUrl: "https://i.ibb.co/BKZCp6S/weather.png",
      languagesUsed: ["HTML", "CSS", "JavaScript"], 
    },
  ];

  return (
    <>
      <Navbar />
      <main className='w-full min-h-screen'>
        <div className="tabs flex justify-center m-8">
          <button
            className={`tab tab-bordered ${activeTab === 'All' ? 'tab-active' : ''}`}
            onClick={() => handleTabClick('All')}
          >
            All
          </button>
          <button
            className={`tab tab-bordered ${activeTab === 'Web Development' ? 'tab-active' : ''}`}
            onClick={() => handleTabClick('Web Development')}
          >
            Web Development
          </button>
          <button
            className={`tab tab-bordered ${activeTab === 'Web Design' ? 'tab-active' : ''}`}
            onClick={() => handleTabClick('Web Design')}
          >
            Web Design
          </button>
          <button
            className={`tab tab-bordered ${activeTab === 'Games' ? 'tab-active' : ''}`}
            onClick={() => handleTabClick('Games')}
          >
            Games
          </button>
        </div>
        <div className="project-cards">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              projectName={project.projectName}
              description={project.description}
              imageUrl={project.imageUrl}
              languagesUsed={project.languagesUsed}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Projects;
