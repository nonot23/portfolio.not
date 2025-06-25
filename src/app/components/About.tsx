import Image from "next/image";
import Certificate from "../../../public/img/borntodev.png";
import Certificate2 from "../../../public/img/cer.png";
import html from "../../../public/img/html-5.png";
import css from "../../../public/img/css-3.png";
import js from "../../../public/img/js.png";
import ts from "../../../public/img/typescript.png";

import react from "../../../public/img/react.png";
import next from "../../../public/img/Next.js.png";
import tailwinds from "../../../public/img/icons8-tailwind-css-96.png";
import caldrink from "../../../public/img/caldrink.png";
import git from "../../../public/img/git.png";
import course from "../../../public/img/course.png";
import shoes from "../../../public/img/Screenshot 2025-06-25 160521.png";
import { MdAttachEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import MotionDiv from "./Motion";

import { FaGithubSquare } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import Link from "next/link";
export default function About() {
  return (
    <div  className="mt-10 xl:mt-30  ">
      <div className="container mx-auto p-8 ">
        <div id="about" className="flex justify-center">
          <h1  className="text-3xl font-semibold dark:text-white ">
            About <span className="text-[var(--primary-color)]">Me</span>
          </h1>
        </div>
        <div className="text-white mt-5 ">
          <div className="bg-[var(--foreground)]/70 dark:bg-[var(--foreground)]/30 backdrop-blur-md p-10 rounded-xl max-w-6xl mx-auto">
            <MotionDiv className="leading-relaxed"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Hello! My name is <strong>Nattapol Sonthirak</strong>.<br />
              I’m passionate about becoming a{" "}
              <strong>Frontend Developer</strong>, even though my previous work
              experience was in a different field. With a strong interest in web
              design and development, I’ve dedicated myself to learning and
              improving through self-study. I’ve been practicing with tools like
              React, Next.js, and Tailwind CSS to build websites that are
              visually appealing, user-friendly, and responsive. My goal is to
              create beautiful and effective web applications, and to grow into
              a professional developer in this field.
            </MotionDiv>
          </div>
        </div>
        <div className="mt-10 xl:mt-30 ">
          <div className="flex justify-center">
            <h1 className="dark:text-white text-3xl font-semibold">Certificate</h1>
          </div>
          <div className="flex flex-col lg:flex-row max-w-6xl mx-auto justify-center items-center  mt-8 gap-2 xl:gap-20">
            <MotionDiv
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.9 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Image
                src={Certificate}
                alt="Certificate"
                className="lg:max-w-[500px]  object-cover"
              />
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.9 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Image
                src={Certificate2}
                alt="Certificate"
                className="lg:max-w-[500px]  object-cover"
              />
            </MotionDiv>
          </div>
        </div>
        <div className="mt-10 xl:mt-30">
          <div id="projects" className="flex justify-center">
            <h1 className="text-3xl font-semibold dark:text-white">
              My <span className="text-[var(--primary-color)]">Skills</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:place-items-center max-w-6xl mx-auto bg-[var(--foreground)]/70 dark:bg-[var(--foreground)]/30 mt-5 p-10 rounded-2xl  border  shadow-md">
            <MotionDiv
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 3.2 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h1 className="font-semibold dark:text-white text-xl mb-3">
                Web Development
              </h1>
              <div className="space-x-5 mt-2 flex">
                <Image src={html} alt="html" className="w-10 h-10 " />
                <Image src={css} alt="css" className="w-10 h-10 " />
                <Image src={js} alt="javascript" className="w-10 h-10 " />
                <Image src={ts} alt="typescript" className="w-10 h-10 " />
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 3.2 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h1 className="font-semibold dark:text-white text-xl mb-3">
                Frameworks & Library
              </h1>
              <div className="space-x-5 mt-2 flex">
                <Image src={react} alt="react" className="w-10 h-10 " />
                <Image src={next} alt="next" className="w-10 h-10 " />
                <Image src={tailwinds} alt="tailwinds" className="w-10 h-10 " />
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 3.2 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h1 className="font-semibold dark:text-white text-xl mb-3">
                Version Control
              </h1>
              <div className="space-x-5 mt-2 flex">
                <Image src={git} alt="git" className="w-10 h-10 " />
              </div>
            </MotionDiv>
          </div>

          <div className="mt-10 xl:mt-30 font-semibold">
            <div className="flex justify-center">
              <h1 className="text-3xl  dark:text-white">
                My <span className="text-[var(--primary-color)]">Projects</span>
              </h1>
            </div>
            <div className="card  max-w-6xl p-2  mx-auto justify-center items-center gap-5 rounded-md mt-5 text-white ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
                <div className="bg-[var(--foreground)]/70 dark:bg-[var(--foreground)]/40 shadow-md rounded-lg">
                  <figure>
                    <Image
                      src={caldrink}
                      alt="project"
                      className="w-full object-cover p-2"
                    />
                  </figure>
                  <div className="card-body p-5">
                    <h2 className="card-title">
                      เว็บคำนวณน้ำที่ต้องดื่มในแต่ละวัน
                    </h2>
                    <div className="flex gap-2 mt-5">
                      <button
                        className="btn bg-[var(--foreground)] p-2 rounded-xl"
                        disabled={true}
                      >
                        React
                      </button>
                      <button
                        className="btn bg-[var(--foreground)] p-2 rounded-xl"
                        disabled={true}
                      >
                        Tailwind CSS
                      </button>
                    </div>
                    <div className="card-actions justify-start flex gap-2">
                      <Link href="https://github.com/nonot23/CalDrink.githup.io">
                        <FaGithubSquare className="mt-5 size-[25px] hover:cursor-pointer " />
                      </Link>
                      <Link href="https://nonot23.github.io/CalDrink.githup.io/">
                        <HiOutlineExternalLink className="mt-5 size-[25px] hover:cursor-pointer " />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-[var(--foreground)]/70 dark:bg-[var(--foreground)]/40 shadow-md rounded-lg">
                  <figure>
                    <Image
                      src={course}
                      alt="project"
                      className="w-full object-cover p-2"
                    />
                  </figure>
                  <div className="card-body p-5">
                    <h2 className="card-title">เว็บคอร์สเรียนออนไลน์</h2>
                    <div className="flex gap-2 mt-5">
                      <button
                        className="btn bg-[var(--foreground)] p-2 rounded-xl"
                        disabled={true}
                      >
                        React
                      </button>
                      <button
                        className="btn bg-[var(--foreground)] p-2 rounded-xl"
                        disabled={true}
                      >
                        Tailwind CSS
                      </button>
                      <button
                        className="btn bg-[var(--foreground)] p-2 rounded-xl"
                        disabled={true}
                      >
                        Typescript
                      </button>
                    </div>
                    <div className="card-actions justify-start flex gap-2">
                      <Link href="https://github.com/nonot23/CourseFINAL">
                        <FaGithubSquare className="mt-5 size-[25px] hover:cursor-pointer " />
                      </Link>
                      <Link href="https://course-final.vercel.app">
                        <HiOutlineExternalLink className="mt-5 size-[25px] hover:cursor-pointer " />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-[var(--foreground)]/70 dark:bg-[var(--foreground)]/40 shadow-md rounded-lg">
                  <figure>
                    <Image
                      src={shoes}
                      alt="project"
                      className="w-full object-cover p-2"
                    />
                  </figure>
                  <div className="card-body p-5">
                    <h2 className="card-title">เว็บระบบตะกร้าสินค้า</h2>
                    <div className="flex gap-2 mt-5">
                      <button
                        className="btn bg-[var(--foreground)] p-2 rounded-xl"
                        disabled={true}
                      >
                        Html
                      </button>
                      <button
                        className="btn bg-[var(--foreground)] p-2 rounded-xl"
                        disabled={true}
                      >
                        Tailwind CSS
                      </button>
                      <button
                        className="btn bg-[var(--foreground)] p-2 rounded-xl"
                        disabled={true}
                      >
                        Javascript
                      </button>
                    </div>
                    <div className="card-actions justify-start flex gap-2">
                      <Link href="https://github.com/nonot23/nonot27.github.io">
                        <FaGithubSquare className="mt-5 size-[25px] hover:cursor-pointer " />
                      </Link>
                      <Link href="https://nonot23.github.io/nonot27.github.io/">
                        <HiOutlineExternalLink className="mt-5 size-[25px] hover:cursor-pointer " />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 xl:mt-30 font-semibold">
            <div id="contact" className="flex justify-center">
              <h1 className="text-3xl  dark:text-white">Contact</h1>
            </div>
            <div className=" text-white mx-auto  gap-5 p-10  max-w-6xl ">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-30  gap-y-3  justify-items-center items-center text-center">

                <div className="card bg-[var(--foreground)]/70 dark:bg-[var(--foreground)]/40 hover:bg-[var(--foreground)]/80 w-80 shadow-sm rounded-xl">
                  <figure className="px-10 pt-10">
                    <MdAttachEmail
                      className="w-full h-20 "
                    />
                  </figure>
                  <div className="card-body py-10 items-center text-center">
                    <h2 className="card-title text-xl ">Email</h2>
                    
                    <p className="mt-2">
                      giga12123@gmail.com
                    </p>
                  </div>
                </div>

                <div className="card bg-[var(--foreground)]/70 dark:bg-[var(--foreground)]/40 hover:bg-[var(--foreground)]/80 w-80  shadow-sm rounded-xl">
                  <figure className="px-10 pt-10">
                    <Link href="https://github.com/nonot23">
                        <FaGithubSquare className="w-full h-20  hover:cursor-pointer " />
                    </Link>
                  </figure>
                  <div className="card-body py-10 items-center text-center">
                    <h2 className="card-title text-xl ">Github</h2>
                    <p className="mt-2">
                     https://github.com/nonot23
                    </p>
                  </div>
                  
                </div>

                <div className="card bg-[var(--foreground)]/70 dark:bg-[var(--foreground)]/40 hover:bg-[var(--foreground)]/80 w-80 shadow-sm rounded-xl">
                  <figure className="px-10 pt-10">
                    <Link href="https://www.facebook.com/not2323/">
                        <FaFacebookSquare className="w-full h-20  hover:cursor-pointer " />
                    </Link>
                  </figure>
                  <div className="card-body py-10 items-center text-center">
                    <h2 className="card-title text-xl ">Facebook</h2>
                    
                    <p className="mt-2">
                      https://www.facebook.com/not2323/
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
