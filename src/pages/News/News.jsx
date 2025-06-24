import  { useEffect, useState } from 'react';
import photo from '../../assets/OurDoctors/1.jpg'
import { FaArrowRightLong } from 'react-icons/fa6';
import Aos from "aos"
import "aos/dist/aos.css";
import ScrollToTop from '../../hooks/ScrollToTop';
import { Link } from 'react-router-dom';
import { readAllBlog } from '../../services/index/blog';
import { readAllFacilities } from '../../services/index/schoolFacilities';


const MAX_DESCRIPTION_LENGTH = 100;
const News = () => {
  const [showDiv, setShowDiv] = useState(1);
  const [blog, setBlog] = useState([]);
  const [news, setNews] = useState([]);
  const handleToggle1 = () => {
    setShowDiv(1);
  };
  const handleToggle2 = () => {
    setShowDiv(2);
  };
  
  useEffect(function () {
    Aos.init({ duration: 500 });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await readAllBlog();
        //console.log(data)
        setBlog(data.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);

  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    event.preventDefault();
    setShowFullDescription(!showFullDescription);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await readAllFacilities();
        //console.log(data)
        setNews(data.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);
  return (
    <ScrollToTop>
      <div>
        <div className='flex md:flex-row flex-col justify-center items-center gap-2 lg:mx-16 md:mx-10 mx-4 my-4'>
          <div data-aos="fade-right" className="bg-white md:w-[50%] w-full border rounded-xl shadow-sm sm:flex dark:bg-[#121212] dark:border-[#202020] dark:shadow-gray-900/[.7]">
            <div className="flex-shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-[15rem] md:rounded-se-none md:max-w-xs">
              <img className="w-full h-full absolute top-0 start-0 object-cover" src={photo} alt="Image Description" />
            </div>
            <div className="flex flex-wrap">
              <div className="p-4 flex flex-col h-full sm:p-7 ">
                <h3 data-aos="fade-up" className="text-lg font-bold text-gray-800 dark:text-white">
                  News
                </h3>
                <p data-aos="fade-up" className="mt-1 text-gray-500 dark:text-gray-400">
                  Stay up to date with the latest from Industry Ventures.
                </p>

                <div data-aos="fade-up" className="mt-5 sm:mt-auto">
                  <p data-aos="fade-up" className="text-xs text-gray-500 dark:text-gray-500">
                    Last updated 5 mins ago
                  </p>
                  <button onClick={handleToggle1} className={`${showDiv === 1?"dark:hover:bg-white text-white bg-black":"dark:hover:bg-black text-black bg-white"}   py-2 my-2 border border-black dark:border-white px-10 rounded-full flex items-center gap-5 hover:border font-semibold dark:hover:bg-white dark:hover:text-black`}>All News  <FaArrowRightLong /></button>
                </div>
              </div>
            </div>
          </div>



          <div data-aos="fade-left" className="bg-white md:w-[50%] w-full border rounded-xl shadow-sm sm:flex dark:bg-[#121212] dark:border-[#202020] dark:shadow-gray-900/[.7]">
            <div className="flex flex-wrap">
              <div className="p-4 flex flex-col h-full sm:p-7 ">
                <h3 data-aos="fade-up" className="text-lg font-bold text-gray-800 dark:text-white">
                  Insight
                </h3>
                <p data-aos="fade-up" className="mt-1 text-gray-500 dark:text-gray-400">
                  Stay up to date with the latest from Industry Ventures.
                </p>

                <div data-aos="fade-up" className="mt-5 sm:mt-auto">
                  <p data-aos="fade-up" className="text-xs text-gray-500 dark:text-gray-500">
                    Last updated 5 mins ago
                  </p>
                  <button onClick={handleToggle2} className={`${showDiv === 2?"dark:hover:bg-white text-white bg-black":"dark:hover:bg-black text-black bg-white"}   py-2 my-2 border border-black dark:border-white px-10 rounded-full flex items-center gap-5 hover:border font-semibold dark:hover:bg-white dark:hover:text-black`}>All Insight  <FaArrowRightLong /></button>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 hidden md:block relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-[15rem] md:rounded-se-none md:max-w-xs">
              <img className="w-full h-full absolute top-0 start-0 object-cover" src={photo} alt="Image Description" />
            </div>

          </div>

        </div>
        {/* collaps */}
         {showDiv === 1 && (      
          <div data-aos="fade-right"  className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
              <h2 data-aos="fade-right"  className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white ">The News</h2>
              <p data-aos="fade-right" className="mt-1 text-gray-600 dark:text-gray-400">See how game-changing companies are making the most of every engagement with Terra whale.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {news && news?.map((i, index) => ( 
            <div key={i.id} className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              <div className="aspect-w-16 aspect-h-11">
                <img className="w-full object-cover rounded-xl" src={i.image} alt="Image Description" />
              </div>
              <div className="my-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                  {i.title}
                </h3>
                <p className="mt-5 text-gray-600 dark:text-gray-400">
                    {showFullDescription || i.description.length <= MAX_DESCRIPTION_LENGTH
                      ? i.description
                      : `${i.description.substring(0, MAX_DESCRIPTION_LENGTH)}...`}
                  </p>
                  {i.description.length > MAX_DESCRIPTION_LENGTH && (
                    <button onClick={toggleDescription} className="text-blue-500 cursor-pointer">
                      {showFullDescription ? 'Read Less' : 'Read More'}
                    </button>
                  )}
              </div>
            
            </div>
          ))}
              
         
            </div>
      

          </div>
          )}
        
          {showDiv === 2 && (        
            <div data-aos="fade-left"  className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 data-aos="fade-left"  className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white ">The Insight</h2>
            <p data-aos="fade-left" className="mt-1 text-gray-600 dark:text-gray-400">See how game-changing companies are making the most of every engagement with Terra whale.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {blog && blog?.map((i, index) => ( 
            <div key={i.id} className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              <div className="aspect-w-16 aspect-h-11">
                <img className="w-full object-cover rounded-xl" src={i.image} alt="Image Description" />
              </div>
              <div className="my-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                  {i.title}
                </h3>
                <p className="mt-5 text-gray-600 dark:text-gray-400">
                    {showFullDescription || i.description.length <= MAX_DESCRIPTION_LENGTH
                      ? i.description
                      : `${i.description.substring(0, MAX_DESCRIPTION_LENGTH)}...`}
                  </p>
                  {i.description.length > MAX_DESCRIPTION_LENGTH && (
                    <button onClick={toggleDescription} className="text-blue-500 cursor-pointer">
                      {showFullDescription ? 'Read Less' : 'Read More'}
                    </button>
                  )}
              </div>
            
            </div>
          ))}
            
          
        

          </div>
          </div>
          )}

        {/* explore */}
       
       <Link to="/get-in-touch">  <div className='group relative cursor-pointer overflow-hidden bg-white dark:bg-[#121212] dark:border-gray-600 border-[#4169E1] border text-white  my-20 md:11/12 lg:w-9/12 mx-auto py-20 md:py-24 transition-all duration-300 rounded-tl-[50px] md:rounded-tl-[100px] lg:rounded-tl-[145px] rounded-br-[50px] md:rounded-br-[100px] lg:rounded-br-[145px] lg:px-40'>
          <div className='text-container w-full'>
            <h1 className='text-[26px] md:text-[35px] lg:text-[50px] lg:mt-0 md:mt-4 mt-4 font-semibold text-center flex items-center justify-center gap-3 text-[#4169E1] group-hover:text-[#fff] md:gap-7'>Contact Us <FaArrowRightLong className='pt-3 text-[26px] md:text-[30px] md:mt-0 -mt-2 lg:text-[50px] group-hover:text-[#fff] group-hover:ml-2' /></h1>
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

export default News;