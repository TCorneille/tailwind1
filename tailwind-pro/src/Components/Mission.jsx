import React from 'react';

export default function Mission() { // PascalCase for component names
  return (
    <div className="relative  w-full">
      {/* Background Image (optimized with object-cover) */}
      <img 
        src="https://preview.redd.it/my-dream-house-is-black-and-dark-but-in-this-sub-all-black-v0-7d9d422tq6ac1.jpeg?width=1080&crop=smart&auto=webp&s=cdf472d2055783ade6b1d6c1a182db47b1236174" 
        alt="Dark modern house" // Always include alt text
        className="w-full h-70 object-cover p-5" // Full height/width
      />

      
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-8 md:px-16 lg:px-24">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          <span className="text-primaryColor-200">Our</span> Mission
        </h1>
        
        <p className="text-white/90 max-w-2xl text-lg mt-2">
         Lorem ipsum dolor sit amet consectetur adipiscing elit, mattis blandit odio felis aliquet montes turpis consequat, est sociosqu 
vitae id nec rutrum. Ornare dictumst et eget fames cursus vel penatibus quis posuere, ultrices fermentum libero pretium 
convallis pharetra
        </p>
      </div>
    </div>
  );
}