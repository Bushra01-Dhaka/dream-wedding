import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/Error/Error";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/About/AboutUs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,
      children: [
        {
            path:'/',
            element:<Home></Home>,
            loader:() => fetch('/services.json')
        },
        {
          path: '/about',
          element: <AboutUs></AboutUs>
        }
      ]
    },
  ]);

export default router;