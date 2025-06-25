'use client'
import Not from "../../../public/img/not.png";
import Image from "next/image";
import Link from "next/link";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLine } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import MotionDiv from "./Motion";

export default function Section() {
  return (
    <section>
      <div className="container mx-auto p-8  max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 lg:mt-20 xl:mt-40 dark:text-white">
          <MotionDiv
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl font-bold mb-4">Hi, I’M </h1>
            <h1 className="text-5xl font-bold mb-4 text-[var(--primary-color)]">
              <TypeAnimation
                sequence={[
                  "Nattapol Sonthirak (Not)",
                  1300,
                ]}
                wrapper="span"
                cursor={true}
                repeat={0} // แสดงรอบเดียว
                style={{ display: "inline-block" }}
              />
            </h1>
            <p className="text-lg max-w-2xl">
              I&#39;m determined to become a Frontend Web Developer, even though
              my previous work experience was in a different field.
            </p>
            <div className="flex space-x-2">
              <Link href="https://www.facebook.com/not2323/">
                <FaSquareFacebook className="mt-5 size-[25px] hover:cursor-pointer " />
              </Link>
              <Link href="https://www.instagram.com/no_nonot23/">
                <FaInstagram className="mt-5 size-[25px] hover:cursor-pointer " />
              </Link>
              <Link href="https://line.me/ti/p/l9uBM80HZL">
                <FaLine className="mt-5 size-[25px] hover:cursor-pointer " />
              </Link>
              <Link href="https://github.com/nonot23">
                <FaSquareGithub className="mt-5 size-[25px] hover:cursor-pointer " />
              </Link>
            </div>

            <button className="mt-5 px-5 py-3 bg-[var(--primary-color)] hover:cursor-pointer text-white rounded-lg hover:bg-[var(--foreground)] transition-colors duration-300">
              Download CV
            </button>
          </MotionDiv>
          <div className="flex justify-center xl:justify-end mt-15 lg:mt-0 xl:-mt-10 ">
            <div className="absolute w-[350px] h-[350px] md:w-[400px] md:h-[400px] xl:w-[440px] xl:h-[440px] rounded-full bg-[var(--primary-color)] blur-[50px] opacity-30 z-0"></div>
            <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] xl:w-[420px] xl:h-[420px] rounded-full bg-[var(--primary-color)] flex items-center justify-center z-10 shadow-xl">
              <div className="xl:w-[380px] xl:h-[380px] bg-[var(--foreground)] rounded-full flex items-center justify-center shadow-2xl">
                <MotionDiv
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={Not}
                    alt="Not"
                    className="w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full object-cover"
                  />
                </MotionDiv>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
