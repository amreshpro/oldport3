import { intro3,key1name,key1des,key2name,key2des,key3name,key3des,key4name,key4des } from "../constant/about"

const About = () => {
  return (
    <div  id="about" className="flex flex-col gap-4 h-full w-full mx-8 sm:mx-2 sm:mr-0 sm:ml-0 px-16 sm:px-4 py-4">


<div className="flex gap-1 "><p className="text-ternary font-mono text-xl ">01.</p> <p className="hover:text-ternary text-lightest-slate font-nunito text-4xl font-bold">About</p> <div className="h-[1px] w-36 bg-slate hover:bg-ternary ml-0.5 mt-4"></div> </div>


<div className="text-img  flex  md:flex-wrap md:gap-4 sm:flex-col items-center justify-evenly  " >
 
    <div className="text flex flex-col gap-4 w-1/2  md:w-full md:mr-4">
    <p className="text-justify text-slate">{intro3}</p>

<p className="text-justify text-slate">🌟 Here's what you can expect from me:</p>
<p className="text-justify text-slate"><strong>{key1name}</strong>{key1des}</p>
<p className="text-justify text-slate"><strong>{key2name}</strong>{key2des}</p>
<p className="text-justify text-slate"><strong>{key3name}</strong>{key3des}</p>
<p className="text-justify text-slate"><strong>{key4name}</strong>{key4des}</p>
   </div>

    <div className="img box-border rounded-full w-1/2 md:w-full  mr-8 sm:mr-1 flex items-center justify-center  ">

    <img
               src="/photo.jpeg"
               alt="my-photo"
               className="rounded-full w-72 sm:w-64 border-animation "
             />

    </div>


</div>

    </div>
  )
}
export default About
