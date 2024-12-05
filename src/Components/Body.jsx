import React, { createRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import aboutPic from "../assets/img/about/about.png";
import informationTeam from "../Utils/images";
import ourServicesPic from "../assets/img/services/laptop-lamp.png";
import client1Pic from "../assets/img/testimonial/client-1.jpg";
import client2Pic from "../assets/img/testimonial/client-2.jpg";
import client3Pic from "../assets/img/testimonial/client-3.jpg";
import ServiceTab from "./ServiceTab";
import videoHead from "../assets/video/InShot_20241130_193756484.mp4";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function Body() {
  // const [isVisible, setIsVisible] = useState(false);
  // const ref = createRef();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (ref.current) {
  //       const rect = ref.current.getBoundingClientRect();
  //       const top = rect.top;
  //       const height = rect.height;
  //       const viewportHeight = window.innerHeight;

  //       if (top + height >= 0 && top - viewportHeight <= 0) {
  //         setIsVisible(true);
  //       } else {
  //         setIsVisible(false);
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const imageWidth = 270;

  const totalImages = informationTeam.length;
  const sliderRef = createRef(null);

  const [counterState, setCounterState] = useState(false);

  const ref1 = createRef();
  const ref2 = createRef();
  const ref3 = createRef();
  const ref4 = createRef();
  const ref5 = createRef();

  useEffect(() => {
    const handleScroll = () => {
      const checkVisibility = (ref) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const top = rect.top;
          const height = rect.height;
          const viewportHeight = window.innerHeight;

          if (top + height >= 0 && top - viewportHeight <= 0) {
            return true;
          } else {
            return false;
          }
        }
        return false;
      };

      // Update visibility for each element
      setIsVisible1(checkVisibility(ref1));
      setIsVisible2(checkVisibility(ref2));
      setIsVisible3(checkVisibility(ref3));
      setIsVisible4(checkVisibility(ref4));
      setIsVisible5(checkVisibility(ref5));
      // setIsVisible5(checkVisibility(ref5)); // Add for the last section
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleImageNextTeam = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const handleImagePrevTeam = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.offsetWidth,
        behavior: "smooth", // Optional smooth scroll effect
      });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section className="mt-[120px] flex items-center justify-between">
        <motion.div
          ref={ref1}
          initial={{ x: -250 }}
          animate={isVisible1 ? { x: 60, opacity: 1 } : { x: -250, opacity: 0 }}
          transition={{ duration: 1 }}
          className="flex w-[30%] pl-[30px] gap-2 items-center min-h-[150px]"
        >
          <div className="flex flex-col rotate-180">
            <p className="rotate-90 text-[#ffa600]">WHO</p>
            <p className="rotate-90 mt-6 mb-3 text-[#ffa600]">WE</p>
            <p className="rotate-90 text-[#ffa600]">ARE</p>
          </div>
          <div>
            <div className="text-[44px] text-neutral-800">
              A <span className="font-bold">Story</span>
            </div>
            <div className="text-[44px] text-neutral-800">About Us</div>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-4"
          ref={ref1}
          initial={{ x: -250 }}
          animate={isVisible1 ? { x: -50, opacity: 1 } : { x: 350, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="w-[600px] text-[14px] text-neutral-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            aspernatur harum libero et nostrum sequi consequatur, tempore
            accusamus ab esse, voluptatem laudantium voluptas rerum? Laborum id
            ad alias saepe nemo,alias saepe ne consequatur.
          </p>
          <p className="w-[600px] text-[14px] text-neutral-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            asperiores ad culpa similique, ratione dicta. Cumque, officia. Velit
            et inventore hic, unde, eum ea! Vitae dolores culpa molestias, in
            ratione.
          </p>
        </motion.div>
      </section>

      <section className="w-[100%] h-[500px] mt-[80px] flex items-center justify-center">
        <motion.img
          ref={ref3}
          initial={{ y: 200, opacity: 0 }}
          animate={isVisible3 ? { y: 0, opacity: 1 } : { y: 200, opacity: 0 }}
          transition={{ duration: 1 }}
          src={aboutPic}
        />
      </section>

      <section className="w-[100%] overflow-hidden h-[550px] text-neutral-700 bg-neutral-200 mt-[120px] flex justify-evenly items-center p-[30px]">
        <motion.div
          className="w-[350px] h-[400px] shadow-[10px_10px_20px_rgba(8,0,0,0.2)]
         bg-white flex flex-col gap-4 items-center justify-center p-[20px] transition-all
          duration-1000 hover:bg-[#ffa600] group rounded-sm"
          ref={ref4}
          initial={{ x: -450 }}
          animate={isVisible4 ? { x: 15, opacity: 1 } : { x: -450, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-[56px] group-hover:text-[#ffff] transition-all
          duration-1000 group-hover:-translate-y-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
              />
            </svg>
          </span>
          <h2
            className="text-[26px] font-semibold group-hover:text-[#ffff] transition-all
          duration-1000"
          >
            Mission
          </h2>
          <div
            className="w-[50px] h-[3px] rounded bg-[#ffa600] group-hover:bg-[#ffff] transition-all
          duration-1000"
          ></div>
          <p
            className="text-[14px] text-center group-hover:text-[#ffff] transition-all
          duration-1000"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Distinctio, eos asperiores nobis molestias nam. Ex quos dicta as.
          </p>
        </motion.div>
        <motion.div
          className="w-[350px] h-[400px] shadow-[10px_10px_20px_rgba(8,0,0,0.2)]
         bg-white flex flex-col gap-4 items-center justify-center p-[20px] transition-all
          duration-1000 hover:bg-[#ffa600] group rounded-sm"
          ref={ref4}
          initial={{ y: 500, opacity: 0, visibility: "hidden" }}
          animate={
            isVisible4
              ? { y: 0, opacity: 1, visibility: "visible" }
              : { y: 500, opacity: 0, visibility: "hidden" }
          }
          transition={{ duration: 0.8 }}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-[56px] group-hover:text-[#ffff] transition-all
          duration-1000 group-hover:-translate-y-4"
            >
              <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              <path
                fillRule="evenodd"
                d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <h2
            className="text-[24px] font-semibold group-hover:text-[#ffff] transition-all
          duration-1000"
          >
            Vision
          </h2>
          <div
            className="w-[50px] h-[3px] rounded bg-[#ffa600] group-hover:bg-[#ffff] transition-all
          duration-1000"
          ></div>
          <p
            className="text-[14px] text-center group-hover:text-[#ffff] transition-all
          duration-1000"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Distinctio, eos asperiores nobis molestias nam. Ex quos dicta as.
          </p>
        </motion.div>
        <motion.div
          className="w-[350px] h-[400px] shadow-[10px_10px_20px_rgba(8,0,0,0.2)]
         bg-white flex flex-col gap-4 items-center justify-center p-[20px] transition-all
          duration-1000 hover:bg-[#ffa600] group rounded-sm"
          ref={ref4}
          initial={{ x: 450 }}
          animate={isVisible4 ? { x: -20, opacity: 1 } : { x: 450, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-[56px] group-hover:text-[#ffff] transition-all
          duration-1000 group-hover:-translate-y-4"
            >
              <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
            </svg>
          </span>
          <h2
            className="text-[26px] font-semibold group-hover:text-[#ffff] transition-all
          duration-1000"
          >
            Passion
          </h2>
          <div
            className="w-[50px] h-[3px] rounded bg-[#ffa600] group-hover:bg-[#ffff] transition-all
          duration-1000"
          ></div>
          <p
            className="text-[14px] text-center group-hover:text-[#ffff] transition-all
          duration-1000"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Distinctio, eos asperiores nobis molestias nam. Ex quos dicta as.
          </p>
        </motion.div>
      </section>

      <section className="w-[100%] h-[340px] mt-[80px]">
        <div className="flex ">
          <motion.div
            ref={ref5}
            initial={{ x: -250 }}
            animate={
              isVisible5 ? { x: 10, opacity: 1 } : { x: -250, opacity: 0 }
            }
            transition={{ duration: 1 }}
            className="w-[45%] h-[100%] "
          >
            <div
              className="w-[100%] h-[60%] flex 
          pl-[70px] gap-2 items-center min-h-[150px]"
            >
              <div className="flex flex-col rotate-180">
                <p className="rotate-90 text-[#ffa600]">WHO</p>
                <p className="rotate-90 mt-6 mb-3 text-[#ffa600]">WE</p>
                <p className="rotate-90 text-[#ffa600]">ARE</p>
              </div>
              <div>
                <p className="text-[44px] text-neutral-800">Meet Our</p>
                <p className="text-[44px] text-neutral-800">
                  <span className="font-bold">Talented</span> Team
                </p>
              </div>
            </div>
            <div className="w-[100%] h-[40%] pt-[20px] pl-[85px]">
              <p className="text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolore, repellat, eos! Dignissimos expedita totam cum quidem
                autem alias dolorum error a quia optio eligendi, amet animi
                reprehenderit, quaerat.
              </p>
            </div>
          </motion.div>
          <motion.div
            ref={ref5}
            initial={{ x: 450 }}
            animate={
              isVisible5 ? { x: -30, opacity: 1 } : { x: 450, opacity: 0 }
            }
            transition={{ duration: 1 }}
            className="w-[55%] h-[100%] flex items-center justify-evenly flex-col"
          >
            <div className="w-[520px] h-[260px] flex items-center justify-start gap-[20px] overflow-hidden relative">
              {/* {infoTeam} */}
              <div
                className="w-[250px] bg-blue-700 items-center gap-[20px] justify-between"
                style={{
                  display: "flex",
                  transform: `translateX(${-currentIndex * imageWidth}px)`,
                  transition: "transform 0.5s ease-in-out",
                }}
              >
                {informationTeam?.map((e, index) => {
                  return (
                    <div
                      key={index}
                      className="relative min-w-[250px] h-[260px] overflow-hidden"
                    >
                      <img
                        src={e.img}
                        alt={e.name}
                        className="w-[250px] h-[100%] object-cover"
                      />
                      <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-[100%] h-[100%] bg-[#000000a8] opacity-[0] hover:opacity-[1] transition-opacity duration-500 ease-in-out">
                        <p className="text-[#ffa600] font-bold">{e.name}</p>
                        <p className="text-white">{e.job}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex gap-3 mt-3">
              <button
                onClick={handleImagePrevTeam}
                className="py-2 rounded-sm bg-gray-500 text-white active:scale-[0.9]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button
                onClick={handleImageNextTeam}
                className="py-2 rounded-sm bg-gray-500 text-white active:scale-[0.9]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
        <div className="w-[100%] h-[300px] mt-[30px]">
          <div className="w-[100%] h-[50%] flex">
            <div className="h-[100%] w-[50%] flex items-center justify-center flex-col gap-3">
              <h2 className="">Web Design</h2>
              <div
                className="w-[580px] h-[28px] bg-gray-200 rounded-[20px] relative overflow-hidden"
                style={{
                  boxShadow: "0px 0px 15px rgba(0,0,0,0.1)",
                  border: "1px solid #8b8b8b16",
                }}
              >
                <motion.div
                  ref={ref2}
                  className={`absolute left-0 top-0 transition-all duration-1000 ${
                    isVisible2 ? "w-[94%]" : "w-[0%]"
                  } h-[28px] bg-sky-700 `}
                ></motion.div>
              </div>
            </div>
            <div className="h-[100%] w-[50%] flex items-center justify-center flex-col gap-3">
              <h2 className="justify-start">Photoshop/Illustration</h2>
              <div
                className="w-[580px] h-[28px] bg-gray-200 rounded-[20px] relative overflow-hidden"
                style={{
                  boxShadow: "0px 0px 15px rgba(0,0,0,0.1)",
                  border: "1px solid #8b8b8b16",
                }}
              >
                {" "}
                <motion.div
                  ref={ref2}
                  className={`absolute left-0 top-0 transition-all duration-1000 ${
                    isVisible2 ? "w-[64%]" : "w-[0%]"
                  } h-[28px] bg-sky-700 `}
                ></motion.div>
              </div>
            </div>
          </div>
          <div className="w-[100%] h-[50%] flex">
            <div className="h-[100%] w-[50%] flex items-center justify-center flex-col gap-3">
              <h2 className="justify-start">Web Development</h2>
              <div
                className="w-[580px] h-[28px] bg-gray-200 rounded-[20px] relative overflow-hidden"
                style={{
                  boxShadow: "0px 0px 15px rgba(0,0,0,0.1)",
                  border: "1px solid #8b8b8b16",
                }}
              >
                <motion.div
                  ref={ref2}
                  className={`absolute left-0 top-0 transition-all duration-1000 ${
                    isVisible2 ? "w-[77%]" : "w-[0%]"
                  } h-[28px] bg-sky-700 `}
                ></motion.div>
              </div>
            </div>
            <div className="h-[100%] w-[50%] flex items-center justify-center flex-col gap-3">
              <h2 className="justify-start">Digital Marketing</h2>
              <div
                className="w-[580px] h-[28px] bg-gray-200 rounded-[20px] relative overflow-hidden"
                style={{
                  boxShadow: "0px 0px 15px rgba(0,0,0,0.1)",
                  border: "1px solid #8b8b8b16",
                }}
              >
                {" "}
                <motion.div
                  ref={ref2}
                  className={`absolute left-0 top-0 transition-all duration-1000 ${
                    isVisible2 ? "w-[87%]" : "w-[0%]"
                  } h-[28px] bg-sky-700 `}
                ></motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-[100%] h-[600px] p-7  mt-[340px] flex flex-col items-center justify-center">
        <span className="flex flex-col items-center gap-1 w-[100%] h-[20%] justify-center">
          <p className="text-[#ffa600] text-[20px] font-bold">WHAT WE DO</p>
          <p className="text-[46px] font-medium text-[#2b2b2b]">Our Services</p>
        </span>
        <div className="w-[100%] h-[80%] flex gap-4">
          <div className="w-[55%] h-[100%] p-6">
            <img
              src={ourServicesPic}
              alt=""
              className="w-[100%] h-[100%] object-contain"
            />
          </div>
          <div className="w-[40%] h-[100%] flex flex-col gap-6 ">
            <div className="w-[100%] h-[33%]  flex items-center gap-3 justify-center group">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-12 group-hover:-translate-x-10 transition-all duration-700 group-hover:text-[#ffa600]"
                >
                  <path
                    fillRule="evenodd"
                    d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 0 0-3.471 2.987 10.04 10.04 0 0 1 4.815 4.815 18.748 18.748 0 0 0 2.987-3.472l3.386-5.079A1.902 1.902 0 0 0 20.599 1.5Zm-8.3 14.025a18.76 18.76 0 0 0 1.896-1.207 8.026 8.026 0 0 0-4.513-4.513A18.75 18.75 0 0 0 8.475 11.7l-.278.5a5.26 5.26 0 0 1 3.601 3.602l.502-.278ZM6.75 13.5A3.75 3.75 0 0 0 3 17.25a1.5 1.5 0 0 1-1.601 1.497.75.75 0 0 0-.7 1.123 5.25 5.25 0 0 0 9.8-2.62 3.75 3.75 0 0 0-3.75-3.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="flex flex-col gap-2">
                <p className="text-[14px] font-bold text-[#ffa600] transition-all duration-700 group-hover:text-[#1b1b1b]">
                  SERVICES 1
                </p>
                <p className="text-[22px] text-[#1b1b1b]">Web Design</p>
                <p className="text-[#1b1b1b] w-[450px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto tempora aut, nesciunt rem excepturi itaque laborum odio,
                  id explicabo.
                </p>
              </span>
            </div>
            <div className="w-[100%] h-[33%]  flex items-center gap-3 justify-center group">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-12 group-hover:-translate-x-10 transition-all duration-700 group-hover:text-[#ffa600]"
                >
                  <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
                  <path
                    fillRule="evenodd"
                    d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="flex flex-col gap-2">
                <p className="text-[14px] font-bold text-[#ffa600] transition-all duration-700 group-hover:text-[#1b1b1b]">
                  SERVICES 2
                </p>
                <p className="text-[22px] text-[#1b1b1b]">Web Development</p>
                <p className="text-[#1b1b1b] w-[450px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto tempora aut, nesciunt rem excepturi itaque laborum odio,
                  id explicabo.
                </p>
              </span>
            </div>
            <div className="w-[100%] h-[33%] flex items-center gap-3 justify-center group">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-12 group-hover:-translate-x-10 transition-all duration-700 group-hover:text-[#ffa600]"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
              </span>
              <span className="flex flex-col gap-2">
                <p className="text-[14px] font-bold text-[#ffa600] transition-all duration-700 group-hover:text-[#1b1b1b]">
                  SERVICES 3
                </p>
                <p className="text-[22px] text-[#1b1b1b]">Digital Marketing</p>
                <p className="text-[#1b1b1b] w-[450px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto tempora aut, nesciunt rem excepturi itaque laborum odio,
                  id explicabo.
                </p>
              </span>
            </div>
          </div>
        </div>
      </section>

      <ServiceTab />

      <section className="w-[100%] h-[450px] bg-[#e7e7e7] mt-[70px] flex">
        <div className="flex w-[40%] pl-[30px] gap-2 items-center h-[100%] justify-center">
          <div className="flex flex-col rotate-180">
            <p className="rotate-90 text-[#ffa600]">WHO</p>
            <p className="rotate-90 mt-6 mb-3 text-[#ffa600]">WE</p>
            <p className="rotate-90 text-[#ffa600]">ARE</p>
          </div>
          <div>
            <div className="text-[44px] text-neutral-800">What Our</div>
            <div className="text-[44px] text-neutral-800">
              <span className="font-bold">Customers</span> Say
            </div>
          </div>
        </div>
        <div className="w-[60%] h-[100%] flex items-center justify-center flex-col">
          <div
            ref={sliderRef}
            className="flex overflow-hidden w-[670px] h-[300px] bg-orange-400 items-center justify-start"
          >
            <div className="card min-w-[100%] h-[100%] bg-[#ffa600] text-white rounded">
              <div className="w-[100%] h-[25%] flex items-center justify-between px-[50px]">
                <p className="text-[32px] font-medium ">Quality Support</p>
                <span className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
              <div className="w-[100%] h-[32%] flex items-center justify-center">
                <p className="text-[14px] w-[570px] text-justify">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugiat aperiam eum, corporis tenetur nisi autem in
                  exercitationem atque maiores. Molestias alias velit maxime
                  similique, repudiandae ullam ad dolor illo dignissimos.
                </p>
              </div>
              <div className="w-[100%] h-[30%] flex items-center pl-6 gap-8">
                <div className="w-[74px] h-[85%] rounded-full">
                  <img
                    src={client1Pic}
                    alt=""
                    className="w-[100%] h-[100%] rounded-full"
                  />
                </div>
                <span>
                  <p>Joq Martin</p>
                  <p>Senior Developer</p>
                </span>
              </div>
            </div>
            <div className="card min-w-[100%] h-[100%] bg-[#ffa600] text-white rounded">
              <div className="w-[100%] h-[25%] flex items-center justify-between px-[50px]">
                <p className="text-[32px] font-medium ">Quality Support</p>
                <span className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
              <div className="w-[100%] h-[32%] flex items-center justify-center">
                <p className="text-[14px] w-[570px] text-justify">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugiat aperiam eum, corporis tenetur nisi autem in
                  exercitationem atque maiores. Molestias alias velit maxime
                  similique, repudiandae ullam ad dolor illo dignissimos.
                </p>
              </div>
              <div className="w-[100%] h-[30%] flex items-center pl-6 gap-8">
                <div className="w-[74px] h-[85%] rounded-full">
                  <img
                    src={client2Pic}
                    alt=""
                    className="w-[100%] h-[100%] rounded-full"
                  />
                </div>
                <span>
                  <p>Joq Martin</p>
                  <p>Senior Developer</p>
                </span>
              </div>
            </div>
            <div className="card min-w-[100%] h-[100%] bg-[#ffa600] text-white rounded">
              <div className="w-[100%] h-[25%] flex items-center justify-between px-[50px]">
                <p className="text-[32px] font-medium ">Quality Support</p>
                <span className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
              <div className="w-[100%] h-[32%] flex items-center justify-center">
                <p className="text-[14px] w-[570px] text-justify">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugiat aperiam eum, corporis tenetur nisi autem in
                  exercitationem atque maiores. Molestias alias velit maxime
                  similique, repudiandae ullam ad dolor illo dignissimos.
                </p>
              </div>
              <div className="w-[100%] h-[30%] flex items-center pl-6 gap-8">
                <div className="w-[74px] h-[85%] rounded-full">
                  <img
                    src={client3Pic}
                    alt=""
                    className="w-[100%] h-[100%] rounded-full"
                  />
                </div>
                <span>
                  <p>Joq Martin</p>
                  <p>Senior Developer</p>
                </span>
              </div>
            </div>
          </div>
          <div className="w-[100%] text-white h-[13%] flex items-center justify-center gap-5">
            <button
              onClick={scrollLeft}
              className=" bg-slate-500 py-1 rounded  active:scale-[0.9]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              className=" bg-slate-500 py-1 rounded  active:scale-[0.9]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="mt-[130px] w-[100%] h-[660px] flex flex-col gap-12">
        <div className="w-[100%] h-[20%] flex items-center justify-center flex-col">
          <p className="uppercase text-[20px] text-[#ffa600]">
            Lovely Customers
          </p>
          <p className="text-[48px] text-[#1d1d1d]">Our Pricing</p>
        </div>
        <div className="flex justify-center items-center w-[100%] h-[80%] gap-8">
          <div
            className="w-[370px] h-[510px] bg-white p-[10px] rounded hover:bg-[#ffa600] 
          transition-all duration-[600ms] group"
            style={{ boxShadow: "0px 0px 25px #adadad" }}
          >
            <p
              className="text-[#ffa600] flex items-center text-[24px] font-serif w-[100%] h-[10%] font-semibold
            group-hover:text-white transition-all duration-[600ms]"
            >
              Basic
            </p>

            <div className="w-[100%] h-[2px] my-2 bg-[#dadada]"></div>

            <div
              className="flex items-center justify-between w-[100%] h-[25%]
             group-hover:text-white transition-all duration-[600ms]"
            >
              <span className="flex w-[25%] h-[100%] items-center ">
                <span className=" mb-6 text-[24px]">$</span>
                <span className="flex flex-col justify-center items-center">
                  <p className="text-[42px]">29</p>
                  <p className="text-[12px]">Month</p>
                </span>
              </span>
              <p className="text-[14px] flex w-[75%] text-justify h-[100%] items-center">
                You will get all these , Get it now! awesome services with this
                great price. Get it now!
              </p>
            </div>

            <div className="w-[100%] h-[2px] my-2 bg-[#dadada]"></div>

            <ul
              className="flex flex-col w-[100%] h-[45%] justify-evenly 
            *:group-hover:text-white *:transition-all *:duration-[600ms]"
            >
              <li className="flex gap-2 items-center text-[14px] text-[#242424]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <p>Full access</p>
              </li>
              <li className="flex gap-2 items-center text-[14px] text-[#242424]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <p>Unlimited Bandwidth</p>
              </li>
              <li className="flex gap-2 items-center text-[14px] text-[#242424]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <p>Powerful Admin Panel</p>
              </li>
              <li className="flex gap-2 items-center text-[14px] text-[#242424]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <p>Email Accounts</p>
              </li>
              <li className="flex gap-2 items-center text-[14px] text-[#242424]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <p>10 Free Web sites</p>
              </li>
            </ul>

            <span className="w-[100%] h-[10%] mt-2 flex items-center justify-center">
              <button
                className="w-[100%] uppercase h-[35px] bg-[#ffa600] text-white rounded
              group-hover:text-black group-hover:bg-white transition-all duration-[600ms]"
              >
                Get Started
              </button>
            </span>
          </div>
          <div
            style={{ boxShadow: "0px 0px 25px #adadad" }}
            className="w-[370px] h-[510px] bg-[#1a1a1a] *:text-white
           p-[10px] rounded hover:bg-[#ffa600] transition-all duration-[600ms] group"
          >
            <p
              className="text-[#ffa600] flex items-center text-[24px] font-serif
             w-[100%] h-[10%] font-semibold
            group-hover:text-white transition-all duration-[600ms]"
            >
              Unlimited
            </p>

            <div className="w-[100%] h-[2px] my-2 bg-[#dadada]"></div>

            <div
              className="flex items-center justify-between w-[100%] h-[25%]
             group-hover:text-white transition-all duration-[600ms]"
            >
              <span className="flex w-[25%] h-[100%] items-center ">
                <span className=" mb-6 text-[24px]">$</span>
                <span className="flex flex-col justify-center items-center">
                  <p className="text-[42px]">57</p>
                  <p className="text-[12px]">Month</p>
                </span>
              </span>
              <p className="text-[14px] flex w-[75%] text-justify h-[100%] items-center">
                You will get all these , Get it now! awesome services with this
                great price. Get it now!
              </p>
            </div>

            <div className="w-[100%] h-[2px] my-2 bg-[#dadada]"></div>

            <ul
              className="flex flex-col w-[100%] h-[45%] justify-evenly 
            *:group-hover:text-white *:transition-all *:duration-[600ms]"
            >
              <li className="flex gap-2 items-center text-[14px] text-[#ffffff]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <p>Full access</p>
              </li>
              <li className="flex gap-2 items-center text-[14px] text-[#ffffff]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <p>Unlimited Bandwidth</p>
              </li>
              <li className="flex gap-2 items-center text-[14px] text-[#ffffff]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <p>Powerful Admin Panel</p>
              </li>
              <li className="flex gap-2 items-center text-[14px] text-[#ffffff]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <p>Email Accounts</p>
              </li>
              <li className="flex gap-2 items-center text-[14px] text-[#ffffff]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <p>10 Free Web sites</p>
              </li>
            </ul>

            <span className="w-[100%] h-[10%] mt-2 flex items-center justify-center">
              <button
                className="w-[100%] uppercase h-[35px] bg-[#ffffff] text-black rounded
              group-hover:text-black group-hover:bg-white transition-all duration-[600ms]"
              >
                Get Started
              </button>
            </span>
          </div>
          <div
            style={{ boxShadow: "0px 0px 25px #adadad" }}
            className="w-[370px] h-[510px] bg-white p-[10px] rounded hover:bg-[#ffa600] transition-all duration-[600ms] group"
          >
            <p
              className="text-[#ffa600] flex items-center text-[24px] font-serif w-[100%] h-[10%] font-semibold
            group-hover:text-white transition-all duration-[600ms]"
            >
              Professional
            </p>

            <div className="w-[100%] h-[2px] my-2 bg-[#dadada]"></div>

            <div
              className="flex items-center justify-between w-[100%] h-[25%]
             group-hover:text-white transition-all duration-[600ms]"
            >
              <span className="flex w-[25%] h-[100%] items-center ">
                <span className=" mb-6 text-[24px]">$</span>
                <span className="flex flex-col justify-center items-center">
                  <p className="text-[42px]">96</p>
                  <p className="text-[12px]">Month</p>
                </span>
              </span>
              <p className="text-[14px] flex w-[75%] text-justify h-[100%] items-center">
                You will get all these , Get it now! awesome services with this
                great price. Get it now!
              </p>
            </div>

            <div className="w-[100%] h-[2px] my-2 bg-[#dadada]"></div>

            <ul
              className="flex flex-col w-[100%] h-[45%] justify-evenly 
            *:group-hover:text-white *:transition-all *:duration-[600ms]"
            >
              <li className="flex gap-2 items-center text-[14px] text-[#242424]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <p>Full access</p>
              </li>
              <li className="flex gap-2 items-center text-[14px] text-[#242424]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <p>Unlimited Bandwidth</p>
              </li>
              <li className="flex gap-2 items-center text-[14px] text-[#242424]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <p>Powerful Admin Panel</p>
              </li>
              <li className="flex gap-2 items-center text-[14px] text-[#242424]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <p>Email Accounts</p>
              </li>
              <li className="flex gap-2 items-center text-[14px] text-[#242424]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <p>10 Free Web sites</p>
              </li>
            </ul>

            <span className="w-[100%] h-[10%] mt-2 flex items-center justify-center">
              <button
                className="w-[100%] uppercase h-[35px] bg-[#ffa600] text-white rounded
              group-hover:text-black group-hover:bg-white transition-all duration-[600ms]"
              >
                Get Started
              </button>
            </span>
          </div>
        </div>
      </section>

      <section className="w-[100%] h-[500px] mt-[120px] relative">
        <video
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "rgba(0,0,0,0.2)",
          }}
          autoPlay
          playsInline
          loop
          muted
        >
          <source src={videoHead} />
        </video>
        <div className="absolute left-0 top-0 w-[100%] h-[100%] bg-[#000000ef] p-[50px]">
          <div className="flex w-[100%] pl-[10px] gap-2 items-center h-[45%] ">
            <div className="flex flex-col rotate-180">
              <p className="rotate-90 text-[#ffa600]">FUN</p>
              <p className="rotate-90 mt-6 mb-3 text-[#ffa600]">FACTS</p>
            </div>
            <div>
              <p className="text-[44px] text-white">We Deliver</p>
              <p className="text-[44px] text-white flex gap-5">
                <p className="font-bold">Excellent</p> Services
              </p>
            </div>
          </div>
          <ScrollTrigger onEnter={()=>setCounterState(true)} onExit={()=>setCounterState(false)}>
            <div className="flex items-center w-full h-[55%] justify-center gap-7">
              <div className="group  transition-all duration-[600ms] hover:bg-[#ffa600] w-[280px] h-[180px] bg-[#3b3b3ba6] rounded flex items-center justify-center gap-1 flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-12 text-[#ffa600] transition-all duration-[600ms] group-hover:text-black group-hover:-translate-y-5"
                >
                  <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
                </svg>
                <p className="text-white text-[32px]">
                  {
                    counterState
                    &&
                   <CountUp start={0} end={25} duration={2.75}/>
                  }
                </p>
                <p className="text-white text-[14px]">Years Experience</p>
              </div>
              <div className="group  transition-all duration-[600ms] hover:bg-[#ffa600] w-[280px] h-[180px] bg-[#3b3b3ba6] rounded flex items-center justify-center gap-1 flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-12 text-[#ffa600] transition-all duration-[600ms] group-hover:text-black group-hover:-translate-y-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                  />
                </svg>

                <p className="text-white text-[32px]">
                {
                    counterState
                    &&
                   <CountUp start={0} end={476} duration={2.75}/>
                  }
                </p>
                <p className="text-white text-[14px]">Projects Done</p>
              </div>
              <div className="group  transition-all duration-[600ms] hover:bg-[#ffa600] w-[280px] h-[180px] bg-[#3b3b3ba6] rounded flex items-center justify-center gap-1 flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-12 text-[#ffa600] transition-all duration-[600ms] group-hover:text-black group-hover:-translate-y-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
                  />
                </svg>

                <p className="text-white text-[32px]">
                {
                    counterState
                    &&
                   <CountUp start={0} end={115} duration={2.75}/>
                  }
                </p>
                <p className="text-white text-[14px]">Awards Received</p>
              </div>
              <div className="group  transition-all duration-[600ms] hover:bg-[#ffa600] w-[280px] h-[180px] bg-[#3b3b3ba6] rounded flex items-center justify-center gap-1 flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-12 text-[#ffa600] transition-all duration-[600ms] group-hover:text-black group-hover:-translate-y-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                  />
                </svg>
                <p className="text-white text-[32px]">
                {
                    counterState
                    &&
                   <CountUp start={0} end={276} duration={2.75}/>
                  }
                </p>
                <p className="text-white text-[14px]">Happy Clients</p>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </section>
    </>
  );
}
