import React from 'react';

export default function Head() {
  return (
    <header className="flex items-center justify-between p-4  max-sm:flex-col bg-white shadow-sm">
      <div className="flex items-center space-x-2">
        <img 
          src="src/assets/logo.png" 
  
          className="h-10 w-auto" 
        />
        <h1 className="text-black font-bold text-xl">
          Business <span className="text-primary text-2xl text-primaryColor-200">Cafe</span>
        </h1>
      </div>
      
      <nav className="flex">
        <div className="flex space-x-6 text-2xl">
          <a 
            href="#" 
            className="text-primaryColor-200 text-bold hover:text-primary transition-colors duration-200 py-2 px-1"
          >
            Home
          </a>
          <a 
            href="#" 
            className="text-black hover:text-primary transition-colors duration-200 py-2 px-1"
          >
            Space
          </a>
          <a 
            href="#" 
            className="text-black hover:text-primary transition-colors duration-200 py-2 px-1"
          >
            About
          </a>
          <a 
            href="#" 
            className="text-black hover:text-primary transition-colors duration-200 py-2 px-1"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}