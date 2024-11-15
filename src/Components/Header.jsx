import { Box, ListItem, MenuList, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import videoHead from "../assets/video/video_2024-11-15_16-51-47.mp4";
import { KeyboardArrowDown } from "@mui/icons-material";

export default function Header() {
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
          color: "white",
          fontSize: "14px",
          "&:hover": {
            color: "yellow",
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

  const handleChangeNav = ()=>{
    const headerHeight = document.querySelector('nav').offsetHeight-125;  
  }
  return (
    <>
      <Stack>
        <nav
          style={{
            position: "fixed",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            height: "125px",
            zIndex: "1111",
            padding: "60px",
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{ color: "white", fontWeight: "bold", padding: "20px" }}
            >
              <span style={{ color: "yellow" }}>S</span>O
              <span style={{ color: "yellow" }}>L</span>O
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
                CREATIVE <span style={{ color: "yellow" }}>AGENCY</span>
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
                  color: "yellow",
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
