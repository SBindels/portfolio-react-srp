import React from 'react'
import { BsGithub } from 'react-icons/bs';
import {HiArrowNarrowRight} from 'react-icons/hi';
import { Link } from "react-scroll";


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-green-600'>Hallo mijn naam is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Sjoerd Bindels</h1>
            <h2 className='text-3xl sm:text-6xl font-bold text-[#9faabf]'>Front-end Developer,</h2>
            <h2 className='text-3xl sm:text-6xl font-bold text-[#9faabf]'>UX Designer</h2>
            <div>
            <Link to="work" smooth={true} duration={500}>

            <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-green-600 hover:border-green-600'>Projecten<HiArrowNarrowRight className='ml-3'/></button>

            </Link>
            <a href="https://github.com/SBindels" target='_blank' rel="noreferrer">
            <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-gray-500 hover:border-gray-500 lg:hidden md:hidden'>Github<BsGithub className='ml-3'/></button>

            </a>
            
          
                
            </div>
        </div>

    </div>
  )
}

export default Home