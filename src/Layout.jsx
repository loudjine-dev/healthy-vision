import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Layout() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>

      {/* ✅ لو الصفحة الحالية مو /about أظهر الفوتر العام */}
      {location.pathname !== "/about" && <Footer />}
    </>
  );
}

export default Layout;
