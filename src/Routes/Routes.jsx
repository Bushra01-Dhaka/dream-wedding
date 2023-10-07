import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/Error/Error";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/About/AboutUs";
import ServiceDetails from "../Pages/Service/ServiceDetails";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivateRoutes from "./PrivateRoutes";

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
        },
        {
          path:'/services/:id',
          element:<PrivateRoutes><ServiceDetails></ServiceDetails></PrivateRoutes>,
          loader: () => fetch('/services.json')
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/login',
          element: <Login></Login>
        }
      ]
    },
  ]);

export default router;