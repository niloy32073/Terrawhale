// import img1 from '../../assets/banner1.jpg';
import  {useEffect, useState } from 'react';
import { FaChartLine } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import photo from "../../assets/bannerphoto.png";
// import photo1 from "../../assets/investment1.jpg"
import { MdArrowOutward } from "react-icons/md";

import AnimatedNumbers from "react-animated-numbers";
const Banner = () => {


  return (
    <div className="relative md:flex mx-5 md:mx-7 lg:mx-14 gap-10 py-10 items-center ">
      {/* left */}
      <div className="md:w-1/2">
        <h1 className="text-[28px] lg:text-[42px] font-semibold md:w-11/12 leading-tight dark:text-white">
        Terra Whale Investment Group links startup founders to investors.
        </h1>
        <h2 className="text-[22px] lg:text-[38px] font-semibold md:w-11/12 leading-tight text-[#4169E1]">
          Empowering Entrepreneurs, Transforming Markets.
        </h2>

        <p className="text-neutral-500 dark:text-neutral-300 mt-5 md:w-11/12">
            Terra Whale Investment Group empowers startup entrepreneurs to pitch to investors for funding and partnerships.
        </p>

        <div className="flex flex-col md:flex-row md:items-center md:gap-5 lg:gap-5 mt-5">
          <Link
            to="/who-we-are"
            className=" py-3 border border-black dark:border-white px-10 md:px-5 lg:px-10 rounded-full flex items-center gap-5 hover:border font-semibold dark:hover:bg-white dark:hover:text-black justify-center bg-black dark:bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-100 dark:bg-opacity-10 text-white hover:bg-white hover:text-black"
          >
            Learn More <FaArrowRightLong />
          </Link>

          <Link
            to="/news"
            className=" py-3 border border-black dark:border-white px-10 md:px-5 lg:px-10 rounded-full md:mt-0 mt-2 flex items-center gap-5 hover:border font-semibold dark:hover:bg-white dark:hover:text-black justify-center text-black hover:bg-black dark:bg-white bg-clip-padding dark:text-white backdrop-filter backdrop-blur-sm bg-opacity-100 dark:bg-opacity-10 hover:text-white"
          >
            Our Blogs
          </Link>
          <div className='md:hidden block'>
        <a
        href="https://apps.apple.com/pk/app/terra-whales/id6514327309"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-w-full mt-2 items-center gap-2 px-3 py-2 text-xs text-white bg-black dark:bg-white dark:text-black rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform active:shadow-sm active:translate-y-0"
      >
        Download our app on apple store
        <MdArrowOutward />
      </a>
    </div>
        </div>

        <div className='hidden md:hidden lg:block  mt-10 md:mt-14'>
              
              <p className='text-black mb-3 flex justify-start items-center dark:text-white font-semibold md:text-sm '>Trusted by clients of our investors, including renowned companies like <FaArrowRightLong className="inline ml-2 animate-bounceRight text-blue-500" /></p>
                           <Marquee className="gap-4">
                              <img src='/company1.jpg' className='h-14 object-cover object-center mr-2'></img>
                              <img src='/company2.jpg' className='h-14 object-cover object-center mr-2'></img>  
                              <img src='/company3.jpg' className='h-14 object-cover object-center mr-2'></img>
                              <img src='/company4.png' className='h-14 object-cover object-center mr-2'></img>
                              <img src='/company5.png' className='h-14 object-cover object-center mr-2'></img>
                              <img src='/company6.png' className='h-14 object-cover object-center mr-2'></img>
                              <img src='/company7.png' className='h-14 object-cover object-center mr-2'></img>
   
                           </Marquee>
   
                
                   </div>
        <div className="hidden md:grid lg:hidden items-center justify-between mt-7 md:mt-10 px-1">
             
        <p className='text-black mb-3 flex justify-start items-center dark:text-white font-semibold md:text-sm '>Trusted by clients of our investors, including renowned companies like <FaArrowRightLong className="inline ml-2 animate-bounceRight text-blue-500" /></p>
          <div className="flex gap-3 text-lg text-neutral-500 dark:text-neutral-400 w-[70%]">
          <Marquee className="gap-4">
                              <img src='/company1.jpg' className='h-14 object-cover object-center mr-2'></img>
                              <img src='/company2.jpg' className='h-14 object-cover object-center mr-2'></img>  
                              <img src='/company3.jpg' className='h-14 object-cover object-center mr-2'></img>
                              <img src='/company4.png' className='h-14 object-cover object-center mr-2'></img>
                              <img src='/company5.png' className='h-14 object-cover object-center mr-2'></img>
                              <img src='/company6.png' className='h-14 object-cover object-center mr-2'></img>
                              <img src='/company7.png' className='h-14 object-cover object-center mr-2'></img>
   
                           </Marquee>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="md:w-1/2 md:h-[450px] lg:px-8 mt-10 lg:mt-0 md:pt-5 pt-0">
   <div className='hidden md:flex justify-end md:mb-5'>
        <a
        href="https://apps.apple.com/pk/app/terra-whales/id6514327309"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-3 py-2 text-xs text-white bg-black dark:bg-white dark:text-black rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform active:shadow-sm active:translate-y-0"
      >
        Download our app on apple store
        <MdArrowOutward />
      </a>
    </div>
     

        <div className="h-[160px] md:h-[200px] lg:h-[250px] flex gap-3 lg:gap-5 mb-3 lg:mb-4">
          <div className="relative w-[50%] lg:w-[55%]">
            <img
              className=" w-full rounded-tl-full rounded-tr-[100%] rounded-br-[300%] rounded-bl-[100%] h-full"
              src="/banner1.png"
              alt=""
            />
            <div className="p-4 md:p-8 bg-black dark:bg-white rounded-full absolute top-[-5px] md:top-[-20px] right-14 md:right-10 shadow-2xl">
              <FaChartLine className="text-[#4169E1] text-2xl md:text-3xl" />
            </div>
          </div>

          <div className="bg-neutral-200 w-[50%] lg:w-[45%] rounded-xl md:rounded-3xl px-3 lg:px-6 py-3 lg:py-7">
            <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold md:font-semibold mb-1 md:mb-3">
            <div className="flex items-center">
  <AnimatedNumbers
    includeComma
    className="flex justify-start items-center"
    transitions={(index) => ({
      type: "spring",
      duration: index + 0.3,
    })}
    animateToNumber="230"
  
  />
<span className="ml-1 text-4xl">+</span>
</div>
            </h1>
            <p className="text-neutral-600 text-sm md:text-base">
              Some big companies that we work with, and trust us very much
            </p>
            <div
              className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700 mt-3 md:mt-5"
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="flex flex-col justify-center rounded-full overflow-hidden bg-[#4169E1] text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-[#4169E1] w-[65%] "></div>
            </div>
          </div>
        </div>
        <div className="bg-[#1A1A1A] dark:bg-[#1A1A1A] h-[140px] overflow-hidden lg:h-[200px] rounded-3xl">
          <img
            src="/banner2.png"
            className=" object-cover object-center mx-auto w-full bg-black dark:bg-white lg:h-[200px] h-[140px]  rounded-3xl"
          ></img>
        </div>
      </div>

      <div className=' md:hidden items-center justify-between mt-7 md:mt-10 px-1'>
            <p className='text-black dark:text-white font-semibold text-sm mb-3'>
  Trusted by clients of our investors, including renowned companies like <FaArrowRightLong className="inline ml-1 animate-bounceRight text-blue-500" />
</p>
                <div className='flex gap-3 text-lg text-neutral-500 w-[full]'>
                    <Marquee  className="gap-4">
                    <img src='/company1.jpg' className='h-14 object-cover object-center mr-2'></img>
                           <img src='/company2.jpg' className='h-14 object-cover object-center mr-2'></img>  
                           <img src='/company3.jpg' className='h-14 object-cover object-center mr-2'></img>
                           <img src='/company4.png' className='h-14 object-cover object-center mr-2'></img>
                           <img src='/company5.png' className='h-14 object-cover object-center mr-2'></img>
                           <img src='/company6.png' className='h-14 object-cover object-center mr-2'></img>
                           <img src='/company7.png' className='h-14 object-cover object-center mr-2'></img>
                    </Marquee>
                </div>
                
            </div>


    </div>
  );
};

export default Banner;
