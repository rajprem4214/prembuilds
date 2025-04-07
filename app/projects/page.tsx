import React from 'react';
import "./globals.css";

const ProjectsPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5 text-center">
      <h1 className="text-4xl font-bold mb-4">My Projects</h1>
      <ul className="list-disc list-inside">
        <li className="mb-2">Project 1: Description</li>
        <li className="mb-2">Project 2: Description</li>
        <li className="mb-2">Project 3: Description</li>
        {/* Add more projects as needed */}
      </ul>
    </div>
  );
};

export default ProjectsPage;
