import { useState } from "react";
import Title from "../components/Title";
import LinkButton from "../components/LinkButton";
import { ourDoctorsInfo } from "./OurInfo";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import './weAre.css'
const Section = () => {
  const [selectedDoctorIndex, setSelectedDoctorIndex] = useState(0);
  const selectedDoctor = ourDoctorsInfo[selectedDoctorIndex];

  const handleNextSlide = () => {
    setSelectedDoctorIndex((prevIndex) =>
      prevIndex === ourDoctorsInfo.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleLowerSliderButton = (id) => {
    setSelectedDoctorIndex(id);
  };
  return (
    <div className="lg:w-10/12 w-11/12 mx-auto mt-10 mb-20 ">
      <div className="space-y-4 hidden mb-5 secondDetails ">
        <p data-aos="fade-up" className="font-bold text-lg  dark:text-white">Our Rules</p>
        <Title data-aos="fade-up" design="text-4xl " title="Sample Text" />
        <p className="text-gray dark:text-white">Entrepreneurs pitch Terra Whale Investment Group for startup funding or expansion capital. </p>
      </div>
      <div data-aos="fade-right" className="flex md:flex-row flex-col-reverse lg:gap-3 xl:gap-0 gap-4 md:justify-between justify-center items-center ourDocContainer">
        <div className="space-y-5">
          <div className="space-y-8 sm:block hidden doctorsHeader">
            <p className="font-bold md:text-xl text-lg dark:text-white">Our Mission</p>
            <Title design="text-4xl" title="Whale Investments: Fund" />
            <p className="text-gray w-80 lg:w-96  dark:text-gray-200 ">Entrepreneurs pitch Terra Whale Investment Group for startup funding or expansion capital. </p>
          </div>
          <motion.div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${selectedDoctor.bg})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className={`${selectedDoctor.imgClass} text-white text-sm bg border-2  h-64 w-72 sm:h-52 md:w-72 md:h-52 lg:w-96 lg:h-64 rounded-s-3xl rounded-br-3xl p-5 xl:p-10 space-y-5 doctorCard`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="lg:text-sm">{selectedDoctor.department}</p>
            <p className="text-xl lg:text-3xl font-bold leading-relaxed">
              {selectedDoctor.name}
            </p>
            <p>
              <Link>Read More</Link>
            </p>
          </motion.div>
          <div>
            <LinkButton
              title="View All Rules"
            />
          </div>
          <div className="gap-2 justify-center items-center mt-5  hidden secondBtn">
            {ourDoctorsInfo?.map((doctor) => (
              <button
                key={doctor.id}
                onClick={() => handleLowerSliderButton(doctor.id)}
                className={`${selectedDoctor.id === doctor.id ? "bg-green" : ""
                  } w-5 h-5 border-4 border-green rounded-full`}
              ></button>
            ))}
          </div>
        </div>

        <div data-aos="fade-left" className="">
          <section className="relative">
            <div
              key={selectedDoctor.id}
              className="border-[16px] border-brown sm:w-[19rem] sm:h-[19rem] md:w-[21rem] md:h-[22rem] lg:w-[24rem] lg:h-[24rem] xl:w-[40rem] xl:h-[30rem] rounded-xl sm:rounded-s-full overflow-hidden mx-auto doctorImage"
            >
              <motion.img
                key={selectedDoctor?.img}
                src={selectedDoctor?.img}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: .5 }}
                className={`${selectedDoctor.imgClass} w-full h-full object-cover object-top `}
              ></motion.img>
            </div>

            <button
              onClick={handleNextSlide}
              className="bg-slate-300 rounded-full w-10 h-10 text-white font-bold text-2xl absolute top-52 left-10 imgBtn"
            >
              ❯
            </button>
            <div className="flex gap-2 md:gap-5 justify-end items-center mt-5 firstBtn">
              {ourDoctorsInfo?.map((doctor) => (
                <button
                  key={doctor.id}
                  onClick={() => handleLowerSliderButton(doctor.id)}
                  className={`${selectedDoctor.id === doctor.id ? "bg-slate-300" : ""
                    } w-5 h-5 border-4 border-green rounded-full`}
                ></button>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Section;

