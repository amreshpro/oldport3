import { clones } from "../constant/project"
import ProjectCard from "./ProjectCard"
import ScrollReveal from "scrollreveal"

const Works = () => {

  ScrollReveal().reveal('.project', {
    delay: 375,
    duration: 500,
    reset: true
  })


  return (
    <div className=" bg-primary flex flex-wrap flex-col gap-4 justify-center  h-full mt-4  ml-8 sm:mr-0 sm:ml-0 px-16 sm:px-4 py-4">

      <div id="work" className="flex gap-1 justify-items-center "><p className="text-ternary font-mono text-xl ">02.</p> <p className="hover:text-ternary text-lightest-slate font-nunito text-4xl font-bold">Work</p> <div className="h-[1px] w-36 bg-slate hover:bg-ternary ml-0.5 mt-4"></div> </div>



      <div className="project bg-primary flex flex-wrap flex-col gap-4 justify-center  h-full   ml-8 sm:mr-0 sm:ml-0 px-16 sm:px-4 py-4">



        {

          clones.map((item) => {
            return (
              <ProjectCard key={item.id} {...item} />
            )
          })

        }




      </div>


    </div>
  )
}
export default Works