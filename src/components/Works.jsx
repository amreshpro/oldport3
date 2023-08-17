import ProjectCard from "./ProjectCard"
import { othersContribution, vscodeThemes,project, clones } from "../constant/project"




const Works = () => {
  return (
    <div className="content flex flex-col justify-between px-2 py-2 items-center">

<h1 className="text-white font-nunito font-bold text-4xl m-1">Projects</h1>
    <section className="text-content  flex flex-wrap gap-4 items-center  justify-center sm:pb-16 w-full mb-4 px-3">
    
    
    
    
    
    
    
    {
    
    project.map((item)=>{
      return <div key={item.id}>
        <ProjectCard {...item} />
      </div>
    })
    
    }
    
    
    {
    
    clones.map((item)=>{
      return <div key={item.id}>
        <ProjectCard {...item} />
      </div>
    })
    
    }
    


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
    </div>
  )
}
export default Works