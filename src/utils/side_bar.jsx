"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { IconX } from "@tabler/icons-react";

const sidebarVariants = {
  hidden: {
    x: "-100%",
    opacity: 0,
  },
  visible: {
    x: "0%",
    opacity: 1,
    transition: {
      stiffness: 300,
      damping: 30,
    },
  },
  exit: {
    x: "-100%",
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
};

function Sidebar({ isVisible, onClose }) {
  const sidebarRef = useRef(null);

  const handleClickOutside = useCallback(
    (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        onClose();
      }
    },
    [onClose]
  );

  const handleScroll = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
      window.addEventListener("scroll", handleScroll);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("touchstart", handleClickOutside);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isVisible, handleClickOutside, handleScroll]);

  return (
    <motion.div
      ref={sidebarRef}
      className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white z-50 flex flex-col"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      exit="exit"
      variants={sidebarVariants}
    >
      <div className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Sidebar</h1>
        <button onClick={onClose}>
          <IconX className="text-white w-6 h-6" />
        </button>
      </div>
      <nav className="mt-4 flex-grow">
        <ul>
          <li className="p-4 border-y text-xl font-bold hover:bg-gray-700">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 border-y text-xl font-bold hover:bg-gray-700">
            <Link href="/about">About</Link>
          </li>
          <li className="p-4 border-y text-xl font-bold hover:bg-gray-700">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <motion.div
        className="p-4 text-center bg-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.3 } }}
      >
        <p>Some additional content or links here.</p>
      </motion.div>
    </motion.div>
  );
}

export default Sidebar;
