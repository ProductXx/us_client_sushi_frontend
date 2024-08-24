"use client";

import React, { useEffect, useRef, useCallback, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { IconX } from "@tabler/icons-react";
import useSidebarStore from "../store/useSideBarStore";
import { useAuthStore } from "@/app/store/useAuthStore";
import { toast } from "react-hot-toast";

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

  // Use useState to hold client-side state
  const [isClient, setIsClient] = useState(false);
  const { user, isAuthenticated, userLogout } = useAuthStore((state) => ({
    user: state.user,
    isAuthenticated: state.isAuthenticated,
    userLogout: state.userLogout,
  }));

  // Ensure that we are on the client-side before accessing client-specific state
  useEffect(() => {
    setIsClient(true); // Set to true on component mount, only runs on client
  }, []);

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

  const handleLogout = () => {
    userLogout();
    closeSidebar();
    toast.success("Logged out successfully!");
  };

  return (
    <motion.div
      ref={sidebarRef}
      className="fixed main-font top-0 left-0 w-64 h-full bg-gray-800 text-white z-50 flex flex-col"
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
      {isClient && !isAuthenticated && (
        <div className="p-4 bg-gray-700 text-center">
          <Link href="/auth/login" onClick={closeSidebar}>
            <button className="gradient-btn rounded-full">
              Login
            </button>
          </Link>
        </div>
      )}
      <motion.div
        className="p-4 text-center bg-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.3 } }}
      >
        {isClient && isAuthenticated && user && (
          <div className="bg-gray-700 text-start flex flex-col gap-2">
            <p className="font-bold">{user.username}</p>
            <p className="text-sm">{user.email}</p>
            <p className="text-sm">{user?.address}</p>
            <button
              onClick={handleLogout}
              className=" mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full"
            >
              Logout
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default Sidebar;
