import { Box, ListItem, MenuList, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import videoHead from "../assets/video/video_2024-11-15_16-51-47.mp4";
import { KeyboardArrowDown } from "@mui/icons-material";

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
      <ListItem
        key={index}
        sx={{
          cursor: "pointer",
          fontWeight: "bold",
          fontFamily: "sans-serif",
          color: `${!changeNav ? 'white' : 'black'}`,
          fontSize: "14px",
          "&:hover": {
            color: "#ffa600",
          },
        }}
      >
        {e}
      </ListItem>
    );
  });

  const handleClickHead = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  const handleChangeNav = () => {
    const headerHeight = document.querySelector("nav")?.offsetHeight - 50;
    if (window.scrollY > headerHeight) {
      setChangeNav(true);
    } else if(window.scrollY === 0) {
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
      <Stack>
        <nav
          style={ !changeNav ?{
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
          } : {
            position: "fixed",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            height:'80px',
            zIndex: "1111",
            padding: "0px 60px",
            backgroundColor:"white",
            transition: "all 0.8s ease",
            boxShadow:"0px 0px 18px 7px rgba(0,0,0,0.3)"
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{ color: `${changeNav ? '#bebebe' : 'white'}`,cursor:"pointer" , fontWeight: "bold", padding: "20px" }}
            >
              <span style={ {color:"#ffa600"}}>S</span>O
              <span style={ {color:"#ffa600"}}>L</span>O
            </Typography>
          </Box>
          <Box display={"flex"}>
            <MenuList sx={{ display: "flex" }}>{menu}</MenuList>
          </Box>
        </nav>
        <Box
          sx={{
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
          <Box
            position={"absolute"}
            top={"50%"}
            left={"50%"}
            sx={{ transform: "translate(-50%,-50%)" }}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              gap={2}
            >
              <Typography
                variant="h3"
                fontFamily={"sans-serif"}
                fontWeight={"bold"}
                color="white"
              >
                DIGITAL
              </Typography>
              <Typography
                variant="h3"
                fontFamily={"sans-serif"}
                fontWeight={"bold"}
                color="white"
              >
                CREATIVE <span style={{ color: "#ffa600" }}>AGENCY</span>
              </Typography>
              <Typography textAlign={"center"} color="white" fontWeight={300}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam in
                nihil minima unde qui nihil minima.
              </Typography>
            </Box>
          </Box>
          <Box
            position={"absolute"}
            bottom={"0%"}
            left={"50%"}
            sx={{ transform: "translate(-50%,0%)" }}
            onClick={handleClickHead}
          >
            <KeyboardArrowDown
              sx={{
                fontSize: "46px",
                color: "white",
                cursor: "pointer",
                "&:hover": {
                  color: "#ffa600",
                },
                "&:active": {
                  transform: "scale(0.9)",
                },
              }}
            />
          </Box>
        </Box>
      </Stack>
    </>
  );
}
