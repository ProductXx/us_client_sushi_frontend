"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { IconX } from "@tabler/icons-react";
import useSidebarStore from "../store/useSideBarStore";

const sidebarVariants = {
  hidden: {
    x: "-100%",
    opacity: 0,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  visible: {
    x: "0%",
    opacity: 1,
    transition: {
      x: { stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: {
    x: "-100%",
    opacity: 0,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
};

function Sidebar() {
  const sidebarRef = useRef(null);
  const { isSidebarVisible, closeSidebar } = useSidebarStore();

  const handleClickOutside = useCallback(
    (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
    },
    [closeSidebar]
  );

  const handleScroll = useCallback(() => {
    closeSidebar();
  }, [closeSidebar]);

  useEffect(() => {
    if (isSidebarVisible) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
      window.addEventListener("scroll", handleScroll);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("touchstart", handleClickOutside);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isSidebarVisible, handleClickOutside, handleScroll]);

  return (
    <motion.div
      ref={sidebarRef}
      className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white z-50 flex flex-col"
      initial="hidden"
      animate={isSidebarVisible ? "visible" : "hidden"}
      exit="exit"
      variants={sidebarVariants}
    >
      <div className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Sidebar</h1>
        <button onClick={closeSidebar}>
          <IconX className="text-white w-6 h-6" />
        </button>
      </div>
      <nav className="mt-4 flex-grow">
        <div className="flex flex-col">
          <Link
            href="/"
            className="p-4 border-y text-xl font-bold hover:bg-gray-700"
            onClick={closeSidebar}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="p-4 border-y text-xl font-bold hover:bg-gray-700"
            onClick={closeSidebar}
          >
            About
          </Link>
          <Link
            href="/cart"
            className="p-4 border-y text-xl font-bold hover:bg-gray-700"
            onClick={closeSidebar}
          >
            Your Cart
          </Link>
          <Link
            href="/contact"
            className="p-4 border-y text-xl font-bold hover:bg-gray-700"
            onClick={closeSidebar}
          >
            Contact
          </Link>
        </div>
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
