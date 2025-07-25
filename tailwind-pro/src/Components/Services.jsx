import React from 'react'

export default function Services() {
    return (
        <div className='flex max-md:flex-col justify-center'>
            <div className='p-10 flex align-center gap-20 justify-center flex-center max-sm:flex-col items-center '>
                <div className='items-center  flex-3/12 flex flex-col gap-18 p-5'>
                    <div className='w-[100%] h-auto flex flex-col  justify-center bg-primaryColor-100 text-center p-5 items-center'>
                        <img src="src/assets/service.png" alt="" className="w-15 h-15" />

                        <h1 className='text-2xl '> Creative Space</h1>
                        <p>Lorem ipsum dolor sit amet, cn
                            consectetur adipiscing elit.</p>
                    </div>
                    <div className='w-[100%] h-auto flex flex-col justify-center  bg-primaryColor-100 text-center p-5 items-center'>
                        <img src="src/assets/service.png" alt="" className="w-15 h-15   flex flex-col max-sm:h-3" />

                        <h1 className='text-2xl '> High Speed Wifi</h1>
                        <p>Lorem ipsum dolor sit amet, cn
                            consectetur adipiscing elit.</p>
                    </div>
                    <div className='w-[100%] h-auto flex flex-col justify-center  bg-primaryColor-100 text-center p-5 items-center'>
                        <img src="src/assets/service.png" alt="" className="w-15 h-15" />

                        <h1 className='text-2xl '> Parking Area</h1>
                        <p>Lorem ipsum dolor sit amet, cn
                            consectetur adipiscing elit.</p>
                    </div>


                </div>

                <div className=' flex-6/12 sm-hidden'>
                    <img src="https://www.bassettfurniture.com/dw/image/v2/BGNC_PRD/on/demandware.static/-/Sites-bassett-Library/default/dw500b218c/dining/dining-tables/3-col-card-plp-dining-table.jpg" alt="" className="h-170 w-[100%]" />
                </div>
                
                <div className=' items-center flex-3/12 flex flex-col gap-18 p-5 p'>

                    <div className='w-[100%] h-auto flex flex-col justify-center p-5  bg-primaryColor-100 text-center items-center'>
                        <img src="src/assets/service.png" alt="" className="w-15 h-15" />

                        <h1 className='text-2xl '>  24/7 Access</h1>
                        <p>Lorem ipsum dolor sit amet, cn
                            consectetur adipiscing elit.</p>
                    </div>
                    <div className='w-[100%] h-auto flex flex-col justify-center p-5  bg-primaryColor-100 text-center items-center'>
                        <img src="src/assets/service.png" alt="" className="w-15 h-15" />

                        <h1 className='text-2xl '> Great Location</h1>
                        <p>Lorem ipsum dolor sit amet, cn
                            consectetur adipiscing elit.</p>
                    </div>
                    <div className='w-[100%]  h-auto flex flex-col justify-center p-5 bg-primaryColor-100 text-center items-center'>
                        <img src="src/assets/service.png" alt="" className="w-15 h-15" />

                        <h1 className='text-2xl '> outdoor space </h1>
                        <p>Lorem ipsum dolor sit amet, cn
                            consectetur adipiscing elit.</p>
                    </div>
                </div>

            </div>

        </div>
    )
}
