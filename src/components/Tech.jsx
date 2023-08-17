



import BallCanvas from "../canvas/Ball";
import tech from "../constant/tech";

const Tech = () => {
  return (

    <div className="content flex flex-col justify-between px-2 py-2 items-center  sm:mb-20">
    <h1 className="text-white font-nunito font-bold text-4xl m-1">Skills</h1>
    <div className='flex flex-row flex-wrap justify-center gap-10  mt-4'>
      {tech.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </div>
  );
};


export default Tech