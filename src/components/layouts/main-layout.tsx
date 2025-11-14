import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../common/header.tsx";
import Footer from "../common/footer.tsx";

const MainLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
