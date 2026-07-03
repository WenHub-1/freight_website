import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../common/header.tsx";
import Footer from "../common/footer.tsx";
import ScrollToTop from "@/lib/scrool-to-top.tsx";

const MainLayout: React.FC = () => {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <ScrollToTop />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
