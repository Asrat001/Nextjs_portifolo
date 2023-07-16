import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const MotionLink = motion(Link)

function Logo() {
  return (
    <div className=' mt-2 flex items-center justify-center '>
        <MotionLink href={'/'} className=' h-20 w-20 bg-dark text-light rounded-full flex items-center justify-center text-2xl font-bold px-6' 
         whileHover={{
            backgroundColor:["#CABBC1", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
            transition:{duration:1, repeat:Infinity}
         }}
        >
            አሥራት
        </MotionLink>
        </div>
  )
}

export default Logo