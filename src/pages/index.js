import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/componets/Layout'
import asrat from '../../public/images/profile/assrat.jpg'
import bulb from '../../public/images/svgs/miscellaneous_icons_1.svg'
import Link from 'next/link'
import { LinkArrow } from '@/componets/Icons'
import Footer from '@/componets/Footer'
import Hire from '@/componets/Hire'
import Animated from '@/componets/Animated'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <main className=' text-dark min-h-screen w-full flex  items-center '>
       <Layout className='pt-0'>
       <div className=' flex  justify-between  items-center first-letter '>
        <div className='w-1/2'>
          <Image src={asrat} alt="asrat" className='w-[400px]  border-[10px] border-white rounded-bl-[200px] rounded-br-[60px] rounded-tr-[30px]'/>
        </div>
          <div className='w-1/2 flex flex-col items-center  self-center'>
         <Animated text="Turning Vision Into Reality With Code And Design." className=' text-left'/>
            <p className=' font-medium mt-3 text-xl'> 
            hey there 👋 <br/>
            I'm <span className=' font-bold underline'> Asrat Adane</span> , web developer and UI/Ux Designer <br/>
            Explore my latest projects and articles, showcasing my passion for website and application developement
            </p>
          <div className='flex  items-center  self-start mt-2 gap-4'>
          <a href='/asrat.pdf 'target='_blank' className='w-32 h-auto p-3 rounded-xl bg-dark text-light flex  space-x-2'>
            <p
             className=' font-bold'>Resume</p>
             <div className='w-6'>
             <LinkArrow />
             </div>
          </a>
          <a href='mailto:asratadane169@gmail.com' target='_blank' className=' font-medium underline'>
           Contact Me 
          </a>
          </div>
          </div>
       </div>
       </Layout>
     <Hire/>
     <div className=' absolute right-8 bottom-8 inline-block  w-24'>
     <Image src={bulb} alt='bulbr' className='w-full h-auto'/>
     </div>
    </main>
    </>
  )
}
