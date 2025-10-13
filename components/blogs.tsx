"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Typewriter from "typewriter-effect";

type Blog = {
  id: number;
  title: string;
  content: string;
  image: string;
  reversed?: boolean;
};

const blogs = [
  {
    id: 1,
    title: "How I Turn Figma Designs into Responsive Web Interfaces",
    content:
      "As a frontend developer, one of my main strengths is converting Figma prototypes into pixel-perfect, responsive web applications. My process starts by analyzing the design system in Figma, then breaking it down into reusable React components. Using Tailwind CSS for utility-first styling and Shadcn UI for prebuilt, accessible components, I ensure the final product is both visually accurate and performant. This approach allows me to deliver designs that not only look great but also adapt seamlessly across different devices and screen sizes.",

    image: "/Blog_1.jpg",
    reversed: true,
  },
  {
    id: 2,
    title: "Why I Switched from CSS Frameworks to Utility-First Styling",
    content:
      "I’ve worked with frameworks like Bootstrap, but over time, I realized they limited customization and often led to repetitive overrides. Switching to Tailwind CSS changed my workflow entirely. Its utility-first approach allowed me to write cleaner code, achieve consistency across projects, and speed up development significantly. Combined with Tailwind’s responsive utilities, I can now implement custom designs directly without fighting against pre-defined styles, resulting in faster delivery and better scalability for modern projects.",

    image: "/Blog_2.png",
    reversed: false,
  },
  {
    id: 3,
    title: "Building Scalable UI with React & Component Reusability",
    content:
      "When working on large-scale applications, I’ve learned that reusable components are key to maintaining clean and efficient code. In React, I focus on breaking down UI into modular pieces, making them easy to reuse and extend across different sections of an app. For example, instead of hardcoding filter options or buttons, I build generic, customizable components that can adapt to different contexts. This not only improves scalability but also reduces bugs, improves team collaboration, and ensures consistency throughout the project.",

    image: "/Blog_3.png",
    reversed: true,
  },
  {
    id: 4,
    title: "Next.js: Why It’s My Go-To Framework for Modern Web Development",
    content:
      "Over the last few months, Next.js has become my favorite framework for building production-ready applications. Its server-side rendering (SSR) and static site generation (SSG) improve performance and SEO out of the box, which is essential for client-facing websites like e-commerce or business platforms. With features like API routes, file-based routing, and image optimization, Next.js helps me build apps faster while ensuring scalability. Whenever I need speed, SEO benefits, and a smooth developer experience, Next.js is my first choice.",

    image: "/Blog_4.png",
    reversed: false,
  },
  {
    id: 5,
    title: "Why I Started Working with Shadcn UI",
    content:
      "As projects grew in complexity, I needed a UI solution that was flexible, accessible, and easy to customize. That’s when I discovered Shadcn UI. Unlike rigid component libraries, Shadcn provides unstyled, headless components built on top of Radix UI, which I can style freely with Tailwind CSS. This balance gives me the speed of a library and the freedom of custom design. It has been especially useful for building dashboards, modals, and forms where both design flexibility and accessibility matter.",

    image: "/Blog_5.webp",
    reversed: true,
  },
];

export default function Blogs() {
  return (
    <section
      id="blogs"
      className="sm:mt-24 xs:mt-12 py-3 lg:px-8 sm:px-16 xs:px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex justify-center"
      >
        <h2 className="text-lg px-3 py-1 mb-8 shadow-md shadow-gray-700 border border-gray-700 rounded-3xl text-center text-black bg-gray-300">
          My Thoughts
        </h2>
      </motion.div>

      {blogs.map((blog, index) => (
        <BlogCard key={blog.id} blog={blog} index={index} />
      ))}
    </section>
  );
}

function BlogCard({ blog }: { blog: Blog; index: number }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const cardClasses = `bg-gray-300 rounded-md flex gap-1 lg:flex-row xs:flex-col min-h-[280px] mt-6 hover:scale-101 transition-transform duration-500 ease-in-out hover:shadow-md shadow-gray-700 ${
    blog.reversed ? "lg:flex-row-reverse" : ""
  } }`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 70 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={cardClasses}
    >
      <div className="lg:w-2/3 xs:w-full">
        <Image
          src={blog.image}
          width={400}
          height={300}
          alt={`blog_${blog.id}_image`}
          className={`h-full w-full ${
            blog.reversed ? "lg:rounded-r-md" : "lg:rounded-l-md"
          }`}
        />
      </div>

      <div className="lg: w-2/3 xs:w-full pt-8 lg:px-10 md:px-12 md:pb-10 sm:px-10 xs:p-6 pb-6 flex flex-col">
        <h2 className="md:text-2xl xs:text-lg font-bold text-black-500">
          {blog.title}
        </h2>
        <div className="min-h-[200px]">
          <p className="pt-3 lg:text-lg md:text-2xl sm:text-lg text-gray-800">
            {inView && (
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString(blog.content).start();
                }}
                options={{
                  autoStart: true,
                  loop: false,
                  delay: 0,
                  deleteSpeed: Infinity, // ensuring no deletion
                }}
              />
            )}
          </p>
        </div>
        {/* <Link
          href="#"
          className="self-end pr-2 text-blue-700 underline hover:no-underline hover:text-blue-900"
        >
          Read More
        </Link> */}
      </div>
    </motion.div>
  );
}
