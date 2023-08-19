

import { Link } from "react-router-dom"
import socialLinks from "../constant/socialLinks"
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs"


const Footer = () => {
  return (
<section className="hidden   sm:flex  justify-center items-center text-slate gap-8 pb-8 px-2 text-2xl ">
    <li className="hover:text-ternary ">
        <Link to={socialLinks.github}><BsGithub/></Link>
    </li>
    <li className="hover:text-ternary ">
        <Link to={socialLinks.linkedin} ><BsLinkedin/></Link>
    </li>
    <li className="hover:text-ternary "><Link to={socialLinks.instagram} ><BsInstagram/></Link></li>
</section>
  )
}
export default Footer