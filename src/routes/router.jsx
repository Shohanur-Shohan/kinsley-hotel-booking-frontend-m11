import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout/MainLayout";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Rooms from "../pages/Rooms/Rooms";
import MyBookings from "../pages/MyBookings/MyBookings";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Gallery from "../pages/Gallery/Gallery";
import RoomDetails from "../pages/RoomDetails/RoomDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/rooms",
        element: <Rooms />,
      },
      {
        path: "/room-details/:id",
        element: <RoomDetails />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/my-bookings",
        element: <MyBookings />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
