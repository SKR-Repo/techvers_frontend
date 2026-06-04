import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div
      id="top"
      className="relative min-h-screen bg-background text-foreground overflow-x-hidden"
    >
      <Navbar />

      <main className="relative">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}