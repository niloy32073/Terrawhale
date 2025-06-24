import { Link, useLocation } from "react-router-dom";
import logo from "../assets/mainLogo.jpg"
import { CalendarCheck, Folders, Key, Phone, ShieldHalf, ShoppingCart, Target, TicketCheck, User, Users } from 'lucide-react';
import { useState } from "react";


const CollapsMenu = ({isOpen, setIsOpen }) => {
    
  const router = useLocation()
    return (
        <nav className="hs-accordion-group px-6 py-1 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
        <Link onClick={() => setIsOpen(false)} to={"/"}> 
                    <div className='flex justify-start items-center gap-2 '>
                        <img src={logo} className='md:h-[50px] md:w-[50px] w-[40px] h-[40px] rounded-full'></img>
                        <div className=''>
                        <p className="flex-none md:text-lg text-sm font-semibold text-white" aria-label="Terra Whale">Terra Whale</p>  
                        <p className="flex-none md:text-lg text-sm md:-mt-3 -mt-2 font-semibold text-white" aria-label="Terra Whale">  Investment Group</p>
                        </div>

                    </div>
                </Link>
        <ul className="space-y-1.5">
       
        <li onClick={() => setIsOpen(false)}>
            <Link to="/dashboard" className="w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-600" >
            <Folders />
              Blog
            </Link>
          </li>
        <li onClick={() => setIsOpen(false)}>
            <Link to="/dashboard/news" className="w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-600" >
            <Folders />
              News
            </Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link to="/dashboard/contact" className="w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-600" >
            <Phone />
              Contact
            </Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link to="/dashboard/team" className="w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-600" >
            <ShieldHalf className='text-sm'/>
              Team
            </Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link to="/dashboard/demo" className="w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-600" >
            <Target className='text-sm'/>
              Explore
            </Link>
          </li>
  
          <li onClick={() => setIsOpen(false)} className="hs-accordion" id="users-accordion">
            <button type="button" className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-600">
            <Users />
              Users
  
              <svg className="hs-accordion-active:block ms-auto hidden w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
  
              <svg className="hs-accordion-active:hidden ms-auto block w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </button>
  
            <div id="users-accordion-child" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
              <ul className="hs-accordion-group ps-3 pt-2" data-hs-accordion-always-open>
                <li className="hs-accordion" id="users-accordion-sub-1">
                  <button type="button" className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-600">
                    Investor
  
                    <svg className="hs-accordion-active:block ms-auto hidden w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
  
                    <svg className="hs-accordion-active:hidden ms-auto block w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </button>
  
                  <div id="users-accordion-sub-1-child" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
                    <ul className="pt-2 ps-2">
                      <li>
                        <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-600" href="#">
                          Link 1
                        </a>
                      </li>
                      <li>
                        <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-600" href="#">
                          Link 2
                        </a>
                      </li>
                      <li>
                        <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-600" href="#">
                          Link 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              
              </ul>
            </div>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link to="/dashboard/demo" className="w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-600" >
            <CalendarCheck />
            Subscription
            </Link>
          </li>
      
        
       
          <li onClick={() => setIsOpen(false)}>
            <Link to="/dashboard/demo" className="w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-600" >
            <User />
              Profile
            </Link>
          </li>
  
  
        
  
        </ul>
      </nav>
    );
};

export default CollapsMenu;