import { createBrowserRouter } from "react-router";
import Root from "../layout/Root.jsx";
import Home from "../pages/Home/Home.jsx";
import Services from "../pages/Services/Services.jsx";
import Aboutus from "../pages/Aboutus/Aboutus.jsx";
import Contactus from "../pages/Contactus/Contactus.jsx";
import AnyCaaS from "../pages/AnyCaaS/AnyCaaS.jsx";
import AnyBaaS from "../pages/AnyBaaS/AnyBaaS.jsx";
import AnyPaaS from "../pages/AnyPaaS/AnyPaaS.jsx";

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
