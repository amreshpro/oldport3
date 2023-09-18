import About from "./About"
import Contact from "./Contact"
import Hero from "./Hero"
import Skills from "./Skills"
import Works from "./Works"



const MainContainer = () => {
  return (
    <div className="flex flex-col gap-4 w-screen h-full ">

<Hero/>
<About/> 
<Works/>
<Skills/>
<Contact/>
    </div>
  )
}
export default MainContainer