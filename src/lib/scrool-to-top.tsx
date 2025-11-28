import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto", // use "smooth" if you want smooth scrolling
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
