
import { FaArrowRightLong } from 'react-icons/fa6';
import ScrollToTop from '../../hooks/ScrollToTop';
import { Link } from 'react-router-dom';



const Investment = () => {
    return (
        <ScrollToTop>
            <div className='mx-5 lg:mx-14'>
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

                {/* Our Approach */}

                <div className='md:flex items-center gap-14 mt-14'>
                    <div className='md:w-1/2 mb-4 md:mb-0' data-aos="fade-right">
                        <h1 className='text-[42px] font-semibold text-center mb-4 md:-mt-6 -mt-0 dark:text-white'>Investments</h1>

                        <h3 className='font-semibold text-2xl mb-2 text-neutral-600 dark:text-neutral-300'>Direct Investments</h3>
                        <p className='text-neutral-600 text-lg dark:text-neutral-300 w-11/12'>Our direct investments go beyond capital—we act as growth catalysts by integrating manufacturing cost optimization, strategic funding, and retail placement. Through strong partnerships with retail giants like Walmart, Target, and Best Buy, and media platforms such as QVC, we ensure products gain prime market exposure. Collaborating with Terra Whale means accessing a powerful ecosystem that accelerates your brand’s journey from production to nationwide success.</p>
                    </div>

                    <div className='md:w-1/2' data-aos="fade-left">
                        <img className='md:w-11/12 rounded-tl-[80px]' src="https://img.freepik.com/free-photo/revenue-operations-concept_23-2150902427.jpg?w=740&t=st=1707234788~exp=1707235388~hmac=a601bf86e06162c5fc92e0f3e241ebe250e36d9c9534bff97630d31160364996" alt="" />
                    </div>
                </div>


                <div className='md:flex flex-col md:flex-row items-center gap-14 mt-10 md:mt-20 mb-10'>

                    <div className='md:w-1/2 hidden md:grid' data-aos="fade-left">
                        <img className='md:w-11/12 rounded-tr-[80px]' src="https://img.freepik.com/free-photo/revenue-operations-concept_23-2150902406.jpg?w=826&t=st=1707235026~exp=1707235626~hmac=6d45bf5b220b48e094146b76d4118c65cc89643d3fb5f9b0863808acefba20b8" alt="" />
                    </div>

                    <div className='md:w-1/2 mb-4 md:mb-0' data-aos="fade-right">
                        <h1 className='text-[42px] font-semibold  dark:text-white text-center mb-4 md:-mt-6 -mt-0'>Investments</h1>

                        <h3 className='font-semibold text-2xl mb-2 text-neutral-600 dark:text-neutral-300'>Commitment to Funds</h3>
                        <p className='text-neutral-600 text-lg dark:text-neutral-300 w-11/12'>Our commitment extends well beyond financing. We invest in your brand’s entire growth pathway—providing manufacturing expertise, distribution capabilities, and strategic marketing support. Leveraging influential networks and industry leaders, we help position your products for maximum visibility and competitive advantage. Partner with Terra Whale to confidently scale your business with the tools, resources, and guidance needed for sustainable expansion.</p>
                    </div>

                    <div className='md:w-1/2 md:hidden' data-aos="fade-left">
                        <img className='md:w-11/12 rounded-tr-[80px]' src="https://img.freepik.com/free-photo/revenue-operations-concept_23-2150902406.jpg?w=826&t=st=1707235026~exp=1707235626~hmac=6d45bf5b220b48e094146b76d4118c65cc89643d3fb5f9b0863808acefba20b8" alt="" />
                    </div>

                </div>

                {/* explore */}
               <Link to="/news">
                <div className='group relative cursor-pointer overflow-hidden bg-white dark:bg-[#121212] dark:border-gray-600 border-[#4169E1] border text-white  my-20 md:11/12 lg:w-9/12 mx-auto py-20 md:py-24 transition-all duration-300 rounded-tl-[50px] md:rounded-tl-[100px] lg:rounded-tl-[145px] rounded-br-[50px] md:rounded-br-[100px] lg:rounded-br-[145px] lg:px-40'>
                    <div className='text-container w-full'>
                        <h1 className='text-[26px] md:text-[35px] lg:text-[50px] lg:mt-0 md:mt-4 mt-4 font-semibold text-center flex items-center justify-center gap-3 text-[#4169E1] group-hover:text-[#fff] md:gap-7'>Explore All News <FaArrowRightLong className='pt-3 text-[26px] md:text-[30px] md:mt-0 -mt-2 lg:text-[50px] group-hover:text-[#fff] group-hover:ml-2' /></h1>
                    </div>
                    <span className="absolute md:text-md text-sm top-2 left-[16%] lg:left-[29%] px-4 z-0 h-6 w-30 rounded-full bg-[#4169E1] transition-all duration-300 group-hover:text-[#668bfd] group-hover:scale-[50] mt-5">up Next</span>
                    <div className='flex flex-col z-[20] justify-center px-4 md:w-11/12 lg:w-full mx-auto text-black'>
                    </div>
                </div>
                </Link> 


            </div>
        </ScrollToTop>
    );
};

export default Investment;