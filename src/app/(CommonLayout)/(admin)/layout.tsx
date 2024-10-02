"use client";

import { useState } from "react";
import Container from "@/src/components/UI/Container";
import Sidebar from "@/src/components/UI/Sidebar";
import { ReactNode } from "react";
import { Button } from "@nextui-org/button";

const Layout = ({ children }: { children: ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <Container>
      <div className="relative flex">
        {/* Sidebar section */}
        <div
          className={`fixed top-0 left-0 z-40 h-full w-[250px] transition-transform duration-300 bg-default-100 p-2 overflow-y-auto md:static md:w-1/4 ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }`}
        >
          <Sidebar />
        </div>

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/50 md:hidden"
            onClick={toggleSidebar}
          ></div>
        )}

        {/* Main content area */}
        <div className="flex-1 w-full md:w-3/4 p-4">
          {/* Toggle Button */}
          <Button
            className="fixed top-14 left-0 z-50 p-2 md:hidden"
            isIconOnly
            color="default"
            aria-label="Toggle Sidebar"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? "<" : ">"}
          </Button>

          {/* Children (main content) */}
          {children}
        </div>
      </div>
    </Container>
  );
};

export default Layout;
