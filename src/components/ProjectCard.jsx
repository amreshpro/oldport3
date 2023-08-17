
import { BsGithub,  } from "react-icons/bs"
import { VscPlay } from "react-icons/vsc"
import { Link } from "react-router-dom"



const ProjectCard = (props) => {
  



  // eslint-disable-next-line react/prop-types
  const {title,description,image_url,github_link,live_link , tag,id} = props
  
const allTags = tag.join(" ")

  return (
    <div  key={id} className={`mt-2 p-1 relative rounded-lg bg-secondary sm:w-auto w-80 shadow-lg flex flex-col justify-center items-center `}>
<div className="img-github">
  <img src={image_url} alt={title} className="rounded-2xl w-80 h-72 p-2 " />

 { live_link ?  <Link to={live_link} className="absolute top-6 left-6 text-center" ><VscPlay className="bg-primary border-4  border-gold animate-bounce text-white shadow-lg rounded-full p-1 text-5xl  hover:bg-pink600 hover:text-white " /> <span className="px-2 py-1 rounded-lg font-nunito bg-primary text-gold text-xl  hover:bg-pink600 hover:text-white ">Live</span> </Link>: null}

{ github_link ? <Link to={github_link} className="absolute top-6 right-6" ><BsGithub className="bg-github border-2 border-github p-1 animate-bounce shadow-lg rounded-full text-5xl  ml-0.5   hover:bg-pink600 hover:text-white " /><span className="px-2 py-1 rounded-lg  font-nunito bg-primary text-gold text-xl hover:bg-pink600 hover:text-white ">Code</span> </Link> :null}

</div>

<div className="text p-2 flex  flex-col flex-wrap text-start w-max-80 ">

<h1 className="title text-2xl sm:text-xl font-bold font-nunito text-gold ">{title}</h1>
<p className="text-[16px]  font-nunito mt-2  text-start leading-tight tracking-wide text-white"> {description}
 </p>

<div className="tag flex flex-wrap gap-0 ">{<li className=" p-1 text-ternary font-poppins font-bold"> {allTags}</li>}</div>
</div>





    </div>
  )
}
export default ProjectCard