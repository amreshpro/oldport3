import Link from "next/link"
import { BsGithub,  } from "react-icons/bs"
import { VscPlay } from "react-icons/vsc"



const ProjectCard = (props) => {
  



  const {title,description,image_url,github_link,live_link , tag,id} = props
  
  return (
    <div  key={id} className={`mt-2 p-1 relative rounded-lg bg-secondary sm:w-auto w-80 shadow-lg flex flex-col justify-center items-center `}>
<div className="img-github">
  <img src={image_url} alt={title} className="rounded-2xl w-80 h-72 p-2 " />

 { live_link ?  <Link href={live_link} className="absolute top-6 left-6 text-center" ><VscPlay className="bg-secondary animate-bounce text-white shadow-lg rounded-full p-1 text-4xl " /></Link>: null}

{ github_link ? <Link href={github_link} className="absolute top-6 right-6" ><BsGithub className="bg-secondary text-white animate-bounce shadow-lg rounded-full text-4xl  ml-0.5  " /></Link> :null}

</div>

<div className="text p-2 flex  flex-col flex-wrap text-start w-max-80 ">

<h1 className="title text-2xl sm:text-xl font-bold font-nunito text-gold ">{title}</h1>
<p className="text-[16px] font-bold font-nunito mt-2  text-start leading-tight tracking-wide text-white"> {description}
 </p>

<div className="tag flex flex-wrap gap-0 ">{tag.map((item,i)=>{return <li  key={i} className=" p-1 text-ternary font-poppins font-bold"> {item+" "}</li>})}</div>
</div>





    </div>
  )
}
export default ProjectCard