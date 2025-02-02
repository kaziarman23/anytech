import { Outlet } from "react-router";
import Footer from "../pages/Share/Footer";

const Root = () => {
  return (
    <div className="font-poppins">
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
