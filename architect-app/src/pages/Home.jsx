// src/pages/Home.jsx

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import HeroBg from "../assets/hero_img.png";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

// Hover scale variants for the logo container
const containerVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.1 }
};

// Glow pulse variants triggered on hover only
const glowVariants = {
  rest: { opacity: 0 },
  hover: {
    opacity: [0, 1, 0.7, 1],
    transition: {
      duration: 2,
      times: [0, 0.3, 0.7, 1],
      ease: "easeInOut"
    }
  }
};

// Word-by-word slide-in variants
const textContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, when: "beforeChildren" } }
};
const wordVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "tween", duration: 0.6, ease: "easeOut" }
  }
};

const animatedText =
  "Transforming ideas into iconic architectural spaces that inspire and endure.";

export default function Home() {
  const [started, setStarted] = useState(false);
  useEffect(() => { setStarted(true); }, []);
  const words = animatedText.split(" ");

  return (
    <Box
      id="home"
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {/* Background image */}
      <Box
        component="img"
        src={HeroBg}
        alt="Hero background"
        sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
      />

      {/* Dark overlay */}
      <Box sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.45)", zIndex: 1 }} />

      {/* Centered content */}
      <Box sx={{ position: "relative", zIndex: 2, textAlign: "center", px: 2, color: "#fff", textShadow: "0px 2px 4px rgba(0,0,0,0.5)" }}>
        {/* Logo with soft glow on hover */}
        <MotionBox
          variants={containerVariants}
          initial="rest"
          whileHover="hover"
          sx={{ position: "relative", mx: "auto", mb: 4, width: { xs: 140, md: 220, lg: 260 } }}
        >
          <MotionBox
            variants={glowVariants}
            sx={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: { xs: 160, md: 260, lg: 300 },
              height: { xs: 160, md: 260, lg: 300 },
              background: "radial-gradient(circle, rgba(251,191,36,1) 0%, transparent 70%)",
              borderRadius: "50%",
              zIndex: 2
            }}
          />
          <Box component="img" src="/logo.png" alt="ArchiVision Logo" sx={{ width: "100%", filter: "brightness(0.6)", position: "relative", zIndex: 3 }} />
        </MotionBox>

        {/* Main heading */}
        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
          Welcome to ArchiVision
        </Typography>

        {/* Animated subheading */}
        <MotionTypography
          variant="h5"
          variants={textContainerVariants}
          initial="hidden"
          animate={started ? "visible" : "hidden"}
          sx={{ maxWidth: 600, mb: 4, overflow: "hidden", display: "inline-block", mx: "auto" }}
        >
          {words.map((word, i) => (
            <motion.span key={i} variants={wordVariants} style={{ display: "inline-block", marginRight: "0.5rem" }}>
              {word}
            </motion.span>
          ))}
        </MotionTypography>

        {/* Call-to-action */}
        <Button component={Link} to="/portfolio" variant="contained" sx={{ backgroundColor: "#fbbf24", color: "black", fontWeight: "bold", px: 4, py: 1.5, fontSize: "1.2rem", borderRadius: 0, display: "block", mx: "auto", "&:hover": { backgroundColor: "#facc15" } }}>
          View Portfolio
        </Button>
      </Box>
    </Box>
  );
}
