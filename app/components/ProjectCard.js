import React from 'react';

const ProjectCard = ({ projectName, description, imageUrl, languagesUsed }) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure className="w-full h-40">
        <img
          className="w-full h-full object-cover"
          src={imageUrl}
          alt={projectName}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{projectName}</h2>
        <p>{description}</p>
        <div className="card-actions flex justify-end">
          {languagesUsed.map((language, index) => (
            <button className="btn btn-sm btn-neutral mr-2" key={index}>
              {language}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;