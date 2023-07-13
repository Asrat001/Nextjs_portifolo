import Head from "next/head";
import React, { useRef } from "react";
import {motion, useScroll } from "framer-motion";
import Licon from "./Licon";
const Detail = ({ position, time, address, work ,companyLink    }) => {
  const ref = useRef(null)
  return (
    <li ref={ref} className="my-8  first:mt-0 last:mb-0 mx-4   flex flex-col items-center  justify-between ]">
      <Licon reference={ref}/>
      <motion.div 
      initial={{y:60}}
      whileInView={{y:0}}
      transition={{duration:0.5}}
      >
       
      
      </motion.div>
    </li>
  );
};

function Project() {
   const ref = useRef(null);
  const {scrollYProgress}=useScroll({
      target:ref,
      offset:["start end","center start"]
      
  });
  return (
    <div className="  ">
    
      <div ref={ref} className="w-[75%] mx-auto  relative">
        < motion.div className=" absolute left-[50%] top-0 origin-top w-[4px] h-full bg-dark"
        style={{scaleY:scrollYProgress}}
        />
          
    <ul>
  

        </ul>
      </div>
    </div>
  );
}

export default Project;
