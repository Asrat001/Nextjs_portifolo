import Head from "next/head";
import React from "react";
import {motion, useScroll } from "framer-motion";
const Detail = ({ position, company, companyLink, time, address, work }) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%]  mx-auto  flex flex-col items-center  justify-between ]">
      <div>
        <h3 className=" capitalize  font-bold text-2xl ">
          {position}&nbsp; <a href={companyLink} className=" capitalize text-primary">@{company}</a>   </h3>
          <span className=" capitalize font-medium text-dark/75">
            {time}|{address}
          </span>
          <p className=" font-medium  w-full ">{work}</p>
      
      </div>
    </li>
  );
};

function Exprience() {
  return (
    <div className="my-64 ">
      <h1 className=" text-center text-8xl font-bold mt-4 w-full mb-32">
        Experience
      </h1>
      <div className="w-[75%] mx-auto  relative">
        <div className=" absolute left-8 top-0 origin-top w-[2px] h-full bg-dark"/>
        <ul className=" flex flex-col items-start  justify-between ml-4">
     
          <Detail position="Internship" work="designing and developing Websites"company="Excced It Systems" companyLink="https://exceeditsystems.com/" time="2022" address="Addis Abeba"/>
          <Detail position="junior web dev" work="designing and developing Websites"company="Maya Media" companyLink="https://www.mayaflicks.com/" time="2022-2023" address="Addis Abeba"/>
          <Detail position="contract web dev" work="designing and developing Websites"company="technacy" companyLink="https://technacydraft.netlify.app/" time="2022" address="Addis Abeba"/>
          <Detail position="web  dev | UI/UX " work="designing and developing Websites"company="up work" companyLink="https://www.upwork.com/" time="2022" address="remote | Addis Abeba"/>
        </ul>
      </div>
    </div>
  );
}

export default Exprience;
