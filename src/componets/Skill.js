import React from 'react'
 import { motion } from 'framer-motion'
import Exprience from './Exprience';

const Skill=({name,x,y})=>{
    return(
<motion.div className='flex  items-center justify-center rounded-full font-semibold  absolute bg-dark  text-light py-3 px-6 shadow-dark  cursor-pointer'
whileHover={{scale:1.05}}
initial={{x:0,y:0}}
whileInView={{x:x,y:y}}
transition={{duration:1.5}}
>
{name}
</motion.div>
    );
}
function Skills() {
  return (
    <div>
        <h1 className=' font-bold text-8xl mt-64 w-full text-center text-h1text'>Skill</h1>
        <div className='w-full  h-screen relative  flex  items-center  justify-center rounded-full bg-circularLight'>
            <div className='flex justify-center items-center  rounded-full  font-semibold  bg-dark  text-light p-8 shadow-dark'>
                web 
             
            </div>
                <Skill name="HTML" x="-25vw" y="2vw" />
                <Skill name="CSS" x="-5vw" y="-10vw" />
                <Skill name="JavaScript" x="20vw" y="6vw" />
                <Skill name="ReactJs" x="0vw" y="12vw" />
                <Skill name="NextJs" x="-20vw" y="-15vw" />
                <Skill name="Taliwind" x="15vw" y="-12vw" />
                <Skill name="Web Design" x="32vw" y="-5vw" />
                <Skill name="Figma  " x="0vw" y="-20vw" />
                <Skill name="Firebase" x="-25vw" y="18vw" />
                <Skill name="React Native" x="-1vw" y="18vw" />
                <Skill name="Flutter" x="-30vw" y="13vw" />
                <Skill name="Mongodb" x="-29vw" y="-16vw" />
            
        </div>
     
    </div>
  )
}

export default Skills