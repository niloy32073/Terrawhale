
import "./weAre.css"
import BannerSection from './BannerSection';
import Section from './Section';
import MIssion from './MIssion';
import ScrollToTop from '../../hooks/ScrollToTop';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
const WhoWeAre = () => {
    return (
        <ScrollToTop>
            <div>
                <BannerSection></BannerSection>
                <Section></Section>
                <MIssion></MIssion>

                {/* explore */}
               <Link to="/approach"><div className='group relative cursor-pointer overflow-hidden bg-white dark:bg-[#121212] dark:border-gray-600 border-[#4169E1] border text-white  my-20 md:11/12 lg:w-9/12 mx-auto py-20 md:py-24 transition-all duration-300 rounded-tl-[50px] md:rounded-tl-[100px] lg:rounded-tl-[145px] rounded-br-[50px] md:rounded-br-[100px] lg:rounded-br-[145px] lg:px-40'>
                    <div className='text-container w-full'>
                        <h1 className='text-[26px] md:text-[35px] lg:text-[50px] lg:mt-0 md:mt-4 mt-4 font-semibold text-center flex items-center justify-center gap-3 text-[#4169E1] group-hover:text-[#fff] md:gap-7'>Explore Approach  <FaArrowRightLong className='pt-3 text-[26px] md:text-[30px] md:mt-0 -mt-2 lg:text-[50px] group-hover:text-[#fff] group-hover:ml-2' /></h1>
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

export default WhoWeAre;