"use client";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav className="sticky top-0 z-20 dark:bg-[var(--foreground)]/40  bg-white dark:text-white ">
      <div className="container mx-auto flex justify-between font-semibold items-center p-8 max-w-6xl">
        <h1 className="text-3xl font-bold text-[var(--primary-color)]">
          Portfolio
        </h1>
        <button
          className="md:hidden text-white focus:outline-none "
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12" // close icon
                  : "M4 6h16M4 12h16M4 18h16" // hamburger
              }
            />
          </svg>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-20 left-0 w-full grid grid-cols-1 gap-10 p-6 bg-[var(--foreground)] text-center md:hidden"
              style={{ overflow: "hidden" }}
            >
              <li>
                <Link
                  href="#home"
                  className="block hover:text-[var(--primary-color)]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="block hover:text-[var(--primary-color)]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="block hover:text-[var(--primary-color)]"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="block hover:text-[var(--primary-color)]"
                >
                  Contact
                </Link>
              </li>
              <li>
                <ThemeToggle />
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
        <ul className="hidden md:grid md:grid-flow-col md:gap-10 md:mt-0">
          <li>
            <Link
              href="#home"
              className="block hover:text-[var(--primary-color)]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="block hover:text-[var(--primary-color)]"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="block hover:text-[var(--primary-color)]"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="block hover:text-[var(--primary-color)]"
            >
              Contact
            </Link>
          </li>
          <li className="hidden md:block ">
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
}
