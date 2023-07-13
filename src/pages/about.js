import Animated from "@/componets/Animated";
import Layout from "@/componets/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import asrat from '../../public/images/profile/assrat.png'
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skill from "@/componets/Skill";
import Exprience from "@/componets/Exprience";
import Education from "@/componets/Education";


const Animatednum = ({value}) => {
    const ref = useRef(null);   
    const motionValue= useMotionValue(0);
    const springValue =useSpring(motionValue,{duration:3000})
    const isInView=useInView(ref, {once:true});

    useEffect(()=>{
    if(isInView){
        motionValue.set(value)
    }
    },[isInView,value,motionValue])
    useEffect(()=>{
      springValue.on('change',(latest)=>{
        if (ref.current && latest.toFixed(0)<=value ){
            ref.current.textContent = latest.toFixed(0);
        }
      })
        },[springValue,value])
     return <span ref={ref}>
         
     </span>
};

function about() {
  return (
    <div>
      <Head>
        <title>about me</title>
        <meta name="asrat adane" content="any discription" />
      </Head>
      <main className="flex  w-full flex-col  items-center justify-center">
        <Layout className={"p-16"}>
         
          <div className=" grid  w-full  grid-cols-8 gap-16">
            <div className=" col-span-3  flex  flex-col items-start  justify-start">
              <h1 className="mb-4 text-lg uppercase  font-bold  text-dark/75">
                about me
              </h1>
              <p className=" font-medium ">
                Hi, I'm  a web developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 3 years of coding experience in the
                field. I am always looking for new and innovative ways to bring
                my clients' visions to life
              </p>
             <div className=" flex flex-col items-start justify-center w-full mt-8">
                <div className=" flex   justify-evenely space-x-6    items-center w-full">
                <p className=" text-dark/75  font-medium text-[16px] w-1/4">Name:</p>
               <div className=" flex  justify-start">
               <p className=" text-dark text-[17px] font-semibold ">Asrat Adane</p>
               </div>
                </div>
                <div className=" flex  justify-evenely  space-x-6  items-center w-full">
                <p className=" text-dark/75  font-medium text-[16px] w-1/4">CEO @:</p>
                <div className=" flex justify-start">
                <a href="mailto:asratadane169@gmail.com" className="  text-primary text-[17px] font-semibold flex justify-start">sabawieTech solution</a>
                </div>

                </div>
                <div className=" flex  justify-evenely  space-x-6  items-center w-full">
                <p className=" text-dark/75  font-medium text-[16px] w-1/4">Email:</p>
                <div className=" flex justify-start">
                <a href="mailto:asratadane169@gmail.com" className="  text-primary text-[17px] font-semibold flex justify-start">asratadane169@gmail.com</a>
                </div>

                </div>
                <div className=" flex  justify-evenely  space-x-6  w-full items-center">
                <p className=" text-dark/75  font-medium text-[16px] w-1/4"> Country:</p>
                <div className=" flex justify-start">
                <p className=" text-dark text-[17px] font-semibold  flex justify-start ">Ethiopia</p>
                </div>
              
                </div>
                <div className=" flex   justify-evenely  items-center  space-x-6   w-full">
                <p className=" text-dark/75  font-medium text-[16px] w-1/4">Degree</p>
                <div className=" flex justify-start">
                <p className=" text-dark text-[17px] font-semibold   flex justify-start ">Bachlor of Computer  Engineering</p>
                </div>

                </div>
                <div className=" flex justify-evenely  items-center  space-x-6  w-full">
                <p className=" text-dark/75  font-medium text-[16px] w-1/4  "> Freelance</p>
                <div className=" flex justify-start ">
                <p className=" text-dark text-[17px] font-semibold flex justify-start">Also available on <a href="" className=" text-primary"> Upwork </a> and <a href="" className=" text-primary"> Fiver</a></p>
                </div>
              
                </div>
                
             </div>
            </div>
            <div className=" col-span-3 relative h-max  rounded-2xl border-2   border-solid border-dark  bg-light p-8 " >
                <div className=" absolute  top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2rem]  bg-dark"/>
                <Image src={asrat} alt="asrat" className="w-full h-auto rounded"/>
            </div>
            <div className=" col-span-2 flex flex-col items-end justify-between">
                <div className=" flex  flex-col  items-end justify-center">
                    <span className=" inline-block text-7xl font-bold">
                    <Animatednum value={10}/>+
                    </span>
                    <h1 className=" capitalize text-dark/75  text-xl font-medium">  Satisfied clients</h1>
                </div>
                <div className=" flex  flex-col  items-end justify-center">
                    <span className="inline-block text-7xl font-bold">
                    <Animatednum value={20}/>+
                    </span>
                    <h1 className=" capitalize text-dark/75  text-xl font-medium"> Project complited</h1>
                </div>
                <div className=" flex  flex-col  items-end justify-center">
                    <span className="inline-block text-7xl font-bold">
                         <Animatednum value={3}/>+
                    </span>
                    <h1 className=" capitalize text-dark/75  text-xl font-medium"> year of expriance</h1>
                </div>
            </div>
          </div>
          <Skill/>
          <Exprience/>
          <Education/>
        </Layout>
      </main>
    </div>
  );
}

export default about;
