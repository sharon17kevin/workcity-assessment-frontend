import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="bg-primary">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;