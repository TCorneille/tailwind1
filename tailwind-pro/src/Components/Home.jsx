import React from 'react';


export default function Home() {
  return (
    <div className='w-full relative'>
     
      <div className="relative h-screen w-full">
        <img 
          src="https://hips.hearstapps.com/hmg-prod/images/delia-kenza-brooklyn-apartment-8-1651761480.jpg?crop=0.668xw:1.00xh;0,0&resize=1120:*" 
          className="w-full h-full object-cover"
        />
        
        {/* Hero content */}
        <div className="absolute inset-0 flex flex-col justify-center text-center items-center px-8 md:px-16 lg:px-24 text-white">
          <h2 className="text-xl md:text-2xl  font-medium mb-2">
            The best workplace in Kigali
          </h2>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className='text-primaryColor-200'>Professional</span>, Creative<br />Flexible, Scalable <span className='text-primaryColor-200'>Workspace</span>
          </h1>
          <p className="text-base md:text-lg max-w-2xl mb-8">
            Discover your ideal workspace with us. Work smart, not hard in our fully-equipped office spaces. 
            Elevate your business with flexible solutions tailored to your needs. Find your perfect office today!
          </p>
          <button className="bg-primaryColor-200 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}