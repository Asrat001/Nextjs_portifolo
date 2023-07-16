import Animated from '@/componets/Animated'
import Layout from '@/componets/Layout'
import Head from 'next/head'
import {React,useRef, useState} from 'react'
import {products} from "../componets/Data"
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";
import Effect from '@/componets/Effect'


function Cards({title,img,disc,date,link}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });



  return (
    <section>
      <div ref={ref} className=' h-auto w-[500px] bg-light/60 border-[2px] border-dark/50   rounded-lg p-4  space-y-2'>
         <img src={img}  className=' h-[300px] w-full'/>
        <p className=' text-dark text-[18px]  font-semibold uppercase'>{title}</p>
        <p className=' text-dark/40 text-[12px] font-medium'>{date}</p>
        <p className=' text-dark text-[16px] font-medium'>{disc}</p>
         <button className=' bg-dark text-black font-semibold p-4 rounded-lg my-4'><a href={link } target='_blank' >read more</a></button>
      </div>
      
    </section>
  );
}
function blog() {
  const slice=2;
  const [next, setNext] = useState(4);
 
  const handleMoreImage = () => {
    setNext(next + slice);
  };
  return (
    <div>
        <Head>
        <title>blog</title>
        <meta name="asrat adane" content="any discription" />
      </Head>
      <Effect/>
      <main>
        <Layout>
            <Animated text="Sharing is Caring" className=' text-h1text'/>
            <div className='my-16 grid grid-cols-2 justify-items-center gap-6'>

            {products.slice(0,next).map((post,index) => (
                 <Cards key={index} title={post.title} img={post.img} disc={post.dics} date={post.time} link={post.link} />
      ))}
       
            </div>
            <center>
            {next < 5 ?<button onClick={handleMoreImage}>see more</button> :<button onClick={handleMoreImage}>see more</button>}
          </center>
        </Layout>
      </main>
    </div>
  )
}

export default blog