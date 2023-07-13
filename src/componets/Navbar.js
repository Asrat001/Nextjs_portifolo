import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Twitter, { DribbbleIcon, GithubIcon, LinkedInIcon, TwitterIcon } from "./Icons";

 



const CustomLink = ({href,title, className=""})=>{

    const router = useRouter();
    return (
        <Link href={href} className=" relative group  text-[18px]">
            {title}
            <span className={`h-[2px] bg-dark  inline-block  absolute  left-0 -bottom-0.5  group-hover:w-full transition-[width] duration-300 ${router.asPath===href ? 'w-full':'w-0'}`}>
            
            </span>
        </Link>
    )
}
function Navbar() {
  return (
    <header className="w-full  font-medium px-32 py-10 flex items-center  justify-between ">
      <nav className=" space-x-4 ">
        <CustomLink href="/" title={"Home"}/> 
        <CustomLink href="/about" title={ "About"}/>
        <CustomLink href="/project" title={"Projects"}/> 
        <CustomLink href="/blog" title={"Blog"}/>
      </nav>
     
      <nav className="flex items-center justify-center  flex-wrap" >
       <motion.a href='/' target={"_blank"}
       whileHover={{y:-3}}
       whileTap={{scale:0.8}}
       className="w-6 mx-3"
       >
        <TwitterIcon />
       </motion.a>
       <motion.a href='/' target={"_blank"}
         whileHover={{y:-3}}
         whileTap={{scale:0.8}}
         className="w-6 mx-3">
        <GithubIcon/>
       </motion.a>
       <motion.a href='/' target={"_blank"}
         whileHover={{y:-3}}
         whileTap={{scale:0.8}}
         className="w-6 mx-3">
        <DribbbleIcon/>
       </motion.a>
       <motion.a href='/' target={"_blank"}
         whileHover={{y:-3}}
         whileTap={{scale:0.8}} 
         className="w-6 mx-3">
        <LinkedInIcon/>
        </motion.a>
      
      </nav>
      <div className=" absolute  left-[50%] top-2  translate-x-[-50%]  ">
      <Logo/>
      </div>
    </header>
  );
}

export default Navbar;
