import { createBrowserRouter } from "react-router";
import Root from "../layout/root";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import Aboutus from "../pages/Aboutus/Aboutus";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/aboutus",
        element: <Aboutus />,
      },
    ],
  },
]);

export default router;
