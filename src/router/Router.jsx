import { createBrowserRouter } from "react-router";
import Root from "../layout/root";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import Aboutus from "../pages/Aboutus/Aboutus";
import Contactus from "../pages/Contactus/Contactus";
import AnyCaaS from "../pages/AnyCaaS/AnyCaaS";
import AnyBaaS from "../pages/AnyBaaS/AnyBaaS";
import AnyPaaS from "../pages/AnyPaaS/AnyPaaS";

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
      {
        path: "/contactus",
        element: <Contactus />,
      },
      {
        path: "/anycaas",
        element: <AnyCaaS />,
      },
      {
        path: "/anybaas",
        element: <AnyBaaS />,
      },
      {
        path: "/anypaas",
        element: <AnyPaaS />,
      },
    ],
  },
]);

export default router;
