import { Link, Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import SideMenu from "./SideMenu";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import CollapsNav from "./CollapsNav";
import CollapsMenu from "./CollapsMenu";

const Dashboard = () => {

  
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const userState = useSelector((state) => state.user);
  // console.log(userState)
  const [isAdmin, setIsAdmin] = useState(false);
const [loading, setLoading] = useState(true);

// Check if the user is an admin based on userState directly
useEffect(() => {
  const checkAdminStatus = async () => {
    try {
      if (userState && userState.userInfo && userState.userInfo.data.user.admin) {
        setIsAdmin(true);
      } else {
        navigate("/");
        toast.error("You are not allowed to access the admin panel.");
      }
    } catch (error) {
      console.error(error);
      navigate("/");
      toast.error("Failed to check admin status.");
    } finally {
      setLoading(false);
    }
  };

  checkAdminStatus();
}, [userState, navigate]);

if (loading) {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <h3 className="text-2xl text-slate-700">Loading...</h3>
    </div>
  );
}

if (!isAdmin) {
  return null;
}
const iconClasses = "text-xl text-default-500  pointer-events-none flex-shrink-0";
    return (


<div className="bg-gray-50 dark:bg-slate-900">
 
<Navbar isOpen={isOpen} setIsOpen={setIsOpen}></Navbar>
 <div className="cursor-pointer lg:hidden">
      
      </div>
      <CollapsNav isOpen={isOpen} setIsOpen={setIsOpen}>
            <CollapsMenu isOpen={isOpen} setIsOpen={setIsOpen}></CollapsMenu>
      </CollapsNav>

  <div  className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-gray-900 border-e border-gray-800 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">
    {/* <div className="px-6">
      <Link className="flex-none text-xl font-semibold text-white focus:outline-none focus:ring-1 focus:ring-gray-600" to="/" aria-label="Terra Whale">Terra Whale</Link>
    </div> */}
    
     <SideMenu isOpen={isOpen} setIsOpen={setIsOpen}></SideMenu>

  </div>

  <div className="w-full pt-2 px-4 sm:px-6 md:px-8 lg:ps-72 min-h-screen">
  <Outlet></Outlet>
     


  </div>
 
</div>


    );
}

export default Dashboard;
