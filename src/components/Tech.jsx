import React from 'react'
import {BallCanvas} from "./Hero_Canvas";
import { SectionWrapper } from './All_Projects/hoc';
import {technologies} from "./All_Projects/constants"

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology)=>(
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon}/>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech,"");