import React from "react";
import CommonSections from "../components/CommonSections";

const MainLayout = ({ children }) => {
  return (
    <>
      {children}

      {/* ===== Common for all pages ===== */}
      <CommonSections />
    </>
  );
};

export default MainLayout;
