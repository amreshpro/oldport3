import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import {CgMenuRight } from 'react-icons/cg'
import { VscChromeClose } from "react-icons/vsc";
import { BsMoonStarsFill } from "react-icons/bs";
import { LuSunMoon } from "react-icons/lu";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { isDarkModeEnabled } from "../store/modeToggleSlice";
import navbar from "../constant/navbar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpenOpen] = useState(false);

  const isDarkMode = useSelector((state) => state.modeToggle);

  // const dispatch = useDispatch();

  // const toggleDarkModeHandler = () => {
  //   dispatch(isDarkModeEnabled());

  //   console.log(isDarkMode);
  // };

  return (
    <div className={`mb-8 bg-primary text-ternary font-mono"`}>
      <nav
        className={`   shadow-sm text-pink-500 flex justify-between px-2 py-4 `}
      >
        <div className="logo flex gap-2 ">
          <motion.div animate={{ rotate: 360 }}>
        <Link to="/">    <img
              src="/favicon.png"
              alt="logo"
              className="w-10 animate-waving-hand"
            /></Link>
          </motion.div>
       
          {/* <button onClick={toggleDarkModeHandler}>
            {isDarkMode ? (
              <LuSunMoon className="mb-4 text-3xl font-bold  text-orange-300" />
            ) : (
              <BsMoonStarsFill className="text-2xl mt-0.5 ml-1 font-bold  mb-4 text-violet-800" />
            )}
          </button> */}
        </div>

        <ul className="flex flex-row gap-4 pt-2 pr-2 sm:hidden text-sm font-mono  ">
        {

navbar.map((item)=>{
  return (
    <li key={item.id}>   <Link to={item.route}  className="flex justify-center items-center gap-1">  <p className="text-ternary">{item.count}</p> <p className="text-lightest-slate">{item.title}</p> </Link> </li>
  )
})
}
        </ul>
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
          <VscChromeClose className="mt-5 mr-5 text-ternary text-2xl absolute top-0 right-1 invisible sm:visible" />
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
            className={` text-ternary   px-4 flex flex-col justify-center items-center gap-4 pt-2 pb-8 ease-linear duration-1000`}
          >
          


{

navbar.map((item)=>{
  return (
    <li key={item.id}>   <Link to={item.route}  className="flex sm:flex-col justify-center items-center sm:gap-1">  <p className="text-ternary">{item.count}</p> <p className="text-light-slate">{item.title}</p> </Link> </li>
  )
})

}



          </ul>
        </motion.div>
      )}
    </div>
  );
};
export default Navbar;
