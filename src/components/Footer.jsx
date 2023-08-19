

import { Link } from "react-router-dom"
import socialLinks from "../constant/socialLinks"
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs"


const Footer = () => {
  return (
<section className="hidden   sm:flex  justify-center items-center text-slate gap-8 pb-8 px-2 text-4xl ">
    <li className="text-ternary border-4 hover:text-green border-ternary rounded-full p-2">
        <Link to={socialLinks.github} className=""><BsGithub/></Link>
    </li>
    <li className="text-ternary border-4 hover:text-green border-ternary rounded-full p-2">
        <Link to={socialLinks.linkedin} className="" ><BsLinkedin/></Link>
    </li>
    <li className="text-ternary border-4 hover:text-green border-ternary rounded-full p-2 "><Link className="" to={socialLinks.instagram} ><BsInstagram/></Link></li>
</section>
  )
}
export default Footer