
import Marquee from "react-fast-marquee";
import walmart from "../../assets/Walmart_logo.svg.png"
import target from "../../assets/target.jpg"
import BestBuy from "../../assets/Best-Buy-logo-2.png"
import qvc from "../../assets/qvc_logo.png"
const InvestorCompany = () => {
  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

        <div className="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6 md:mb-12">
          <h2 className="text-xl font-semibold md:text-2xl md:leading-tight text-gray-800 dark:text-gray-200">Partnered with Visionary Investors and Beyond </h2>
        </div>
        <Marquee onCycleComplete={null} className="">
          <div className="p-4 md:p-7 bg-gray-200 rounded-lg dark:bg-slate-800 mr-6">
            <img src={walmart} className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-800 dark:text-gray-200" alt="walmart"></img>
          </div>
          <div className="p-4 md:p-7 bg-gray-200 rounded-lg dark:bg-slate-800 mr-6">
            <img src={target} className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-800 dark:text-gray-200" alt="target"></img>
          </div>
          <div className="p-4 md:p-7 bg-gray-200 rounded-lg dark:bg-slate-800 mr-6">
            <img src={BestBuy} className="py-1 lg:py-1 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-800 dark:text-gray-200" alt="BestBuy"></img>
          </div>
          <div className="p-4 md:p-7 bg-gray-200 rounded-lg dark:bg-slate-800 mr-6">
            <img src={qvc} className="py-2 lg:py-3 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-800 dark:text-gray-200" alt="qvc"></img>
          </div>
         
        </Marquee>



      </div>
    </>
  );
}

export default InvestorCompany;
