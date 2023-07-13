import React from 'react'
import { motion } from 'framer-motion'
const word={
    initial:{
        opacity: 1,
    },
    animate:{
        opacity:1,
        transition:{
            delay:0.5,
            staggerChildren:0.08
        }

    }
}
const sword={
    initial:{
        opacity: 0  ,
        y:50
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            duration:1
        }

    }
}

function Animated({text , className=''}) {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center  text-center overflow-hidden'>
      <motion.h1 className={`w-full  inline-block text-dark font-bold  text-7xl  capitalize    ${className}`}
      variants={word}
      initial="initial"
      animate="animate"
      >
       {
        text.split(" ").map((word, indexedDB) => 
            <motion.span key={word+"-"+indexedDB} className='  inline-block'
             variants={sword} 
            >
             {word}&nbsp;
            </motion.span>
        )
       }
      </motion.h1>
    </div>
  )
}

export default Animated