import { useState } from "react";
import {CgMenuRight } from 'react-icons/cg'
import { VscChromeClose } from "react-icons/vsc";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import navbar from "../constant/navbar";
import socialLinks from "../constant/socialLinks";




const Navbar = () => {
  const [isMenuOpen, setIsMenuOpenOpen] = useState(false);



  

  return (
    <div className={`mb-8 bg-primary text-ternary font-mono w-screen sticky top-0 sm:shadow-lg  "`}>
      <nav
        className={`   shadow-sm flex justify-between px-2 py-4  w-screen`}
      >
        <div className="logo flex gap-2 ">
          <motion.div animate={{ rotate: 360 }}>
        <Link to="/">    <img
              src="/favicon.png"
              alt="logo"
              className="w-10 animate-bounce"
            /></Link>
          </motion.div>
<Link to="/" className="flex gap-1 items-center justify-center text-xl"><p className="text-white font-thin font-nunito">amresh</p> <p className="text-white font-semibold font-nunito">maurya</p> <p className="bg-green rounded-full w-[8px] h-[8px]"></p></Link>

         
        </div>


<div className="link flex justify-between gap-4  h-full">


     <ul className="flex flex-row justify-between mx-2 items-center w-full h-full gap-4 pt-2 pr-2 sm:hidden text-sm font-mono  ">
      
 
      
      {
        
        navbar.map((item)=>{
          return (
            <li key={item.id}>   <a href={`#${item.route}`} className="flex justify-center items-center gap-1">  <p className="text-ternary">{item.count}</p> <p className="text-lightest-slate hover:text-ternary">{item.title}</p> </a> </li>
            )
})
}
          


      </ul>
   

        <div className="resume p-2 w-36 text-center  sm:hidden">
<Link to={socialLinks.resume} className=" px-2 py-2 text-ternary border border-ternary shadow-lg hover:border-r-4 hover:border-b-4  rounded-lg text-center w-max ">Resume</Link>

</div>

        </div>


      </nav>

      <div
        onClick={() =>
          setIsMenuOpenOpen((prev) => {
            return prev === true ? false : true;
          })
        }
      >
        {" "}
        {isMenuOpen ? (
          <VscChromeClose className="mt-5 mr-5 text-ternary text-4xl absolute top-0 right-1 invisible sm:visible" />
        ) : (
          <CgMenuRight className="mt-5 mr-5   text-4xl absolute top-0 right-1 invisible text-ternary sm:visible" />
        )}
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}

     
        >
          <ul
            className={`h-screen w-full text-ternary flex flex-col  justify-start  items-center gap-4  ease-linear duration-1000`}
          >
          

<div className="list flex flex-col justify-center items-start gap-4 mt-8"> 
{
        
        navbar.map((item)=>{
          return (
            <li key={item.id}>   <a href={`#${item.route}`}  onClick={() =>
              setIsMenuOpenOpen((prev) => {
                return prev === true ? false : true;
              })
            } className="flex justify-center items-center text-2xl gap-1">  <p className="text-ternary">{item.count}</p> <p className="text-lightest-slate hover:text-ternary">{item.title}</p> </a> </li>
            )
})
}
   
    </div>
    <div className="resume mt-4 mb-8">

<Link to={socialLinks.resume} className="px-3 py-2 text-2xl text-ternary border border-ternary shadow-lg hover:border-r-4 hover:border-b-4  rounded-lg text-center w-max ">Resume</Link>
    </div>



          </ul>
        </motion.div>
      )}
    </div>
  );
};
export default Navbar;
