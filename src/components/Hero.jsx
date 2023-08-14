

import socialLinks from "../constant/socialLinks"
import { intro,onelinear } from "../constant/about"


const Hero = () => {
  return (
    <main className="w-full h-full ">
    
  
    
    <div className="content flex sm:flex-col justify-between px-2 py-2 items-center">


<section className="text-content w-full">

<div className={` flex justify-between px-4 pb-16 flex-wrap w-full `}>


<section className="text flex flex-col gap-3 mb-4">
  <span className="text-2xl text-gray-500 font-nunito font-bold">Hii, I am </span>  <h1 className="text-white text-4xl font-nunito  font-bold">Amresh Maurya</h1>
   <p className="">{intro}</p>
    <p className="font-poppins text-gray-500 m-1 italic">{onelinear}</p>
<div className="social-btn flex gap-4">
    <a href={socialLinks.github} className=" bg-secondary text-white px-3 py-1 rounded-lg font-nunito font-bold">Github</a>
    <a href={socialLinks.resume}  className=" bg-secondary text-white px-4 py-1 rounded-lg font-nunito font-bold ">Resume</a>
</div>
</section>

<section className="m-2 flex flex-wrap justify-between w-full relative mb-4">
    <img src="/photo.jpeg" alt="my-photo" className="rounded-full w-72 sm:w-64  " />
   
</section>


    </div>


</section>





    </div>
    
    </main>
  )
}
export default Hero