"use client";

import React from "react";
import Buttons from "./button";
import Image from "next/image";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const My_Info = {
  name: "Asim Raza",
  title: "Frontend Web Developer",
  Description:
    "crafting seamless, high-performance web apps with React, Next.js, and modern JavaScript. Skilled in building scalable solutions with MongoDB and a strong foundation in HTML5, CSS3, and ES6+. Passionate about creating accessible, user-friendly digital experiences that merge clean code with creative design.",
};

export default function Home() {
  return (
    <section id="home" className="py-16">
      <div className="max-w-[1200] mx-auto mt-14 px-8">
        <div className="flex justify-between md:flex-row sm:flex-col-reverse xs:flex-col-reverse lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="md:w-2/3 xs:pr-0 md:pr-12 text-white sm:w-full xs:w-full xs:text-center md:text-left sm:p-0"
          >
            <div className="text-gray-300 lg:text-2xl md:text-lg md:pt-0 xs:pt-8 pb-4">
              Hello! I am
            </div>
            <span className="text-black bg-green-300 px-1 lg:text-3xl xs:text-2xl font-semibold">
              {My_Info.name}
            </span>
            <h1 className="font-bold text-yellow-500 xl:text-5xl lg:text-5xl mt-3 mb-6 md:text-4xl sm:text-4xl xs:text-3xl">
              <Typewriter
                options={{
                  strings: `${My_Info.title}`,
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
            </h1>
            <div className="text-gray-300 lg:text-2xl md:text-1xl mb-6">
              {My_Info.Description}
            </div>
            <div className="mt-10">
              <Buttons />
            </div>
          </motion.div>

          {/* <div className="bg-red-500 sm:bg-yellow-500 xs:bg-pink-500 p-10"></div> */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="md:w-1/3 xs:2/3 flex items-center justify-center"
          >
            <Image
              src={"/Asim_Raza.jpg"}
              alt="Asim Raza"
              width={286}
              height={286}
              className="border-2 border-gray-400 rounded-full shadow-lg shadow-gray-500 hover:scale-101 transition-transform duration-500 ease-in-out"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
