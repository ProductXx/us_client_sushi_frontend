// hoc/withoutAuth.js
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "next/router";
import { useEffect } from "react";

const withoutAuth = (WrappedComponent) => {
  return (props) => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    const router = useRouter();

    useEffect(() => {
      if (isAuthenticated) {
        router.push("/");
      }
    }, [isAuthenticated]);

    return <WrappedComponent {...props} />;
  };
};

export default withoutAuth;
