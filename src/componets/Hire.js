import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

function Hire() {
  return (
    <div className=' fixed justify-center flex items-center  left-4 bottom-4  overflow-hidden'>
     <div className=' relative flex justify-center items-center w-48 h-auto'>
     <CircularText className={"fill-dark  animate-spin-slow"}/>
     <Link href="mailto:asratadane169@gmail.com" target='_blank' className=' absolute flex justify-center items-center bg-dark left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full text-light text-[18px] font-semibold border  border-solid border-dark  hover:bg-light hover:text-dark '>
        Let's Talk
     </Link>
     </div>
    </div>
  )
}

export default Hire