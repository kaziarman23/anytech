import { Outlet } from "react-router";
import Footer from "../pages/Share/Footer";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div className="font-poppins">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
