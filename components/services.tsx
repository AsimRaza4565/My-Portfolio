"use client";

import { motion } from "framer-motion";

const My_Services = {
  service_1_title: "Responsive Web Development",
  service_1_desc:
    "I convert Figma designs into fully responsive, pixel-perfect websites using modern technologies like HTML, CSS, JavaScript, React, Next.js Tailwind CSS, and ShadcnUI, ensuring clean code, smooth performance, and a design that looks exactly as intende across all devices.",
  service_2_title: "Bug Fix & Customization",
  service_2_desc:
    "I resolve errors and tailor features for business websites, e-commerce stores, dashboards, and portfolio projects. From fixing UI glitches to customizing React/Next.js components, I ensure smooth functionality and a polished user experience.",
  service_3_title: "Performance Optimizations",
  service_3_desc:
    "I can boost speed and accessibility for corporate sites, e-commerce platforms, SaaS dashboards, and landing pages. I optimize code, reduce load times, and implement best practices for a seamless, user-friendly browsing experience.",
};

export default function Services() {
  return (
    <section className="py-3" id="services">
      <div className="max-w-[1200px] mx-auto sm:mt-24 xs:mt-12 sm:px-8 xs:px-3">
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
            What I Offer
          </h2>
        </motion.div>

        <div className="mx-auto flex lg:flex-row xs:flex-col gap-6">
          {[
            {
              num: "01",
              title: My_Services.service_1_title,
              desc: My_Services.service_1_desc,
              duration: 0.5,
            },
            {
              num: "02",
              title: My_Services.service_2_title,
              desc: My_Services.service_2_desc,
              duration: 0.9,
            },
            {
              num: "03",
              title: My_Services.service_3_title,
              desc: My_Services.service_3_desc,
              duration: 1.3,
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{
                duration: card.duration,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="border border-gray-300 rounded-sm lg:p-8 p-4 text-white flex flex-col gap-3 hover:shadow-md shadow-gray-600 hover:scale-[1.02] transition-transform duration-500 ease-in-out hover:bg-gray-700 hover:border-pink-500"
            >
              <span className="text-2xl font-semibold text-yellow-200">
                {card.num}
              </span>
              <h3 className="text-[22px] font-semibold text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-rose-600 bg-clip-text">
                {card.title}
              </h3>
              <p>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
