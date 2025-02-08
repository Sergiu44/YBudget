"use client";

import { motion } from "motion/react";
import React from "react";

export default function BrandSlogan() {
  return (
    <div className="mt-40 flex gap-2 overflow-hidden text-6xl">
      <div className="font-bold uppercase">More</div>
      <motion.div
        className="relative block whitespace-nowrap font-montserrat font-bold uppercase"
        initial={{ y: 0 }}
        animate={{
          y: ["0%", "-100%", "-200%"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 4,
          repeatDelay: 3,
        }}
      >
        <motion.div initial={{ y: 0 }}>freedom.</motion.div>
        <motion.div className="absolute inset-0" initial={{ y: "100%" }}>
          vision.
        </motion.div>
        <motion.div className="absolute inset-0" initial={{ y: "200%" }}>
          stability.
        </motion.div>
      </motion.div>
    </div>
  );
}
