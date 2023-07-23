import Contact from "./Contact"
import Navbar from "@/app/pages/Navbar"
import Topbar from "@/app/pages/Topbar"




const Hero = () => {
  return (
    <main className="w-screen h-screen">
    
    <nav>
      <Topbar/>
    </nav>
    
    <div className="content flex sm:flex-col justify-between px-2 py-2 items-center">


<section className="text-content flex items-center justify-center mr-3 w-full mb-4">



<Contact />

</section>

<nav className=" sm:fixed sm:bottom-2 shadow-lg mr-2">
  <Navbar/>
</nav>


    </div>
    
    </main>
  )
}
export default Hero