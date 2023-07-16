import Animated from '@/componets/Animated'
import Layout from '@/componets/Layout'
import Head from 'next/head'
import React, { useRef } from "react";
import {motion, useScroll } from "framer-motion";
import Project from '@/componets/project';
import {GithubIcon } from '@/componets/Icons';
import Effect from '@/componets/Effect';



 const Card= ({title,disc,glink,dlink, stack})=>{
   return <div className=' bg-light/5 w-[600px] h-auto border-dark/40 border-[2px]  rounded-lg p-4'>
           <p className=' text-dark font-semibold'> {title} </p>
           <p className=' text-dark/75 my-2'> {disc}</p>
           <div className='flex justify-between items-center p-4'>
             <a href={dlink} className=' underline underline-offset-2 font-semibold  text-dark'> Visit project </a>
             <a href={glink}target='_blank' className='w-16 h-auto p-3 rounded-xl bg-dark text-light flex justify-center items-center '>
             <div className='w-6'>
             <GithubIcon className=" " />
             </div>
        
          </a>
       
           </div>
           <div className=' flex items-center space-x-2'>
         <p className=' text-h1text/60  font-medium'>{stack}&nbsp;</p>
        
             </div>
          </div>
 }

function project() {
    const ref = useRef(null);
    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["start end","center start"]
        
    });
  return (
    <div className=' h-screen'>
        <Head>
        <title>projects</title>
        <meta name="asrat adane" content="any discription" />
       </Head>
       <Effect/>
 <main className=' w-full  mb-16  flex  flex-col  items-center  justify-center ' ref={ref}>
    <Layout className="pt-16  !px-0" >
     <Animated text="My Projects!" className=' text-h1text'/>
     <motion.div 
     style={{scaleY:scrollYProgress}}
     className='w-1 h-full absolute top-[45%] left-[50%] bg-dark'/>
    
      <div className=' grid grid-cols-2 justify-items-center mt-16 py-4 px-16  gap-32'>
  <div className=' space-y-4 '>
  <p className=' text-lg  font-semibold text-dark'>Apps</p>
<Card title="Ai Powered Application" disc=" Ai powered mobile application for skin cancer Ditection , the model is built using Tenserflow integrated with flutter app using tflite" glink="/" stack="Flutter , Python-Tenseorflow"/>
<Card  title="E-commerce App" disc="E-commerce app to sell Traditional Ethiopian Clothing with Chapa integration for online payment" glink="/" dlink="/" stack="Recat Native ,Redux , Mongodb , Express "/>
  </div>
  <div className=' space-y-4'>
  <p className='text-lg  font-semibold text-dark'>websites</p>
<Card title="Technacy" disc="landing page for Technacy It solution company with email js integration " dlink="/" glink="/" stack="Recat , Tailwind , Framer Motion"/>
<Card   title="Rect Portifolio Template" disc="Portifolio template with beautiful framer motion animation" dlink="/" glink="/" stack="framer motion, React js , Css3"/>
<Card title="kts-Web APP" disc="web app for kts( a student club at bahir dar university ) which provide a computer maintenance for student at the university" glink="/" dlink="/" stack="Recat , Taliwind , Firebase"/>

    </div>

  
      </div>
   
    </Layout>
 </main>

    </div>
  )
}

export default project