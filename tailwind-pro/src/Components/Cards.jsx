import React from 'react'

export default function Cards() {
    return (
        <div className="bg-slate-100/80 flex gap-4 border border-white justify-center items-center max-md:flex-col ">
            <div className='border border-white p-4 flex flex-col items-center justify-center'>
                <img
                    src="https://as2.ftcdn.net/v2/jpg/03/84/55/29/1000_F_384552930_zPoe9zgmCF7qgt8fqSedcyJ6C6Ye3dFs.jpg"
                    alt=""
                    className="w-80 h-80 object-cover rounded-md"
                />
                <h1 className='text-primaryColor-200 text-2xl p-4 font-bold justify-center flex '>Renting Offices</h1>
                <div className='w-16 h-2 round-1 bg-primaryColor-200'></div>
                <p className='flex justify-center text-center p-5'>Lorem ipsum dolor sit amet consectetur<br />adipiscing elit mollis mauris</p>
                <a href="#Learn more" className='text-primaryColor-200 flex font-bold text-2xl justify-center'>Learn more</a>
            </div>
             <div className='border p-4 border-white flex flex-col items-center justify-center'>
                <img
                    src="https://cdn.mathieuteisseire.com/media/pxfoshxs/trends-tricks-coffee-garnishing.jpg"
                    alt=""
                    className="w-80  h-80 object-cover rounded-md"
                />
                <h1 className='text-primaryColor-200 p-4 text-2xl font-bold justify-center flex '>Coffee Shop</h1>
                <div className='w-16 h-2 round-1 bg-primaryColor-200'></div>

                <p className='flex justify-center text-center p-5'>Lorem ipsum dolor sit amet consectetur<br />adipiscing elit mollis mauris</p>
                <a href="#Learn more" className='text-primaryColor-200 flex font-bold text-2xl justify-center'>Learn more</a>

            </div>
            <div className='border p-4 border-white flex flex-col items-center justify-center'>
                <img
                    src="https://media.istockphoto.com/id/537361232/photo/sunlit-natural-spruce-tree-forest.jpg?s=2048x2048&w=is&k=20&c=8tzxOFFEvPYiWrt2itTwadjuC6U8EnwALM6ZbFGLDps="
                    alt=""
                    className="w-80  h-80 object-cover rounded-md"
                />
                <h1 className='text-primaryColor-200 text-2xl p-4 font-bold justify-center flex '>Private Events Space</h1>
                 <div className='w-16 h-2 round-5  bg-primaryColor-200'></div>
                <p className='flex justify-center text-center p-5'>Lorem ipsum dolor sit amet consectetur<br />adipiscing elit mollis mauris</p>
                <a href="#Learn more" className='text-primaryColor-200 flex font-bold text-2xl justify-center'>Learn more</a>

            </div>

        </div>
    );
}