import socialLinks from "../constant/socialLinks"

import {BsGithub,BsLinkedin,BsInstagram} from 'react-icons/bs'
import { Link } from "react-router-dom"



const Leftbar = () => {
  return (
    <nav className=" sm:hidden fixed left-2 h-full flex flex-col gap-2 justify-center items-center w-max sm:px-0 sm:py-0 px-4 py-2">

{/* <header className="logo px-2">
<span className="text-white font-sriracha text-2xl  sm:text-xl"><strong>amresh</strong> maurya <span className="text-green font-extrabold text-4xl xsm:text-2xl xsm2:hidden ">.</span></span>
</header> */}

<section className="flex flex-col justify-between items-center text-slate gap-6 text-2xl ">
    <li className="hover:text-ternary ">
        <Link to={socialLinks.github}><BsGithub/></Link>
    </li>
    <li className="hover:text-ternary ">
        <Link to={socialLinks.linkedin} ><BsLinkedin/></Link>
    </li>
    <li className="hover:text-ternary "><Link to={socialLinks.instagram} ><BsInstagram/></Link></li>
</section>
<div className="h-36 w-[2px] bg-slate hover:bg-ternary ml-0.5 mt-4"></div>

    </nav>
  )
}
export default Leftbar