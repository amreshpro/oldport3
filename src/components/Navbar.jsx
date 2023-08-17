import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { isDarkModeEnabled } from "../store/darkModeSlice"
import {BsMoonStars} from 'react-icons/bs'
import {FiSun} from 'react-icons/fi'
import {MdWorkspaces} from 'react-icons/md'
import {SiLinktree} from 'react-icons/si'
import {IoMdContact} from 'react-icons/io'


const Navbar = () => {

const isDarkMode = useSelector((state)=>state.darkMode)
console.log(isDarkMode)
const dispatch = useDispatch()

function onDarkModeClickHandler(){
  dispatch(isDarkModeEnabled())
}

  return (
    <nav className={` px-4 sm:px-2 sm:mx-1 mx-2 py-4 my-2 text-md   ${isDarkMode ? "bg-dark text-blueGray border-2 border-white"  : "bg-white text-primaryText border-2 border-border"} rounded-lg`}>
<ul className="flex  justify-between items-center sm:gap-2 gap-4 ">
  <div className="logo flex justify-center gap-4 sm:gap-2 text-2xl md:text-xl sm:text-lg  sm:pl-1 ">
  <Link to="/" className="font-nunito lowercase "> Amresh </Link>
<button onClick={onDarkModeClickHandler} className="text-3xl sm:text-2xl">  { isDarkMode ? <BsMoonStars/> : <FiSun/> }  </button>
  </div>
 
<div className="nav-link flex  justify-center text-3xl  sm:text-2xl gap-4 sm:gap-4 sm:mr-2 ">
<Link to="/work"><MdWorkspaces/></Link>
  <Link to="/skill"> <SiLinktree/></Link>
  <Link to="/contact"><IoMdContact/> </Link>
</div>



</ul>


    </nav>
  )
}
export default Navbar