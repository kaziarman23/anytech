import { createBrowserRouter } from "react-router";
import Root from "../layout/root";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";

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
    ],
  },
]);

export default router;
