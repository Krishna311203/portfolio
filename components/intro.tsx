"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
export default function Intro() {
  return (
    <section id="home" className="mb-28 max-w-[50rem] text-center sm:m-0 scroll-mt-[100rem]">
      {/* <div className="flex items-center justify-center">
        <div className="">
          <Image src={""} alt="krishna" height='192' width='192' quality='95' priority={true} />
        </div>
      </div> */}

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Krishna.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> and I enjoy{" "}
        building <span className="italic">sites & apps</span>.{" "}I am a{" "}
        <span className="font-bold">3rd Year CSE</span> Student & My focus is{" "}
        <span className="underline">Flutter, React (Next.js)</span>.
      </motion.h1>


      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >

        <Link
          href="#contact"
          className=" group bg-gray-900 text-white px-7 py-3 flex items-center justify-center gap-2  rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition "
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition" />
        </Link>

        <a className="group bg-white text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition cursor-pointer border border-black/10 "  href="/CV.pdf" download>
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a className="bg-white text-black p-4 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110  active:scale-105 transition cursor-pointer border border-black/10 "
        href="https://www.linkedin.com/in/krishna-shrivastava-/"
        target="_blank"
        >
          <BsLinkedin />
        </a>

        <a className="bg-white text-black p-4 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110  active:scale-105 transition cursor-pointer border border-black/10 "
        href="https://github.com/Krishna311203"
        target="_blank"
        >
          <BsGithub />
        </a>

      </motion.div>
    </section>
  );
}
