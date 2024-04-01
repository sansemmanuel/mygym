import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Analytics } from "@vercel/analytics/react"
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <Analytics></Analytics>
    </>
  );
};

export default Layout;
