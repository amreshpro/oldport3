import Navbar from "@/app/pages/Navbar"
import Topbar from "@/app/pages/Topbar"
import ProjectCard from "./ProjectCard"
import { othersContribution, vscodeThemes } from "@/constant/project"




const page = () => {
  return (
    <main className="w-screen h-screen">
    
    <nav>
      <Topbar/>
    </nav>
    
    <div className="content flex sm:flex-col justify-between px-2 py-2 items-center">


<section className="text-content  flex flex-wrap gap-4 items-center  justify-center sm:pb-16 w-full mb-4 px-3">

{
  othersContribution.map((item)=>{
    return <div key={item.id}>
      <ProjectCard {...item} />
    </div>
  })
}



{
  vscodeThemes.map((item)=>{
    return (<div key={item.id}>
      <ProjectCard {...item} />
    </div>)
  })
}

</section>

<nav className=" sm:fixed fixed right-3 top-1/2 sm:top-[88vh] sm:bottom-2 shadow-lg sm:ml-4">
  <Navbar/>
</nav>


    </div>
    
    </main>
  )
}
export default page