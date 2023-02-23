import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import javaScipt from '../assets/javascript.png';
import node from '../assets/node.png';



const Skills = () => {
  return (
    <div name='skills' className='w-full py-20 bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-green-600'>Ervaring</p>
                <p className='py-4'>Programmeer talen die ik gebruik.</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-2 gap-4 text-center py-8 uppercase'>
                <div className='shadow-md shadow[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-3' src={HTML} alt="HTMl icoon" />
                    <p>html</p>
                </div>

                <div className='shadow-md shadow[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-3' src={CSS} alt="CSS icoon" />
                    <p>css</p>
                </div>

                <div className='shadow-md shadow[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-3' src={javaScipt} alt="JavaScript icoon" />
                    <p>JavaScript</p>
                </div>

                <div className='shadow-md shadow[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-3' src={node} alt="NodeJS icoon" />
                    <p>Node.Js</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills