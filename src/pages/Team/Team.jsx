import React, { useEffect, useState } from 'react';
import img1 from '../../assets/team-banner.jpg';
import { FaArrowRightLong } from "react-icons/fa6";
import Aos from "aos"
import "aos/dist/aos.css";
import ScrollToTop from '../../hooks/ScrollToTop';
import { Link } from 'react-router-dom';
import { readAllTeam } from '../../services/index/teamPost';



const Team = () => {
    useEffect(function () {
        Aos.init({ duration: 500 });
    }, []);
    const [team , setTeam] = useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const { data } = await readAllTeam();
           console.log(data)
            setTeam(data.data);
          } catch (error) {
            console.error(error);
          }
        };
      
        fetchData();
      }, []);
    return (
        <ScrollToTop>
            <div className='mx-5 md:mx-14 mt-10'>

                <div className="relative z-10">
                    <div
                        className="absolute hidden inset-x-0 top-1/2 -z-10  -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
                        <svg className="h-[60rem] w-[100rem] flex-none stroke-blue-600 opacity-20" aria-hidden="true">
                            <defs>
                                <pattern id="e9033f3e-f665-41a6-84ef-756f6778e6fe" width="200" height="200" x="50%" y="50%"
                                    patternUnits="userSpaceOnUse" patternTransform="translate(-100 0)">
                                    <path d="M.5 200V.5H200" fill="none"></path>
                                </pattern>
                            </defs>
                            <svg x="50%" y="50%" className="overflow-visible fill-blue-500">
                                <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" strokeWidth="0"></path>
                            </svg>
                            <rect width="100%" height="100%" strokeWidth="0" fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)">
                            </rect>
                        </svg>
                    </div>

                </div>


                <div className='md:flex items-center gap-14 mt-14'>
                    <div className='md:w-1/2 mb-4 md:mb-0' data-aos="fade-right">
                        <h1 className='text-5xl font-semibold mb-5 dark:text-white'>Meet Our Team</h1>
                        <p className='text-neutral-600 text-lg dark:text-neutral-300 w-11/12'>Our team combines deep expertise in manufacturing optimization, strategic investment, and market development to deliver comprehensive growth solutions. Partnering with Terra Whale means working with dedicated professionals committed to simplifying complex challenges, lowering costs, and accelerating your business success across production, funding, and retail channels.
Together, we drive innovation, operational excellence, and sustainable expansion at every stage of your journey.</p>
                    </div>

                    <div className='md:w-1/2' data-aos="fade-left">
                        <img className='md:w-11/12 rounded-tl-[80px]' src={img1} alt="" />
                    </div>
                </div>


                {/* team members */}


                <div className='mb-32'>
                    <h1 className='text-4xl font-semibold mb-5 dark:text-white mt-20'>All team members</h1>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-10'>
                    {team && team?.map((i, index) => ( 

                        <div key={i.id} className='hover:text-[#4169E1] dark:hover:text-[#4169E1] transition-all text-neutral-700 carsor-pointer dark:text-white' data-aos="fade-up">
                            <img className='border rounded-tl-[30%] rounded-br-[30%] h-[230px] w-[250px] object-cover object-center' src={i.image} alt="" />
                            <h3 className='text-2xl font-semibold mt-2 cursor-pointer'>{i.name}</h3>
                            <p className='text-neutral-600 dark:text-neutral-300 cursor-pointer'>{i.designation}</p>
                            <FaArrowRightLong className='mt-1 pl-1 text-xl cursor-pointer' />
                        </div>
                    ))}
                        

                       
                    

                    </div>
                </div>




                {/* explore */}
               <Link to="/investments"><div className='group relative cursor-pointer overflow-hidden bg-white dark:bg-[#121212] dark:border-gray-600 border-[#4169E1] border text-white  my-20 md:11/12 lg:w-9/12 mx-auto py-20 md:py-24 transition-all duration-300 rounded-tl-[50px] md:rounded-tl-[100px] lg:rounded-tl-[145px] rounded-br-[50px] md:rounded-br-[100px] lg:rounded-br-[145px] lg:px-40'>
                    <div className='text-container w-full'>
                        <h1 className='text-[26px] md:text-[35px] lg:text-[50px] lg:mt-0 md:mt-4 mt-4 font-semibold text-center flex items-center justify-center gap-3 text-[#4169E1] group-hover:text-[#fff] md:gap-7'>Explore Investors <FaArrowRightLong className='pt-3 text-[26px] md:text-[30px] md:mt-0 -mt-2 lg:text-[50px] group-hover:text-[#fff] group-hover:ml-2' /></h1>
                    </div>
                    <span className="absolute md:text-md text-sm top-2 left-[16%] lg:left-[29%] px-4 z-0 h-6 w-30 rounded-full bg-[#4169E1] transition-all duration-300 group-hover:text-[#668bfd] group-hover:scale-[50] mt-5">up Next</span>
                    <div className='flex flex-col z-[20] justify-center px-4 md:w-11/12 lg:w-full mx-auto text-black'>
                    </div>
                </div>
                </Link> 

            </div >
        </ScrollToTop>
    );
};

export default Team;