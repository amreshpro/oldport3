
import tech from "../constant/tech"
import SkillCard from "./SkillCard"
import ScrollReveal from "scrollreveal"

const Skills = () => {
  ScrollReveal().reveal('.text-content',{

    delay: 375,
    duration: 500,
    reset: true
  })

  return (
    <div className="content   bg-primary flex flex-wrap  gap-4  sm:mt-8  ml-8 sm:mr-0 sm:ml-0 px-16 sm:px-4 py-4">
<div id="skill" className="flex gap-1 justify-items-center "><p className="text-ternary font-mono text-xl ">03.</p> <p className="hover:text-ternary text-lightest-slate font-nunito text-4xl font-bold">Skills</p> <div className="h-[1px] w-36 bg-slate hover:bg-ternary ml-0.5 mt-4"></div> </div>


    <section className="text-content flex flex-wrap gap-8  justify-center sm:pb-16 w-full h-full bg-primary mb-4 px-3">
    {
      tech.map((item)=>{
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