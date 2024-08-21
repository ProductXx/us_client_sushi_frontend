import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { debounce } from "lodash";

const useCurrentPath = () => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState(router.asPath);

  useEffect(() => {
    // Debounce the path update to avoid frequent updates
    const handleRouteChange = debounce((url) => {
      setCurrentPath(url);
    }, 200); // Adjust the debounce delay as needed

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return currentPath;
};

export default useCurrentPath;
