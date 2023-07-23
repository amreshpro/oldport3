import Navbar from "./Navbar"
import Topbar from "./Topbar"
import socialLinks from "@/constant/socialLinks"



const Hero = () => {
  return (
    <main className="w-screen h-screen">
    
    <nav>
      <Topbar/>
    </nav>
    
    <div className="content flex sm:flex-col justify-between px-2 py-2 items-center">


<section className="text-content">

<div className={` flex justify-between px-4 pb-16 flex-wrap `}>


<section className="text flex flex-col gap-3 mb-4">
  <span className="text-2xl text-gray-500 font-nunito font-bold">Hii, I'm </span>  <h1 className="text-white text-4xl font-nunito  font-bold">Amresh Maurya</h1>
    <p className="font-poppins text-gray-500 m-1">I code beautifully simple things.I enjoy creating things that live on internet and I love what I do.</p>
<div className="social-btn flex gap-4">
    <a href={socialLinks.github} className=" bg-secondary text-white px-3 py-1 rounded-lg font-nunito font-bold">Github</a>
    <a href={socialLinks.resume}  className=" bg-secondary text-white px-4 py-1 rounded-lg font-nunito font-bold ">Resume</a>
</div>
</section>

<section className="m-2">
    <img src="/photo.jpeg" alt="my-photo" className="rounded-full w-80 sm:w-64 " />
</section>


    </div>


</section>
<nav className=" sm:fixed sm:bottom-2 shadow-lg mr-2">
  <Navbar/>
</nav>


    </div>
    
    </main>
  )
}
export default Hero