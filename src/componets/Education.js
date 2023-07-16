import Head from "next/head";
import React, { useRef } from "react";
import {motion, useScroll } from "framer-motion";
import Licon from "./Licon";
const Detail = ({ position, time, address, work ,companyLink    }) => {
  const ref = useRef(null)
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%]  mx-auto  flex flex-col items-center  justify-between ]">
      <Licon reference={ref}/>
      <motion.div 
      initial={{y:60}}
      whileInView={{y:0}}
      transition={{duration:0.5}}
      >
        <h3 className=" capitalize  font-bold text-2xl  text-h1text">
          {position}&nbsp; <a href={companyLink} target="_blank" className=" capitalize text-dark">@{address}</a></h3>
          <span className=" capitalize font-medium text-dark/75">
            {time}|{address}
          </span>
          <p className=" font-medium  w-full  text-dark">{work}</p>
      
      </motion.div>
    </li>
  );
};

function Education() {
   const ref = useRef(null);
  const {scrollYProgress}=useScroll({
      target:ref,
      offset:["start end","center start"]
      
  });
  return (
    <div className="my-64 ">
      <h1 className=" text-center text-8xl font-bold mt-4 w-full mb-32 text-h1text">
        Education
      </h1>
      <div ref={ref} className="w-[75%] mx-auto  relative">
        < motion.div className=" absolute left-9 top-0 origin-top w-[4px] h-full bg-h1text"
        style={{scaleY:scrollYProgress}}
        />
        <ul className=" flex flex-col items-start  justify-between ml-4">
     
          <Detail position="Bachelor Of Computer Engineering" work="Relevant courses included Data Structures , computer Architcture and Algorithms, Computer Systems Engineering, and Artificial 
Intelligence." time="2018-2023" address="Bahir Dar University" companyLink="https://www.bdu.edu.et/"/>
          <Detail position="    Online Coursework" work="Relevant courses included UI/UX , React and Algorithms, Dart and flutter 
" time="2018-2023" address="simplilearn" companyLink="https://www.simplilearn.com/"/>
          <Detail position="Highschool and Preparatory" work="Attended both my Secondary and Preparatory School at, Dilla Gedio Ethiopia.
" time="2006-2018" address="Dilla" companyLink="https://en.wikipedia.org/wiki/Dila,_Ethiopia"/>

        </ul>
      </div>
    </div>
  );
}

export default Education;
