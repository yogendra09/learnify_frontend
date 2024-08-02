import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { loginContext } from "../context/Logincontext";

const Navbar = () => {
  const {userloggedout, admin} = useContext(loginContext)
  const [menu, setmenu] = useState(false)
  console.log(admin)
  const menuBar = ()=>{
    setmenu(!menu)
    console.log(menu)
  }
  
  return (
    <div className="w-full h-[60px] shadow-md flex text-[#8B77E8] items-center justify-between px-20 max-sm:w-full max-sm:bg-red-40 max-sm:px-5 max-sm:relative">
      {
        menu ?<div className=" menu max-sm:w-full max-sm:bg-white max-sm:h-[100vh] max-sm:absolute max-sm:left-0 max-sm:top-[60px] max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:text-xl max-sm:gap-4  p-10">
            <Link className="max-sm:border-b-2 max-sm:w-full max-sm:text-center pb-2 border-[#8B77E8] border-t-2 pt-3" onClick={menuBar} to={`/`}>Home</Link>
        <Link className="max-sm:border-b-2 max-sm:w-full max-sm:text-center pb-2 border-[#8B77E8]" onClick={menuBar} to={`/about`}>About</Link>
        <Link className="max-sm:border-b-2 max-sm:w-full max-sm:text-center pb-2 border-[#8B77E8]" onClick={menuBar} to={`/courses`}>Courses</Link>
        <Link className="max-sm:border-b-2 max-sm:w-full max-sm:text-center pb-2 border-[#8B77E8]" onClick={menuBar} to={`/contact`}>Contact</Link>

        </div> : null
      }
      <h1 className="mainlogoheading">Learnify</h1>
      <div className="navigationlinks flex gap-8 max-sm:hidden ">
        <Link to={`/`}>Home</Link>
        <Link to={`/about`}>About</Link>
        <Link to={`/courses`}>Courses</Link>
        <Link to={`/contact`}>Contact</Link>
      </div>
      <div className="signupbtn flex items-center justify-center gap-5 max-sm:gap-2">
       
      {admin ? <Link to={`/addcourse`} ><span>Add Course</span></Link>: <span> <Link to='/dashboard'>Dasboard</Link></span>}
        <i onClick={userloggedout} className="ri-logout-box-r-line text-xl"></i>
        <div className="hamburger">
        <i onClick={menuBar} className={`ri-menu-2-line text-xl hidden max-sm:block`}></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
