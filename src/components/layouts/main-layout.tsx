import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../common/header.tsx";
import Footer from "../common/footer.tsx";
import ScrollToTop from "@/lib/scrool-to-top.tsx";

const MainLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
