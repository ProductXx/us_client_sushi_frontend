// hoc/withAuth.js
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "next/router";
import { useEffect } from "react";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated) {
        router.push("/auth/login");
      }
    }, [isAuthenticated]);

    if (!isAuthenticated) {
      return null; // Or a loading spinner
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
