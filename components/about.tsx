"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";
export default function About() {

  const { ref } = useSectionInView("About");


  return (
    <motion.section
    ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3">
        I am currently pursuing a degree in{" "}
        <span className="font-medium">Computer Science Engineering with specialization in AI and ML</span>from SRM Institute of Science and Technology.I am urrently Working on{" "}
        <span className="font-medium">full-stack web and flutter development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Flutter, Node.js and MongoDB
        </span>
        . I am also familiar with DevOps concepts. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      <p>
        {" "}
        <span className="italic">When I'm not coding</span>, I enjoy playing basketball, reading books and watching movies.
      </p>
    </motion.section>
  );
}
