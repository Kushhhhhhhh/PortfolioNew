import React, {useState} from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ProjectCard = ({ projectName, description, imageUrl, languagesUsed, link, live }) => {
    
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <div className="aspect-w-16 aspect-h-9">
        <img
          className="object-cover w-full h-full"
          src={imageUrl}
          alt={projectName}
        />
      </div>
      <div className="card-body">
        <h2 className="card-title text-lg font-semibold mb-2">{projectName}</h2>
        <p className="text-sm mb-4">{description}</p>
        <div className="card-actions flex justify-end">
          <a href={live} target="_blank" rel="noopener noreferrer">
            <i className="icon"></i> <KeyboardArrowUpIcon className='cursor-pointer' />
          </a>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <i className="icon"></i> <GitHubIcon className='cursor-pointer' />
          </a>
          {languagesUsed.map((language, index) => (
            <button className="btn btn-sm btn-neutral" key={index}>
              {language}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;