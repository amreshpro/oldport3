import { intro, oneliner } from "../constant/about"

const About = () => {
  return (
    <div className="flex flex-col gap-4 h-screen w-full  mx-8 sm:mx-2 sm:mr-0 sm:ml-0 px-16 sm:px-4 py-4">


<div id="about" className="flex gap-1 "><p className="text-ternary font-mono text-xl ">01.</p> <p className="hover:text-ternary text-lightest-slate font-nunito text-4xl font-bold">About</p> <div className="h-[1px] w-36 bg-slate hover:bg-ternary ml-0.5 mt-4"></div> </div>


<div className="text-img  flex sm:flex-col justify-evenly gap-4" >
    <div className="text flex flex-col gap-4">
<p className="text-slate">{intro} </p>
<p className="text-slate italic ">{oneliner}</p>
    </div>
    <div className="img rounded-lg border-r-8 border-b-8 border-2 border-ternary w-full mr-8 sm:mr-1 flex items-center justify-center p-2  ">

    <img
               src="/photo.jpeg"
               alt="my-photo"
               className="rounded-full  w-72 sm:w-64  "
             />

    </div>
</div>

    </div>
  )
}
export default About
