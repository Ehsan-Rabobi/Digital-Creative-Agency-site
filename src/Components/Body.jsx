import React, { createRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import aboutPic from "../assets/img/about/about.png";

export default function Body() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = createRef();

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const top = rect.top;
        const height = rect.height;
        const viewportHeight = window.innerHeight;

        if (top + height >= 0 && top - viewportHeight <= 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="note mt-[120px] flex items-center justify-between">
        <motion.div
          ref={ref}
          initial={{ x: -250 }}
          animate={isVisible ? { x: 60, opacity: 1 } : { x: -250, opacity: 0 }}
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
          ref={ref}
          initial={{ x: -250 }}
          animate={isVisible ? { x: -50, opacity: 1 } : { x: 350, opacity: 0 }}
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
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 5 }}
          src={aboutPic}
        />
      </section>
      <section className="card w-[100%] h-[550px] text-neutral-700 bg-neutral-200 mt-[120px] flex justify-evenly items-center p-[30px]">
        <motion.div
          className="w-[350px] h-[400px] shadow-[10px_10px_20px_rgba(8,0,0,0.2)]
         bg-white flex flex-col gap-4 items-center justify-center p-[20px] transition-all
          duration-1000 hover:bg-[#ffa600] group rounded-sm"
          ref={ref}
          initial={{ x: -250 }}
          animate={isVisible ? { x: -50, opacity: 1 } : { x: 350, opacity: 0 }}
          transition={{ duration: 1 }}
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
        <div
          className="w-[350px] h-[400px] shadow-[10px_10px_20px_rgba(8,0,0,0.2)]
         bg-white flex flex-col gap-4 items-center justify-center p-[20px] transition-all
          duration-1000 hover:bg-[#ffa600] group rounded-sm"
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
        </div>
        <div
          className="w-[350px] h-[400px] shadow-[10px_10px_20px_rgba(8,0,0,0.2)]
         bg-white flex flex-col gap-4 items-center justify-center p-[20px] transition-all
          duration-1000 hover:bg-[#ffa600] group rounded-sm"
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
        </div>
      </section>
    </>
  );
}



