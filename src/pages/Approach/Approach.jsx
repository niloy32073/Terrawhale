import { FaArrowRightLong } from "react-icons/fa6";
import ScrollToTop from "../../hooks/ScrollToTop";
import { Link } from "react-router-dom";

const Approach = () => {
  return (
    <ScrollToTop>
      <div className="mx-5 lg:mx-14">
        <div className="relative z-10">
          <div className="absolute hidden inset-x-0 top-1/2 -z-10  -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
            <svg
              className="h-[60rem] w-[100rem] flex-none stroke-blue-600 opacity-20"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                  width="200"
                  height="200"
                  x="50%"
                  y="50%"
                  patternUnits="userSpaceOnUse"
                  patternTransform="translate(-100 0)"
                >
                  <path d="M.5 200V.5H200" fill="none"></path>
                </pattern>
              </defs>
              <svg x="50%" y="50%" className="overflow-visible fill-blue-500">
                <path
                  d="M-300 0h201v201h-201Z M300 200h201v201h-201Z"
                  strokeWidth="0"
                ></path>
              </svg>
              <rect
                width="100%"
                height="100%"
                strokeWidth="0"
                fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
              ></rect>
            </svg>
          </div>
        </div>

        {/* Our Approach */}

        <div className="md:flex items-center gap-14 mt-14">
          <div className="md:w-1/2 mb-4 md:mb-0" data-aos="fade-right">
            <h1 className="text-5xl font-semibold mb-5 dark:text-white">
              Our Approach
            </h1>
            <p className="text-neutral-600 text-lg dark:text-neutral-300 w-11/12">
            At Terra Whales, we connect groundbreaking products with the resources they need to excel. Our comprehensive approach—investment expertise, manufacturing excellence, extensive distribution channels, and dynamic marketing strategies—ensures brands are not only funded but also thrive on a grand scale. By linking our partners with investors and aligning growth with influencers, celebrities, and key marketing networks, we transform promising ventures into market leaders. Our methodology guarantees products reach retail giants and expand rapidly with enhanced visibility and impact.
            </p>
          </div>

          <div className="md:w-1/2" data-aos="fade-left">
            <img
              className="md:w-11/12 rounded-tl-[80px]"
              src="https://img.freepik.com/free-photo/business-executives-discussing-with-their-colleagues-whiteboa_1170-1837.jpg?w=740&t=st=1707153768~exp=1707154368~hmac=2124ac0c719ed04665d0a3cac6906476f843b8341165313be539ee076ce4a73f"
              alt=""
            />
          </div>
        </div>

        {/* investments */}
        <div className="my-14">
          <div className="w-full" data-aos="fade-right">
            <h1 className="text-4xl font-semibold mb-5 dark:text-white">
              Secondary Investments
            </h1>
            <p className="text-neutral-600 text-lg dark:text-neutral-300 w-11/12">
            In the sphere of secondary investments, Terra Whale Investment Group sets a new benchmark. Leveraging strategic alliances and a robust support network, we offer more than capital—providing profound industry insights, growth strategies, and essential connections for sustainable success. Our model elevates established businesses, supplying the tools and relationships needed to expand market share and profitability in competitive arenas.
            </p>
          </div>

          <div className="lg:flex mt-10 gap-5">
            <div className="lg:w-1/2 text-lg mb-5" data-aos="fade-right">
              <h2 className="text-2xl font-semibold dark:text-white mb-5">
              Expanding Reach and Market Presence
              </h2>

              <p className="text-neutral-600 dark:text-neutral-300">
              Success at Terra Whales transcends financial growth; it’s about cultivating brand visibility and influence. We amplify our partners’ reach by aligning products with celebrities, influencers, and impactful marketing initiatives. Through a powerful blend of strategic media campaigns and direct retail placement, we connect products with customers nationwide, transforming brands into household names positioned for sustained marketplace success
              </p>

          
            </div>

            <div data-aos="fade-left">
              <h2 className="text-2xl font-semibold dark:text-white mb-5">
                Related Articles
              </h2>

              <div>
                <div className="flex gap-x-3">
                  <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
                    <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                      <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
                    </div>
                  </div>

                  <Link 
                    to="/news" 
                    className="grow pt-0.5 pb-8 cursor-pointer hover:underline hover:text-blue-500 transition-all duration-300"
                  >
                    <h3 className="flex justify-start items-center gap-x-1.5 text-xl font-semibold text-gray-800 dark:text-white">
                    23.09.23 <FaArrowRightLong className="inline ml-2 animate-bounceRight text-blue-500" />
                    </h3>
                    <p className="mt-1 text-lg text-gray-500 dark:text-gray-400 md:w-8/12">
                      Terra Whale app is now available on the Apple App Store
                    </p>
                  </Link>

                </div>

                <div className="flex gap-x-3">
                  <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
                    <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                      <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
                    </div>
                  </div>

                  <div className="grow pt-0.5 pb-8">
                  <Link 
                    to="/news" 
                    className="grow pt-0.5 pb-8 cursor-pointer hover:underline hover:text-blue-500 transition-all duration-300"
                  >
                    <h3 className="flex justify-start items-center gap-x-1.5 text-xl font-semibold text-gray-800 dark:text-white">
                    7.5.22 <FaArrowRightLong className="inline ml-2 animate-bounceRight text-blue-500" />
                    </h3>
                    <p className="mt-1 text-lg text-gray-500 dark:text-gray-400 md:w-8/12">
                    How Big Is the Secondary Market for Venture Capital? An
                    Updated View to a $130B Market
                    </p>
                  </Link>
                    
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* explore */}
        <Link to="/team">
          {" "}
          <div className="group relative cursor-pointer overflow-hidden bg-white dark:bg-[#121212] dark:border-gray-600 border-[#4169E1] border text-white  my-20 md:11/12 lg:w-9/12 mx-auto py-20 md:py-24 transition-all duration-300 rounded-tl-[50px] md:rounded-tl-[100px] lg:rounded-tl-[145px] rounded-br-[50px] md:rounded-br-[100px] lg:rounded-br-[145px] lg:px-40">
            <div className="text-container w-full">
              <h1 className="text-[26px] md:text-[35px] lg:text-[50px] lg:mt-0 md:mt-4 mt-4 font-semibold text-center flex items-center justify-center gap-3 text-[#4169E1] group-hover:text-[#fff] md:gap-7">
                Explore Our Team{" "}
                <FaArrowRightLong className="pt-3 text-[26px] md:text-[30px] md:mt-0 -mt-2 lg:text-[50px] group-hover:text-[#fff] group-hover:ml-2" />
              </h1>
            </div>
            <span className="absolute md:text-md text-sm top-2 left-[16%] lg:left-[29%] px-4 z-0 h-6 w-30 rounded-full bg-[#4169E1] transition-all duration-300 group-hover:text-[#668bfd] group-hover:scale-[50] mt-5">
              up Next
            </span>
            <div className="flex flex-col z-[20] justify-center px-4 md:w-11/12 lg:w-full mx-auto text-black"></div>
          </div>
        </Link>
      </div>
    </ScrollToTop>
  );
};

export default Approach;
