import React from 'react'
import { SectionWrapper } from './All_Projects/hoc';
import { Webtechnologies, MLtechnologies } from "./All_Projects/constants"
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from './All_Projects/utils/motion'
import { style } from '../style';

const Tech = ({ index }) => {
  return (
    <>
      <motion.div
        className="flex flex-col sm:items-start gap-4"
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      >
        <p className={style.sectionSubText}>Skills</p>
        <h2 className={style.sectionHeadText}>Techstack</h2>
      </motion.div>

      <motion.div variants={textVariant()} className="mt-8">
        {/* Web-stack */}
        <p className={`${style.sectionSubText2} text-center sm:text-left`}>Web-stack</p>
        <div className='flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-10 py-4'>
          {Webtechnologies.map((technology) => (
            <div
              className='w-20 h-20 sm:w-24 sm:h-24 flex flex-col items-center justify-center'
              key={technology.name}
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className='w-16 h-16 sm:w-24 sm:h-24 object-contain mb-2'
              />
              <p className='text-[12px] sm:text-[14px] text-white uppercase tracking-wider text-center'>
                {technology.name}
              </p>
            </div>
          ))}
        </div>

        {/* ML-stack */}
        <p className={`${style.sectionSubText2} text-center sm:text-left mt-8`}>ML-Stack</p>
        <div className='flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-10 py-4'>
          {MLtechnologies.map((mltechnology) => (
            <div
              className='w-16 h-16 sm:w-24 sm:h-24 flex flex-col items-center justify-center'
              key={mltechnology.name}
            >
              <img
                src={mltechnology.icon}
                alt={mltechnology.name}
                className='w-16 h-16 sm:w-24 sm:h-24 object-contain mb-2'
              />
              <p className='text-[12px] sm:text-[14px] text-white uppercase tracking-wider text-center'>
                {mltechnology.name}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Tech, "Tech");
