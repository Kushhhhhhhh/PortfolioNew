'use client'
import React, { useState } from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import ProjectCard from '../components/ProjectCard.js';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All'); 
  
  const projectsData = [
    {
      projectName: "KiK's - Make Friends",
      description: "Kiks - Make Friends is a revolutionary social app connecting people worldwide, fostering genuine connections and meaningful friendships effortlessly.",
      imageUrl: "https://i.ibb.co/yFj6DFG/kik.jpg",
      tab: 'Web Development',
      languagesUsed: ["React + Redux", "Tailwind CSS"],
      link: "https://github.com/Kushhhhhhhh/KiK-s",
      live: "https://kiks-makefriends-5of8ouwhw-kushhhhhhhh.vercel.app" 
    },
    {
      projectName: "SumZ - Article Summarizer",
      description: "Sumz, an innovative AI article summarizer, condenses lengthy texts into succinct summaries, extracting key insights and central themes.",
      imageUrl: "https://i.ibb.co/Yj3DJn2/sumz.jpg",
      tab: 'Web Development',
      languagesUsed: ["React + Redux", "Tailwind CSS"],
      link: "https://github.com/Kushhhhhhhh/AI-Summarizer",
      live: "https://article-ai-summarizer.netlify.app"
    },
    {
      projectName: "Sushi Delight",
      description: "Sushi Delight is your go-to destination for exquisite sushi experiences.Our food ordering website offers range of freshly prepared sushi.",
      imageUrl: "https://i.ibb.co/1ngnVR2/sushi.png",
      tab: 'Web Design',
      languagesUsed: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/Kushhhhhhhh/sushi",
      live: "https://sushi-delight.netlify.app" 
    },
    {
      projectName: "Bubble Game",
      description: "Bubble Game is an engaging experience where players hatch bubbles to reveal numbers, aiming to match them for a perfect score of 10 points.",
      imageUrl: "https://i.ibb.co/LNKsMWk/bubble.jpg",
      tab: 'Games',
      languagesUsed: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/Kushhhhhhhh/Bubble-Game",
      live: "https://hatchbubbles.netlify.app" 
    },
    {
      projectName: "Weather Buddy",
      description: "Weather Buddy is a user-friendly weather app designed to provide real-time weather updates and forecasts.It keeps users informed and prepared for changing weather conditions.",
      imageUrl: "https://i.ibb.co/PtbyCTr/weather.jpg",
      tab: 'Web Development',
      languagesUsed: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/Kushhhhhhhh/Weather-App",
      live: "https://city-weatherbuddy.netlify.app" 
    },
  ];

  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
 
    if (tabName === 'All') {
      setFilteredProjects(projectsData);
    } else {
      const filteredProjectsByTab = projectsData.filter(
        (project) => project.tab === tabName
      );
      setFilteredProjects(filteredProjectsByTab);
    }
  };

  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen flex flex-col items-center">
  <div className="tabs flex flex-wrap justify-center m-4">
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
  <div className="project-cards flex flex-wrap justify-center gap-4 p-4">
  {filteredProjects.map((project, index) => (
    <div className="card-container text-slate-300 font-normal" key={index}>
      <ProjectCard
        projectName={project.projectName}
        description={project.description}
        imageUrl={project.imageUrl}
        languagesUsed={project.languagesUsed}
        link={project.link}
        live={project.live}
      />
    </div>
  ))}
</div>
</main>
      <Footer />
    </>
  );
}

export default Projects;
