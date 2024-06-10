import React from 'react'
import about from "../assets/aboutus.png"
import { ABOUT_TEXT } from '../constants'
import Lottie from 'lottie-react'
import aboutann from '../assets/aboutusann.json'
import { motion } from 'framer-motion'

function About() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h2 
      initial={{y:-100 , opacity:0}}
      whileInView={{y:0 , opacity:1}}
      transition={{duration:1 , type:"spring", stiffness:50}}
      className='my-20 text-center text-4xl'>About
      <span className='text-neutral-500'> Me</span>
      </motion.h2>

      <div className='flex flex-wrap'>
            <div className="w-full lg:w-1/2">
                <motion.div 
                whileInView={{x:0 , opacity:1}}
                initial={{x:-100 , opacity:0}}
                transition={{duration:1 , delay:0.2}}
                className="flex items-center justify-center">
                    {/* <img src={about} alt="about" className="w-[500px]
                    relative top-[-40px] lg:top-[-70px]
                    xl:top-[-120px]" /> */}
                    <Lottie animationData={aboutann} loop={true} className='relative top-5 pb-16'/>

                </motion.div>
            </div>

            <div className="w-full lg:w-1/2">
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.p 
                    whileInView={{x:0 , opacity:1}}
                    initial={{x:100 , opacity:0}}
                    transition={{duration:1 , delay:0.2}}
                    className="my-2 py-6 max-w-xl tracking-tight leading-7 xl:leading-9 relative top-[-40px] lg:top-[20px]">
                        {ABOUT_TEXT}
                    </motion.p>
                </div>
            </div>
        </div>      
    </div>
  )
}

export default About
