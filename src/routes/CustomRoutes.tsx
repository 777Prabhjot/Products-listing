import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "../App";
import CheckOut from "../pages/CheckOut";
import Navbar from "../components/Navbar";
import ConfirmOrder from "../pages/ConfirmOrder";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/checkout",
        element: <CheckOut />,
      },
      {
        path: "/confirm",
        element: <ConfirmOrder />,
      },
    ],
  },
]);
