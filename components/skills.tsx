"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Skills() {
  return (
    <section className="py-3" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="max-w-[1200px] mx-auto sm:mt-24 xs:mt-12 px-8"
      >
        <div className="flex justify-center">
          <h2 className="text-lg px-3 py-1 mb-8 shadow-md shadow-gray-700 border-1 border-gray-700 rounded-3xl text-center text-black bg-gray-300">
            What I can do
          </h2>
        </div>
        <div className="py-5 rounded-lg mx-auto">
          <div className="sm:px-8 sm:py-10 xs:px-4 xs:py-5">
            <div className="flex md:gap-8 xs:gap-6 mb-14 xs:flex-wrap lg:flex-nowrap sm:items-center justify-center">
              <Image
                src={"/javascript-logo.png"}
                width={160}
                height={160}
                alt="JavaScript Logo"
              ></Image>
              <Image
                src={"/react-logo.png"}
                width={160}
                height={160}
                alt="React Logo"
              ></Image>
              <Image
                src={"/nextjs-logo.svg"}
                width={160}
                height={160}
                alt="NextJS Logo"
              ></Image>
              <Image
                src={"/typescript-logo.png"}
                width={160}
                height={160}
                alt="Typescript Logo"
              ></Image>
              <Image
                src={"/mongodb-logo.webp"}
                width={160}
                height={160}
                alt="MongoDB Logo"
              ></Image>
            </div>

            {/* Bars */}
            <div className="grid grid-cols-2 justify-between md:gap-x-24 xs:gap-x-8 gap-y-3 sm:px-2 text-gray-200">
              <div>
                <div className="flex justify-between items-center pb-1">
                  <h4 className="sm:text-lg xs:text-md font-semibold">HTML5</h4>
                  <span className="sm:text-lg xs:text-md font-semibold">
                    95%
                  </span>
                </div>
                <div className="bg-gray-500 rounded-lg">
                  <div className="w-[90%] bg-gradient-to-r from-orange-300 to-lime-500 h-2 rounded-lg"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center pb-1">
                  <h4 className="sm:text-lg xs:text-md font-semibold">CSS3</h4>
                  <span className="sm:text-lg xs:text-md font-semibold">
                    85%
                  </span>
                </div>
                <div className="bg-gray-500 rounded-lg">
                  <div className="w-[85%] bg-gradient-to-r from-orange-300 to-lime-500 h-2 rounded-lg"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center pb-1">
                  <h4 className="sm:text-lg xs:text-md font-semibold">
                    JavaScript
                  </h4>
                  <span className="sm:text-lg xs:text-md font-semibold">
                    80%
                  </span>
                </div>
                <div className="bg-gray-500 rounded-lg">
                  <div className="w-[80%] bg-gradient-to-r from-orange-300 to-lime-500 h-2 rounded-lg"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center pb-1">
                  <h4 className="sm:text-lg xs:text-md font-semibold">
                    React.js
                  </h4>
                  <span className="sm:text-lg xs:text-md font-semibold">
                    70%
                  </span>
                </div>
                <div className="bg-gray-500 rounded-lg">
                  <div className="w-[70%] bg-gradient-to-r from-orange-300 to-lime-500 h-2 rounded-lg"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center pb-1">
                  <h4 className="sm:text-lg xs:text-md font-semibold">
                    TypeScript
                  </h4>
                  <span className="sm:text-lg xs:text-md font-semibold">
                    75%
                  </span>
                </div>
                <div className="bg-gray-500 rounded-lg">
                  <div className="w-[75%] bg-gradient-to-r from-orange-300 to-lime-500 h-2 rounded-lg"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center pb-1">
                  <h4 className="sm:text-lg xs:text-md font-semibold">
                    MongoDB
                  </h4>
                  <span className="sm:text-lg xs:text-md font-semibold">
                    85%
                  </span>
                </div>
                <div className="bg-gray-500 rounded-lg">
                  <div className="w-[85%] bg-gradient-to-r from-orange-300 to-lime-500 h-2 rounded-lg"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center pb-1">
                  <h4 className="sm:text-lg xs:text-md font-semibold">
                    Next.js
                  </h4>
                  <span className="sm:text-lg xs:text-md font-semibold">
                    70%
                  </span>
                </div>
                <div className="bg-gray-500 rounded-lg">
                  <div className="w-[70%] bg-gradient-to-r from-orange-300 to-lime-500 h-2 rounded-lg"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center pb-1">
                  <h4 className="sm:text-lg xs:text-md font-semibold">
                    Tailwind
                  </h4>
                  <span className="text-lg font-semibold">85%</span>
                </div>
                <div className="bg-gray-500 rounded-lg">
                  <div className="w-[85%] bg-gradient-to-r from-orange-300 to-lime-500 h-2 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
