import React, { useEffect } from 'react';
import Aos from "aos"
import "aos/dist/aos.css";
import photo from '../../assets/OurDoctors/1.jpg'
const BannerSection = () => {
  useEffect(function () {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <>

      <div className=" relative overflow-hidden lg:py-20 md:py-6 py-8">
        <div className="relative z-10">
          <div
            className="absolute hidden  inset-x-0 top-1/2 -z-10  -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
            <svg className=" flex-none stroke-blue-600 opacity-20" aria-hidden="true">
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


        <div className='md:flex items-center gap-14 mt-5 mx-14'>
          <div className='md:w-1/2 mb-4 md:mb-0' data-aos="fade-right">
            <h1 className='text-5xl font-semibold mb-5 dark:text-white'>Who We Are</h1>
            <p className='text-neutral-700 text-sm dark:text-neutral-300 '>We bridge the chasm between aspiring startup entrepreneurs and the capital they need to flourish. Serving as a vital liaison, we connect visionary founders with compatible investors, fostering partnerships that lead to lasting success. Through strategic introductions and bespoke guidance, we transform innovative startups into thriving enterprises by seamlessly uniting talent and resources, maximizing growth and impact along the way.</p>
            <p className='text-neutral-700 text-sm my-3 dark:text-neutral-300 '>We bridge the chasm between aspiring startup entrepreneurs and the capital they need to flourish. Serving as a vital liaison, we connect visionary founders with compatible investors, fostering partnerships that lead to lasting success. Through strategic introductions and bespoke guidance, we transform innovative startups into thriving enterprises by seamlessly uniting talent and resources, maximizing growth and impact along the way.</p>
            <p className='text-neutral-700 text-sm dark:text-neutral-300 '>We bridge the chasm between aspiring startup entrepreneurs and the capital they need to flourish. Serving as a vital liaison, we connect visionary founders with compatible investors, fostering partnerships that lead to lasting success. Through strategic introductions and bespoke guidance, we transform innovative startups into thriving enterprises by seamlessly uniting talent and resources, maximizing growth and impact along the way.</p>
          </div>

          <div className='md:w-1/2' data-aos="fade-left">
            <img className='md:w-11/12 rounded-tl-[80px]' src={photo} alt="" />
          </div>
        </div>

      </div>

    </>
  );
}

export default BannerSection;
