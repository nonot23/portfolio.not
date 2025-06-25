import Link from "next/link";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLine } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[var(--foreground)]/40 font-semibold shadow-2xl dark:text-white text-lg rounded p-8">
      <ul className="flex justify-center text-center gap-5 ">
        <li>
          <Link href="#home" className="block hover:text-[var(--primary-color)]">
            Home
          </Link>
        </li>
        <li>
          <Link href="#about" className="block hover:text-[var(--primary-color)]">
            About
          </Link>
        </li>
        <li>
          <Link href="#projects" className="block hover:text-[var(--primary-color)]">
            Projects
          </Link>
        </li>
        <li>
          <Link href="#contact" className="block hover:text-[var(--primary-color)]">
            Contact
          </Link>
        </li>
      </ul>
      <div className="flex justify-center gap-5">
              <Link href="https://www.facebook.com/not2323/">
                <FaSquareFacebook className="mt-5 size-[30px] hover:cursor-pointer " />
              </Link>
              <Link href="https://www.instagram.com/no_nonot23/">
                <FaInstagram className="mt-5 size-[30px] hover:cursor-pointer " />
              </Link>
              <Link href="https://line.me/ti/p/l9uBM80HZL">
                <FaLine className="mt-5 size-[30px] hover:cursor-pointer " />
              </Link>
              <Link href="https://github.com/nonot23">
                <FaSquareGithub className="mt-5 size-[30px] hover:cursor-pointer " />
              </Link>
            </div>
      <aside className="flex justify-center mt-5">
        <p>© {new Date().getFullYear()} nattpol | All rights reserved.</p>
      </aside>
    </footer>
  );
}
