import Animated from "@/componets/Animated";
import Layout from "@/componets/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import asrat from '../../public/images/profile/assrat.jpg'
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skill from "@/componets/Skill";
import Exprience from "@/componets/Exprience";


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
          <Animated text="Passion Fuels Purpose! " className="mb-16"/>
          <div className=" grid  w-full  grid-cols-8 gap-16">
            <div className=" col-span-3  flex  flex-col items-start  justify-start">
              <h1 className="mb-4 text-lg uppercase  font-bold  text-dark/75">
                about me
              </h1>
              <p className=" font-medium ">
                Hi, I'm Asrat Adane, a web developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 3 years of coding experience in the
                field. I am always looking for new and innovative ways to bring
                my clients' visions to life
              </p>
              <p className=" my-4 font-medium ">
                I believe that design is about more than just making things look
                pretty – it's about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className=" font-medium ">
              Whether I'm working on a website, mobile app, or 
other digital product, I bring my commitment to design excellence and user-centered thinking to 
every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
              </p>
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
        </Layout>
      </main>
    </div>
  );
}

export default about;
