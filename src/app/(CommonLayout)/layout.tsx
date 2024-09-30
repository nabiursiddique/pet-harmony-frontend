import Footer from "@/src/components/UI/footer";
import { Navbar } from "@/src/components/UI/Navbar/navbar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default layout;
