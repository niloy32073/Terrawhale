import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import AnimatedNumbers from "react-animated-numbers";
import { FaArrowRightLong } from "react-icons/fa6";
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';


const HomeSection = () => {

  return (
    <div>

      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center lg:justify-between">
          <div className="lg:col-span-5 lg:col-start-1">
            <div className="mb-8">
              <h2 className="mb-2 text-3xl text-gray-800 font-bold lg:text-4xl dark:text-gray-200">
                Speed defines us at Terra Whale Group.
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Our primary emphasis is on delivering prompt responses, ensuring swift and efficient interactions for our clients.
              </p>
            </div>
          
            <h2 className='text-[#3f5694] text-lg'>The review section is ongoing.</h2>

          </div>


          <div className="mt-10 lg:mt-0 lg:col-span-6 lg:col-end-13">
            <div className="space-y-6 sm:space-y-8">

              <ul className="grid grid-cols-2 divide-y divide-y-2 divide-x divide-x-2 divide-gray-200 overflow-hidden dark:divide-gray-700">
                <li className="flex flex-col -m-0.5 p-4 sm:p-8">
                  <div className="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2 dark:text-gray-200">
                  <div className="flex items-center">
                      <AnimatedNumbers
                        includeComma
                        className="flex justify-start items-center"
                        transitions={(index) => ({
                          type: "spring",
                          duration: index + 0.3,
                        })}
                        animateToNumber="100"
                       
                      />
                    <span className="ml-1 text-4xl">+</span>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Facilitated over 100 successful deals.
                  </p>
                </li>

                <li className="flex flex-col -m-0.5 p-4 sm:p-8">
                  <div className="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2 dark:text-gray-200">
                    <svg className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></svg>
                    <div className="flex items-center">
                      <AnimatedNumbers
                        includeComma
                        className="flex justify-start items-center"
                        transitions={(index) => ({
                          type: "spring",
                          duration: index + 0.3,
                        })}
                        animateToNumber="50"
                       
                      />
                    <span className="ml-1 text-4xl">%</span>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Achieve sales growth exceeding 50%.
                  </p>
                </li>

                <li className="flex flex-col -m-0.5 p-4 sm:p-8">
                  <div className="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2 dark:text-gray-200">
                    <svg className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></svg>
                    <div className="flex items-center">
                      <AnimatedNumbers
                        includeComma
                        className="flex justify-start items-center"
                        transitions={(index) => ({
                          type: "spring",
                          duration: index + 0.3,
                        })}
                        animateToNumber="20"
                        
                      />
                    <span className="ml-1 text-4xl">%</span>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Boost profits by 20% or more.
                  </p>
                </li>

                <li className="flex flex-col -m-0.5 p-4 sm:p-8">
                  <div className="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2 dark:text-gray-200">
                  <AnimatedNumbers
                        includeComma
                        className="flex justify-start items-center"
                        transitions={(index) => ({
                          type: "spring",
                          duration: index + 0.3,
                        })}
                        animateToNumber="5"

                      />
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Experience growth rates up to 5 times faster
                  </p>
                </li>
              </ul>

            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default HomeSection;
