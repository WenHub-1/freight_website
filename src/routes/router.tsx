import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { APP_ROUTES } from "../lib";
import ErrorElement from "../components/common/error-element";
import MainLayout from "../components/layouts/main-layout";

const Dashboard = lazy(() => import("../pages/dashboard/dashboard"));
const Login = lazy(() => import("../pages/login"));
const Theme = lazy(() => import("../pages/theme"));
const ShipWithUs = lazy(() => import("../pages/ship-with-us/ship-with-us.tsx"));

const appRoutes = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: APP_ROUTES.login,
        element: <Login />,
      },
      {
        path: APP_ROUTES.home,
        index: true,
        element: <Dashboard />,
      },
      {
        path: APP_ROUTES.theme,
        element: <Theme />,
      },
      {
        path: APP_ROUTES.shipWithUs,
        element: <ShipWithUs />,
      },
    ],
  },
]);

export default appRoutes;
