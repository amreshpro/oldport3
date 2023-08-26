



const SkillCard = ({icon,name}) => {
   
 
    
  return (

        <div className={`skills rounded-lg border-2  border-b-4 border-r-4 border-ternary flex flex-col justify-center items-center gap-1  `}>
          <img src={icon} alt={name}  className="w-28 h-28   hover:blur-sm p-1 " />
          <h1 className=" text-ternary font-bold pb-1 ">{name}</h1>

        </div>
     
       
  )
}


export default SkillCard
