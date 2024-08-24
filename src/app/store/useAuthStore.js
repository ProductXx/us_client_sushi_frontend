import { create } from "zustand";
import { persist } from "zustand/middleware";
import Cookies from "js-cookie";

// Custom storage object to handle cookies
const cookieStorage = {
  getItem: (name) => {
    if (typeof window !== "undefined") {
      return Cookies.get(name);
    }
    return null;
  },
  setItem: (name, value) => {
    if (typeof window !== "undefined") {
      Cookies.set(name, value, {
        expires: 7,
        secure: true,
        sameSite: "Strict",
      }); // Set cookie with a 7-day expiry, secure, and sameSite options
    }
  },
  removeItem: (name) => {
    if (typeof window !== "undefined") {
      Cookies.remove(name);
    }
  },
};

// Helper function to check if the user is authenticated
const checkIsAuthenticated = () => {
  if (typeof window !== "undefined") {
    return !!cookieStorage.getItem("auth-token");
  }
  return false; // Return false during SSR
};

// Helper function to get user data from localStorage
const getUserDataFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const userData = localStorage.getItem("user-data");
    return userData ? JSON.parse(userData) : null;
  }
  return null; // Return null during SSR
};

export const useAuthStore = create(
  persist(
    (set) => ({
      isAuthenticated: typeof window !== "undefined" && checkIsAuthenticated(),
      user:
        typeof window !== "undefined" ? getUserDataFromLocalStorage() : null, // Load user data from localStorage only on client

      // Define userLogin function to set token and user data
      userLogin: (token, userData) => {
        cookieStorage.setItem("auth-token", token); // Set token in cookies
        localStorage.setItem("user-data", JSON.stringify(userData)); // Persist user data in localStorage
        set({ isAuthenticated: true, user: userData }); // Store user data in state
      },
      userLogout: () => {
        cookieStorage.removeItem("auth-token"); // Remove token from cookies
        localStorage.removeItem("user-data"); // Clear user data from localStorage
        set({ isAuthenticated: false, user: null }); // Clear user data from state
      },
    }),
    {
      name: "auth-storage", // Key used for storage
      storage: {
        getItem: (name) => {
          if (typeof window !== "undefined") {
            const authState = cookieStorage.getItem("auth-token")
              ? { isAuthenticated: true }
              : { isAuthenticated: false };
            return JSON.stringify(authState);
          }
          return null;
        },
        setItem: (name, value) => {
          // Do nothing here because we handle cookies directly above
        },
        removeItem: (name) => {
          // Do nothing here because we handle cookies directly above
        },
      }, // Custom storage object for zustand to manage state persistence
    }
  )
);
