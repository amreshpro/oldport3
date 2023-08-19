import { Link } from "react-router-dom"

const Error = () => {
  return (
    <div className="flex gap-4 flex-col flex-wrap w-full h-screen mt-4 text-center justify-center items-center text-4xl">

<p className="text-red">Page Not Found : 404</p>

<Link to="/" className="bg-secondary w-max text-center text-white text-2xl p-2 rounded-lg ">Back To Home</Link>
    </div>
  )
}
export default Error