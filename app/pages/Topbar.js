import socialLinks from "@/constant/socialLinks"
import Link from "next/link"
import {BsGithub,BsLinkedin,BsInstagram} from 'react-icons/bs'



const Topbar = () => {
  return (
    <nav className="px-4 sm:px-2 flex justify-between">

<header className="logo px-2">
<span className="text-white font-sriracha text-2xl  sm:text-xl"><strong>amresh</strong> maurya <span className="text-green font-extrabold text-4xl xsm:text-2xl xsm2:hidden ">.</span></span>
</header>

<section className="flex gap-4 sm:gap-2 pr-8 text-2xl sm:text-xl py-4 xsm:py-2 ">
    <li>
        <Link href={socialLinks.github}><BsGithub/></Link>
    </li>
    <li>
        <Link href={socialLinks.linkedin} ><BsLinkedin/></Link>
    </li>
    <li><Link href={socialLinks.instagram} ><BsInstagram/></Link></li>
</section>

    </nav>
  )
}
export default Topbar