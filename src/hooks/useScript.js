import { useEffect } from "react";

const useScript = (url, pathname) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [pathname, url]);
};

export default useScript;
