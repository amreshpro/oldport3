"use client"



const SkillCard = ({icon,name}) => {
   
 
    
  return (

        <div className={`skills rounded-lg border-2 border-ternary  hover:border-b-4 hover:border-r-4 hover:border-ternary flex flex-col justify-center items-center gap-1 bg-[url(${icon})]  `}>
          <img src={icon} alt={name}  className="w-28 h-28   hover:blur-sm p-1 " />
          <h1 className=" text-ternary font-bold pb-1 ">{name}</h1>

        </div>
     
       
  )
}

export default SkillCard