import { TreeDeciduous, TreePine, Trees } from "lucide-react";
import Aos from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react";

const Tree = () => {
    useEffect(function () {
        Aos.init({ duration: 500 });
    }, []);
    return (
        <div className="mx-auto max-w-lg lg:mt-24 ">
            <div className="">
                <details className="group" open>
                    <summary
                        className="flex cursor-pointer list-none items-center justify-center py-4 text-lg font-medium group-open:text-primary-500">
                        <div data-aos="fade-right" className="w-[90%] bg-[#4169E1] h-[1px]"></div>
                        <div>
                            <div data-aos="fade-up" className=" flex justify-center items-center p-5 border-[2px] border-[#4169E1] hover:bg-[#4169E1]  rounded-full text-[#4169E1] hover:text-white dark:text-[#4169E1] dark:hover:text-white">
                                <TreeDeciduous className="" />
                            </div>

                        </div>
                    </summary>
                    <div className="pb-4 text-black dark:text-white">At our company, we’re committed to not only optimizing manufacturing costs but also ensuring seamless distribution through our extensive network. By leveraging innovative techniques and strategic partnerships, we keep costs low without compromising quality. Plus, with access to over 50 major retail stores, including Walmart, Target, and Lowe’s, we ensure that our products are always within reach for our customers. </div>
                </details>

                <details className="group">
                    <summary
                        className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                        <div data-aos="fade-up" className=" flex justify-center items-center p-5 border-[2px] border-[#4169E1] hover:bg-[#4169E1]  rounded-full text-[#4169E1] hover:text-white dark:text-[#4169E1] dark:hover:text-white">
                            <TreePine className="" />
                        </div>
                        <div data-aos="fade-left" className="w-[90%] bg-[#4169E1] h-[1px]"></div>
                        <div>


                        </div>
                    </summary>
                    <div className="pb-4 text-black dark:text-white">Our mission is to forge smart, scalable partnerships that provide businesses with funding, manufacturing expertise, and distribution support—creating a strong foundation for sustainable growth..</div>
                </details>

                <details className="group">
                    <summary
                        className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                        <div data-aos="fade-right" className="w-[90%] bg-[#4169E1] h-[1px]"></div>
                        <div>
                            <div data-aos="fade-up" className=" flex justify-center items-center p-5 border-[2px] border-[#4169E1] hover:bg-[#4169E1]  rounded-full text-[#4169E1] hover:text-white dark:text-[#4169E1] dark:hover:text-white">
                                <Trees className="" />
                            </div>

                        </div>
                    </summary>
                    <div className="pb-4 text-black dark:text-white">By aligning operational efficiency with investment and national retail placement, we cultivate an ecosystem where businesses don’t just compete—they lead. </div>
                </details>


            </div>
        </div>
    );
}

export default Tree;
