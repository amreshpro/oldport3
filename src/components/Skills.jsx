import skills from "../constant/skill"
import SkillCard from "./SkillCard"


const Skills = () => {
  return (
    <div className="content flex sm:flex-col justify-between px-2 py-2 items-center">
<h1 className="text-white font-nunito font-bold text-4xl m-1">Skills</h1>

    <section className="text-content flex flex-col justify-center sm:pb-16 w-full mb-4 px-3">
    {
      skills.map((item)=>{
        return <div key={item.id}> 
          <SkillCard {...item} />
           </div>
    
      })
    }
    
    </section>
    </div>
  )
}
export default Skills