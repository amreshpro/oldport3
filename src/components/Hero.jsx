import { Link } from "react-router-dom";
import socialLinks from "../constant/socialLinks";
import { oneliner } from "../constant/about";






const Hero = () => {
  return (
<header className="flex flex-col gap-4 h-screen w-full  ml-8 mr-4 sm:mr-0 sm:ml-0 px-16 sm:px-4 py-4">

<p className="hii text-ternary font-mono text-lg"> Hi, my name is</p>
<h1 className="text-6xl font-bold sm:text-3xl text-lightest-slate">Amresh Maurya.</h1>
<h1 className="text-6xl font-bold sm:text-3xl text-slate">I build things for the web.</h1>
<p className="text-slate font-nunito  text-lg "> I’m a software engineer specializing in building exceptional digital experiences.</p>
<p className="text-slate font-nunito  text-lg "> {oneliner}</p>


<Link to={socialLinks.resume} className="px-3 py-2 text-2xl text-ternary border border-ternary shadow-lg hover:border-r-4 hover:border-b-4  rounded-lg text-center w-max ">Resume</Link>
</header>
  );
};
export default Hero;
