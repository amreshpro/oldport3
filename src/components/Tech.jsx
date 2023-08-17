



import BallCanvas from "../canvas/Ball";
import tech from "../constant/tech";

const Tech = () => {
  return (

    <div className="content flex flex-col justify-between px-2 py-2 items-center  sm:mb-20  w-full h-full">
    <h1 className="text-white font-nunito font-bold text-4xl m-1">Skills</h1>
    <div className='flex flex-row flex-wrap justify-center gap-16 h-full mt-4'>
      {
      tech.map((technology) => (
        <div className='sm:w-28 w-36 h-36  sm:h-28' key={technology.name}>
        { technology.icon ? <BallCanvas icon={technology.icon} /> :"" }
        </div>
      ))
      }
    </div>
    </div>
  );
};


export default Tech