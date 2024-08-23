'use client'
// context/AuthContext.js
import { createContext, useContext, useState, useEffect } from "react";
import { useSession } from "next-auth/react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { data: session, status } = useSession();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (status === "authenticated") {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [status]);

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
