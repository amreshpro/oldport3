import { RiHomeHeartFill } from "react-icons/ri";

import { CgListTree } from "react-icons/cg";
import {IoMdContact} from 'react-icons/io'
import {GrProjects} from 'react-icons/gr'
import {MdWorkspaces} from 'react-icons/md'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" flex flex-col justify-center w-full h-full pb-4  ">
      <div className=" z-50 w-max p-2 mb-4 px-4 py-4 m-3 fixed right-1 top-36 sm:top-[86vh]   sm:w-[90vw]  sm:left-0  flex flex-col  justify-evenly items-center sm:flex-row gap-4 shadow-xl bg-bar text-white  rounded-2xl">
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
    </div>
  );
};
export default Navbar;
