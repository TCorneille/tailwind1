import React from 'react'

export default function Summary() {
  return (
    <div>
      <footer className='px-20' >
        <div className='border-t-2 border-b-2 border-primaryColor-200 flex flex-col-3 gap-30 p-3 justify-center max-md:flex-col'>
          <div>
            <div className="flex items-center py-2 space-x-2">
              <img
                src="src/assets/logo.png"

                className="h-10 w-auto"
              />
              <h1 className="text-black font-bold text-xl">
                Business <span className="text-primary text-2xl text-primaryColor-200">Cafe</span>
              </h1>
            </div>
            <p> Discover your ideal workspace with us. Work<br />
              smart, not hard in our fully-equipped office<br />
              spaces.</p>
          </div>
          <div className='flex flex-col p-2'>
            <h1 className='font-bold text-2xl py-3 underline'>Quick links</h1>
            <a href="#home">Home</a>
            <a href="#space">Space</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>

          </div>
          <div className='p-2'>
            <h1 className='font-bold text-2xl py-3 underline'>Contacts Info</h1>
            <h2> <span className='font-bold'>Location</span>:Kigali, <span className='font-bold text-primaryColor-200'>Rwanda</span></h2>
            <h2><span className='font-bold'>Email</span>: businesscafe@info.com</h2>
            <h2> <span className='font-bold'>Phone</span>: +250783787817</h2>
            <a href="location" className='text-primaryColor-200'>View Location on GoogleMap</a>

          </div>
         
            
          


        </div>
        <p className='text-center'>Copyright &copy; 2023 Business Coffee All rights reserved.</p>
      </footer>

    </div>
  )
}
