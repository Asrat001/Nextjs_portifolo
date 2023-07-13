import Head from "next/head";
import React, { useRef } from "react";
import {motion, useScroll } from "framer-motion";
import Licon from "./Licon";
const Detail = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null)
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%]  mx-auto  flex flex-col items-center  justify-between ]">
      <Licon reference={ref}/>
      <motion.div 
      initial={{y:60}}
      whileInView={{y:0}}
      transition={{duration:0.5}}
      >
        <h3 className=" capitalize  font-bold text-2xl ">
          {position}&nbsp; <a href={companyLink} className=" capitalize text-primary">@{company}</a>   </h3>
          <span className=" capitalize font-medium text-dark/75">
            {time}|{address}
          </span>
          <p className=" font-medium  w-full ">{work}</p>
      
      </motion.div>
    </li>
  );
};

function Exprience() {
   const ref = useRef(null);
  const {scrollYProgress}=useScroll({
      target:ref,
      offset:["start end","center start"]
      
  });
  return (
    <div className="my-64 ">
      <h1 className=" text-center text-8xl font-bold mt-4 w-full mb-32">
        Experience
      </h1>
      <div ref={ref} className="w-[75%] mx-auto  relative">
        < motion.div className=" absolute left-9 top-0 origin-top w-[4px] h-full bg-dark"
        style={{scaleY:scrollYProgress}}
        />
        <ul className=" flex flex-col items-start  justify-between ml-4">
     
          <Detail position="Internship" work="Worked on a team responsible for developing a new website, including designing and implementing a new user interface and developing the backend infrastructure to support the feature"company="Excced It Systems" companyLink="https://exceeditsystems.com/" time="2022" address="Addis Abeba"/>
          <Detail position="junior web dev" work="Worked on System website  which help the company manage thire data digitally ,Designed and implemented the user interface with it's backend supports "company="Maya Media" companyLink="https://www.mayaflicks.com/" time="2022-2023" address="Addis Abeba"/>
          <Detail position="contract web dev" work="designing and implementing landing page integrated with email-js inorder to take orders online"company="technacy" companyLink="https://technacydraft.netlify.app/" time="2022" address="Addis Abeba"/>
          <Detail position="web  dev | UI/UX " work="designing and developing   seamless, intuitive, and visually stunning interfaces  for clients "company="up work" companyLink="https://www.upwork.com/" time="2022" address="remote | Addis Abeba"/>
        </ul>
      </div>
    </div>
  );
}

export default Exprience;
