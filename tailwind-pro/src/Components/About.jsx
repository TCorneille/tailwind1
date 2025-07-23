import React from 'react'

export default function About() {
  return (
    
    <div className='flex justify-between p-15 '>
     <div className=' w-100'>
        <h2 className='text-primaryColor-200 font-bold text-2xl p-1.5'>About Us</h2>
        <p className='text-4xl font-bold'>We offer creative working environments that suit your business</p>
     </div>
     <div className='w-150 p-15 font-semibold'>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing 
        elit torquent, conubia leo rutrum praesent dui turpis 
        lobortis, vulputate pellentesque tristiqueprimis cum 
        tincidunt placerat maecenas, velit metus fermentum eget</p> 
        <a href="#more"className='text-primaryColor-200 font-bold'>More About Us</a>

     </div>


    </div>
  )
}
