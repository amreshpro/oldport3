import Link from "next/link"
import {RiHomeHeartFill} from 'react-icons/ri'
import {SiPolymerproject,SiGmail} from 'react-icons/si'
import {CgListTree} from 'react-icons/cg'

const Navbar = () => {
  return (
   

    <div className="  z-50 sm:mb-2 flex flex-col justify-evenly py-2 px-2 gap-6 sm:gap-4 sm:flex-row md:flex-col  sm:w-[90vw] shadow-xl bg-secondary text-white  rounded-2xl" >

<Link href="/"><RiHomeHeartFill  className="text-2xl sm:text-2xl " /></Link>
<Link href="work"><SiPolymerproject className="text-2xl sm:text-2xl" /></Link>
<Link href="skill"><CgListTree className="text-2xl sm:text-2xl" /></Link>
<Link href="contact"><SiGmail className="text-2xl sm:text-2xl" /></Link>



    </div>

  )
}
export default Navbar