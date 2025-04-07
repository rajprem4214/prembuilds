import React from 'react';
import Image from 'next/image';
import IntroContainer from '@/components/IntroContainer';
import "./globals.css";

const tools = ['HTML', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Node.js', 'CSS', 'TailwindCSS', 'Bootstrap', 'C++'];

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-5 text-center bg-black text-white">
      {/* <h1 className="text-4xl font-bold mb-4">Prem Raj</h1>
      <Image src="/path/to/your/image.jpg" alt="Profile Image" width={150} height={150} className="rounded-full mb-4" />
      <p className="text-lg mb-4">Hello! I'm a developer from Bangalore, India. I enjoy programming and exploring technology.</p>
      <p className="text-lg mb-4">I've participated in 15+ hackathons & ideathons and won 6 of them.</p>
      <p className="text-lg mb-4">I'm open to work, freelance, or collaborate. <a href="#" className="underline">Contact Me.</a></p>
      <div className="flex flex-wrap justify-center mt-4">
        {tools.map((tool, index) => (
          <span key={index} className="bg-gray-800 text-white px-3 py-1 m-1 rounded-full">
            {tool}
          </span>
        ))}
      </div> */}
       <IntroContainer />
    </div>
  );
};

export default HomePage;
