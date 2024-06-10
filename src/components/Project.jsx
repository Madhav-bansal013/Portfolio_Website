import React from 'react'
import {PROJECTS} from '../constants'
import { motion } from 'framer-motion'

function Project() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h2 
      initial={{y:-100 , opacity:0}}
      whileInView={{y:0 , opacity:1}}
      transition={{duration:0.5 , type:"spring" , stiffness: 50}}
      className='my-20 text-center text-4xl'>Projects</motion.h2>
      <div>
        {PROJECTS.map((project , index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <div className="w-full lg:w-1/4">
              <motion.img 
              initial={{x:-100 , opacity:0}}
              whileInView={{x:0 , opacity:1}}
              transition={{duration:1.5}}
              src={project.image} alt={project.title} className='w-[150px] h-[150px] mb-6 rounded-lg'/>
            </div>

            <motion.div 
            initial={{x:100 , opacity:0}}
            whileInView={{x:0 , opacity:1}}
            transition={{duration:1.5}}
            className='w-full max-w-xl lg:w-3/4'>
              <h6 className='mb-2 font-semibold'>{project.title}</h6>
              <p className='mb-4 text-neutral-400 leading-8'>{project.description}</p>
              {project.technologies.map((technology , index) => (
                <span key={index} className='mr-1 rounded-xl bg-neutral-900 px-2 py-1 text-sm font-light text-purple-500'>{technology}</span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
