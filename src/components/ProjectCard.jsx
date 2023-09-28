
import { BsGithub, BsPlay  } from "react-icons/bs"
// import { FaPlay } from "react-icons/fa"
import { Link } from "react-router-dom"



const ProjectCard = (props) => {
  



  // eslint-disable-next-line react/prop-types
  const {title,description,image_url,github_link,live_link , tag} = props
  


  return (
//   <div className="bg-secondary text-slate flex md:flex-col sm:flex-col h-max md:h-full justify-evenly shadow-lg">
  
//   <div className="img sm:w-full  md:w-full w-1/2 ">
//     <img src={image_url} alt={title} className="md:h-full sm:h-full h-96 object-fill" />
//   </div>
//   <div className="content px-4 py-4 flex flex-col  gap-2 sm:items-start md:items-start  items-end w-1/2 md:w-full   sm:w-full">
//     <p className="font-mono text-ternary text-sm">Featured Project</p>
//     <Link to={live_link} className="text-lightest-slate text-2xl sm:text-xl hover:underline hover:text-ternary font-nunito font-bold" >{title}</Link>
// <div className="description-container w-full p-2 sm:p-0.5">
// <div className="description w-full break-words bg-primary rounded-sm text-slate py-4  px-2  border-ternary border-t-2 border-l-2  border-r-2 border-b-2 text-justify  ">
// <p className="sm:text-md sm:w-full text-justify">{description}</p> 


//     </div>
// </div>
//     <div className="tag flex gap-2 flex-wrap items-center">


// {
//   tag?.map((item,i)=>{
//     return(
//       <p key={i} className="text-ternary text-sm border border-ternary rounded-lg w-max h-max py-1 px-2 ">{item}</p>
      
//       )
//     })
// }
//     </div>
//     {/* line */}
//     <div className="h-[2px] w-full mt-4 mb-2 bg-slate hover:bg-ternary ml-0.5"> </div>

// <div className="link flex text-3xl gap-4 sm:justify-center sm:w-full ">
//  { github_link ? <Link to={github_link} className="text-lightest-slate hover:text-ternary rounded-full px-2 py-2  border-4  border-ternary "><BsGithub/></Link> :""}
//  { live_link ? <Link to={live_link} className="text-lightest-slate hover:text-ternary rounded-full px-2 py-2  border-4 border-ternary"><FaPlay className="pl-1" /></Link> :"" }

// </div>


//   </div>


//   </div>


<div className="card w-96 bg-secondary rounded-lg shadow-xl">
  <Link to={live_link}><img src={image_url} alt={title} className="rounded-t-lg w-full h-52" /></Link>
  <div className="card-body px-4 text-ternary text-justify">
    <h2 className="card-title text-lightest-slate text-2xl py-2">{title}</h2>
    <p className="font-nunito">{description}</p>
          <div className="card-actions flex justify-between gap-4 text-4xl py-2 pb-4">
{ live_link &&    <Link to={live_link} className="btn btn-primary border border-ternary rounded-full items-center"><BsPlay/></Link>}
    {  github_link && <Link to={github_link} className="btn btn-primary"><BsGithub/></Link>}
    </div>
  </div>
</div>


  )
}



export default ProjectCard