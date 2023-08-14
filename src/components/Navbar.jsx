import { RiHomeHeartFill } from "react-icons/ri";

import { CgListTree } from "react-icons/cg";
import {IoMdContact} from 'react-icons/io'
import {MdWorkspaces} from 'react-icons/md'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" flex flex-col  w-full h-full absolute items-center justify-center  ">
      <div className="sm:navbar-location z-50 flex flex-col w-max fixed right-2 sm:right-auto
      top-36 sm:h-max   sm:flex-row gap-4 
      justify-evenly py-1 px-1 
sm:top-auto sm: sm:mt-1 sm:mb-8 sm:w-[88vw] sm:pr-2 sm:bottom-0
      items-center shadow-xl bg-bar
       text-white  rounded-2xl">


        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "bg-primary rounded-full p-2" : ""
          }
        >
          <RiHomeHeartFill className="text-3xl sm:text-3xl " />
        </NavLink>

        <NavLink
          to="work"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "bg-primary rounded-full p-2" : ""
          }
        >
          <MdWorkspaces className="text-3xl  text-white sm:text-3xl" />
        </NavLink>

        <NavLink
          to="skill"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "bg-primary rounded-full p-2 " : ""
          }
        >
          <CgListTree className="text-3xl sm:text-3xl" />
        </NavLink>

        <NavLink
          to="contact"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "bg-primary rounded-full p-2 " : ""
          }
        >
          <IoMdContact className="text-3xl sm:text-3xl" />
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
