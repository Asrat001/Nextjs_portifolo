import Effect from "@/componets/Effect";
import Footer from "@/componets/Footer";
import Navbar from "@/componets/Navbar";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
   const routr = useRouter();
  return (
    <>
   
     
      <main
        className={`${montserrat.variable} font-mont bg-light w-full h-auto`}
      >
        <Navbar />
        <AnimatePresence mode="wait" >
        <Component key={routr.asPath} {...pageProps} />
        </AnimatePresence>
    
        <div className="h-1  bg-h1text/10 w-full"/>
         <Footer/>
      </main>
    </>
  );
}
