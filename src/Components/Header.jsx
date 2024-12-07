import React, { useEffect, useState } from "react";
import videoHead from "../assets/video/InShot_20241130_193756484.mp4";

export default function Header() {
  const [changeNav, setChangeNav] = useState(false);
  const menuItem = [
    "HOME",
    "ABOUT",
    "TEAM",
    "SERVICES",
    "WORK",
    "BLOG",
    "CANTACT",
  ];
  const menu = menuItem?.map((e, index) => {
    return (
      <li
      className="hover:text-[#ffa600]"
        key={index}
        style={{
          cursor: "pointer",
          fontWeight: "bold",
          fontFamily: "sans-serif",
          color: `${!changeNav ? "white" : "black"}`,
          fontSize: "14px",
        }}
      >
        {e}
      </li>
    );
  });

  const handleClickHead = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  const handleChangeNav = () => {
    const headerHeight = document.querySelector("nav")?.offsetHeight - 50;
    if (window.scrollY > headerHeight) {
      setChangeNav(true);
    } else if (window.scrollY === 0) {
      setChangeNav(false);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      handleChangeNav();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section>
        <nav
          style={
            !changeNav
              ? {
                  position: "fixed",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  height: "125px",
                  zIndex: "11111111",
                  padding: "60px",
                  backgroundColor: "transparent",
                  transition: "all 0.8s ease",
                }
              : {
                  position: "fixed",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  height: "80px",
                  zIndex: "1111",
                  padding: "0px 60px",
                  backgroundColor: "white",
                  transition: "all 0.8s ease",
                  boxShadow: "0px 0px 18px 7px rgba(0,0,0,0.3)",
                }
          }
        >
          <div>
            <p
              style={{
                color: `${changeNav ? "#bebebe" : "white"}`,
                cursor: "pointer",
                fontWeight: "bold",
                padding: "20px",
                fontSize: "36px",
              }}
            >
              <span style={{ color: "#ffa600" }}>S</span>O
              <span style={{ color: "#ffa600" }}>L</span>O
            </p>
          </div>
          <div display={"flex"}>
            <ul style={{ display: "flex", gap: "30px" }}>{menu}</ul>
          </div>
        </nav>
        <div
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.2)",
            zIndex: "111",
          }}
        >
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
          <div
            style={{
              transform: "translate(-50%,-50%)",
              backgroundColor: "#00000076",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              top: "50%",
              left: "50%",
            }}
          >
            <div className="flex flex-col items-center gap-[2px]">
              <p className="text-[46px] font-serif font-bold text-white">
                DIGITAL
              </p>
              <p className="text-[46px] font-serif font-bold text-white">
                CREATIVE <span style={{ color: "#ffa600" }}>AGENCY</span>
              </p>
              <p className="text-center text-white font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam in
                nihil minima unde qui nihil minima.
              </p>
            </div>
          </div>
          <div
            className="absolute bottom-0 left-[50%]"
            style={{ transform: "translate(-50%,0%)" }}
            onClick={handleClickHead}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10 text-white cursor-pointer active:scale-[0.9] hover:text-[#ffa600]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}
