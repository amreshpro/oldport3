import { Link } from "react-router-dom"

const Rightbar = () => {
  return (
    <div className=" sm:hidden fixed right-2  text-slate hover:text-ternary h-full w-max text-center flex flex-col justify-center items-center gap-2 mx-2 px-2">
        <Link className=" font-mono hover:text-ternary vertical-mode" to="mailto:amresh.terminal@gmail.com">amresh.terminal@gmail.com</Link>
        <div className="h-36 w-[2px] bg-slate hover:bg-ternary ml-0.5"></div>
    </div>
  )
}
export default Rightbar