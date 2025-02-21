import React from 'react'
import {Tilt} from 'react-tilt'
import { motion } from 'framer-motion'

import {style} from'../style'
import { services } from './All_Projects/constants'
import {fadeIn, textVariant} from'./All_Projects/utils/motion'
import { SectionWrapper } from './All_Projects/hoc'
import { Link } from 'react-router-dom'

const ServiceCard=({index, title, icon, link})=>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right", "spring", 0.5*index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <Link to={link}>
        <div
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          
          <img src={icon} alt={title}
          className='w-16 h-16 object-contain'/>
           <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
        </Link>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div>
        <p className={style.sectionSubText}>Introduction</p>
        <h2 className={style.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
      variants={fadeIn("","",0.1,1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I'm a microsoft certified Azure AI Engineer with diverse skillset in software development such as web development(React.js, Next.js)and machine-learning model development(utilizing modules like pytorch, sklearn, numpy, tensorflow) I'm a quick learner and collobrative developer who can connect with clients and co-worker.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service,index)=>(
          <ServiceCard key={service.title} index={index}{...service}/>
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About,"about")