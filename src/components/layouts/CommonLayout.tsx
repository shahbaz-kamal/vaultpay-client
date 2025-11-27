import type React from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footer";

interface IProps {
  children: React.ReactNode;
}
export function CommonLayout({ children }: IProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar></Navbar>
      <div className="grow-1 mt-20"> {children}</div>
      <Footer></Footer>
    </div>
  );
}
