"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Expereinces = {
  Expereince_1: {
    title:
      "Internship at Revnix, fmr. Revnix Technologies, Haripur, KPK, Pakistan",
    desc: "I am gaining hands-on experience in building responsive and dynamic web applications using HTML5, CSS3, JavaScript (ES6+), <span>React.js <span />(Context API), TypeScript, Next.js, Tailwind CSS, and Shadcn UI, integrated with MongoDB for database management. My work focuses on developing reusable components, implementing custom filters, and optimizing performance and accessibility, which has strengthened my expertise in modern frontend development and collaboration on large-scale projects.",
    duration: "April 2025 – Present",
  },
  Expereince_2: {
    title:
      "Internship at Benazir Income Support Programme Headquarters, Islamabad, Pakistan",
    desc: "During my internship at BISP HQ, I gained hands-on experience in backend web development using C#, SQL, and Bootstrap to create responsive web forms and applications. I also had the opportunity to explore various organizational wings, including Human Resources, Administration, IT, and MIS, which broadened my understanding of real-world business processes and system integration. This internship not only strengthened my technical and analytical skills but also enhanced my professional growth, teamwork, and adaptability in a structured government environment.",
    duration: "July 2024 – September 2024",
  },
};

export default function Experience() {
  return (
    <section className="py-3" id="experience">
      <div className="max-w-[1200px] mx-auto sm:mt-24 xs:mt-12 sm:px-8 xs:p-6">
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
            Where I worked
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <h2 className="xs:text-2xl sm:text-3xl pb-2 font-semibold text-orange-500">
            {Expereinces.Expereince_1.title}
          </h2>
          <span className="text-md font-semibold text-gray-400">
            {Expereinces.Expereince_1.duration}
          </span>
        </motion.div>
        <div className="flex items-center xs:gap-4 mb-8 lg:flex-row xs:flex-col">
          <p className="pt-3 text-lg lg:w-2/3 xs:w-full sm:pb-8 text-white">
            {Expereinces.Expereince_1.desc}
          </p>
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="w-1/3 flex justify-center relative"
          >
            <a
              href="https://www.revnix.com"
              target="blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/revnix-logo.png"}
                width={200}
                height={200}
                alt="Revnix Logo"
                className="rounded-full shadow-md shadow-orange-500"
              />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <h2 className="xs:text-2xl sm:text-3xl pb-2 font-semibold text-orange-500">
            {Expereinces.Expereince_2.title}
          </h2>
          <span className="text-md font-semibold text-gray-400">
            {Expereinces.Expereince_2.duration}
          </span>
        </motion.div>

        <div className="flex items-center xs:gap-4 lg:flex-row xs:flex-col">
          <p className="pt-3 text-lg lg:w-2/3 sm:w-full sm:pb-8 text-white">
            {Expereinces.Expereince_2.desc}
          </p>
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="w-1/3 flex justify-center relative"
          >
            <a
              href="https://bisp.gov.pk"
              target="blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/bisp-logo.png"}
                width={200}
                height={200}
                alt="Bisp Logo"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
