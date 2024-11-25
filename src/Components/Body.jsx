import React, { createRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import aboutPic from "../assets/img/about/about.png";
import informationTeam from "../Utils/images";
import ourServicesPic from "../assets/img/services/laptop-lamp.png";

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
              <div className="w-[580px] h-[28px] bg-white rounded-[20px] relative overflow-hidden">
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
              <div className="w-[580px] h-[28px] bg-white rounded-[20px] relative overflow-hidden">
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
                style={{ border: "2px solid gray" }}
                className="w-[580px] h-[28px] bg-white rounded-[20px] relative overflow-hidden"
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
              <div className="w-[580px] h-[28px] bg-white rounded-[20px] relative overflow-hidden">
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

      <section className="w-[100%] h-[600px] bg-red-500 mt-[80px]">
        <span>
          <ul>
            <li className="uppercase">Creativity</li>
            <li className="uppercase">Strategy</li>
            <li className="uppercase">Design</li>
            <li className="uppercase">Development</li>
          </ul>
        </span>
        <div></div>
      </section>
    </>
  );
}
