import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <div className="px-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;