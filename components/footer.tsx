"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <section id="contact">
      <div className="px-8 w-full sm:mt-24 xs:mt-12 bg-white sm:pt-24 xs:pt-16 pb-1 mx-auto flex flex-col gap-4 items-center">
        <div className="flex sm:gap-5 xs:gap-3 flex-wrap justify-center text-lg font text-blue-700 sm:mb-10 xs:mb-5">
          <Link
            href={"#home"}
            className="hover:text-blue-900 hover:underline hover:font-semibold"
          >
            Home
          </Link>
          <Link
            href={"#background"}
            className="hover:text-blue-900 hover:underline hover:font-semibold"
          >
            About Me
          </Link>
          <Link
            href={"#skills"}
            className="hover:text-blue-900 hover:underline hover:font-semibold"
          >
            My Skills
          </Link>
          <Link
            href={"#skills"}
            className="hover:text-blue-900 hover:underline hover:font-semibold"
          >
            Services
          </Link>
          <Link
            href={"#projects"}
            className="hover:text-blue-900 hover:underline hover:font-semibold"
          >
            Projects
          </Link>
          <Link
            href={"#experience"}
            className="hover:text-blue-900 hover:underline hover:font-semibold"
          >
            Expereince
          </Link>
          <Link
            href={"#blogs"}
            className="hover:text-blue-900 hover:underline hover:font-semibold"
          >
            Blogs
          </Link>
        </div>
        <h2 className="md:text-5xl sm:text-4xl xs:text-3xl text-center font-semibold text-black">
          Lets Talk With <span className="text-green-600">Me!</span>
        </h2>
        <h3 className="sm:text-3xl xs:text-2xl font-semibold text-yellow-500">
          Asim Raza
        </h3>
        <h4 className="text-2xl text-center font-semibold text-gray-700">
          Frontend Develepor | React/Next.js Developer
        </h4>
        <div className="flex items-center gap-4 sm:pt-4 xs:pt-2">
          <a
            href="https://www.linkedin.com/in/asim-raza-689636324/"
            target="blank"
            rel="noopener noreferrer"
            className="w-[44] p-2 border-1 border-gray-400 rounded-full hover:bg-blue-300"
          >
            <Image
              src={"/linkedin.png"}
              width={48}
              height={48}
              alt="LinkedIn"
              className="w-full rounded-full"
            ></Image>
          </a>
          <a
            href="https://github.com/AsimRaza4565/"
            target="blank"
            rel="noopener noreferrer"
            className="w-[44] p-2 border-1 border-gray-400 rounded-full hover:bg-blue-300"
          >
            <Image
              src={"/github.png"}
              width={48}
              height={48}
              alt="Github"
              className="hover:bg-blue-300 rounded-full w-full"
            ></Image>
          </a>
          <a
            href="https://www.instagram.com/asim_raza_awan"
            target="blank"
            rel="noopener noreferrer"
            className="w-[44] p-2 border-1 border-gray-400 rounded-full hover:bg-blue-300"
          >
            <Image
              src={"/instagram-logo.jpg"}
              width={36}
              height={36}
              alt="Instagram"
              className="w-full rounded-md"
            ></Image>
          </a>
        </div>
        <p className="mt-10 text-center">
          &copy; 2025 Asim Raza. All Rights Reserved.
        </p>
      </div>
    </section>
  );
}
