"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";

const Project_Info = {
  Poject_1:
    "A Full-stack scalable RBAC system with secure authentication an CRUD operations. Developed both frontend & backend in Next.js, leveraging React hooks and MongoDB.",
  Poject_2:
    "Converted a Figma UI design into a fully responsive, pixel-perfect website with HTML and CSS. Optimized for performance and cross-browser compatibility.",
  Poject_3:
    "A multi-step form wizard using HTML, CSS, and JavaScript with real-time validation and step indicators. Enabled seamless navigation between sections and display of submitted user data.",
};

export default function Projects() {
  return (
    <section className="py-3" id="projects">
      <div className="max-w-[1200px] mx-auto sm:mt-24 xs:mt-12 px-8">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="flex justify-center"
        >
          <h2 className="text-lg px-3 py-1 mb-8 shadow-md shadow-gray-700 border-1 border-gray-700 rounded-3xl text-center text-black bg-gray-300">
            What I’ve built
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-y-8 gap-6 xs:grid-cols-1 md:p-0 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="border-1 relative rounded-sm border-gray-700 hover:shadow-sm hover:shadow-gray-700 hover:scale-[1.02] transition-transform duration-500 ease-in-out"
          >
            <div className="h-[200]">
              <Image
                src={"/role-based-CRUD.png"}
                width={768}
                height={200}
                alt="Role-Based CRUD"
                className="w-full h-full"
              ></Image>
            </div>
            <Image
              src={"/nextjs-logo.svg"}
              height={50}
              width={50}
              alt="Next.js Logo"
              className="absolute top-[-24] left-[-24] rotate-325 rounded-full"
            />
            <p className="p-4 text-white text-lg md:min-h-[120] sm:h-auto">
              {Project_Info.Poject_1}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="border-1 rounded-sm relative border-gray-700 hover:shadow-sm hover:shadow-gray-700 hover:scale-[1.02] transition-transform duration-500 ease-in-out"
          >
            <div className="h-[200px]">
              <Image
                src={"/Figma.png"}
                width={768}
                height={200}
                alt="Figma to Web"
                className="w-full h-full"
              ></Image>
            </div>
            <Image
              src={"/CSS-Logo.png"}
              height={58}
              width={58}
              alt="CSS Logo"
              className="absolute top-[-28] left-[-28] rotate-325"
            />
            <p className="p-4 text-white text-lg md:min-h-[120] sm:h-auto">
              {Project_Info.Poject_2}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="border-1 relative rounded-sm border-gray-700 hover:shadow-sm hover:shadow-gray-700 hover:scale-[1.02] transition-transform duration-500 ease-in-out"
          >
            <div className="h-[200px]">
              <Image
                src={"/3-step-form.png"}
                width={768}
                height={200}
                alt="3-step-form"
                className="w-full h-full"
              ></Image>
            </div>
            <Image
              src={"/javascript-logo.png"}
              height={42}
              width={42}
              alt="JS Logo"
              className="absolute top-[-20] left-[-16] rotate-325 rounded-lg"
            />
            <p className="p-4 text-white text-lg md:min-h-[120] sm:h-auto">
              {Project_Info.Poject_3}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="flex justify-center"
        >
          <Button className="text-md px-3 py-1 my-8 shadow-sm shadow-gray-700 border-1 border-gray-700 hover:scale-105 rounded-3xl text-center text-gray-200">
            <a
              href="https://github.com/AsimRaza4565/"
              target="blank"
              rel="noopener noreferrer"
            >
              See All Projects
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
