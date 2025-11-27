import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { APP_ROUTES } from "../lib";
import ErrorElement from "../components/common/error-element";
import MainLayout from "../components/layouts/main-layout";

const Dashboard = lazy(() => import("../pages/dashboard/dashboard"));
const Login = lazy(() => import("../pages/login"));
const Theme = lazy(() => import("../pages/theme"));
const ShipWithUs = lazy(() => import("../pages/ship-with-us/ship-with-us.tsx"));
const Partners = lazy(() => import("../pages/partners/partners.tsx"));
const ContactUs = lazy(
  () => import("../pages/company/contact-us/contact-us.tsx"),
);
const AboutUs = lazy(() => import("../pages/company/about-us/about-us.tsx"));
const Careers = lazy(() => import("../pages/company/careers/careers.tsx"));

const BecomeADriver = lazy(
  () => import("../pages/become-a-driver/become-a-driver.tsx"),
);

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
      {
        path: APP_ROUTES.becomeADriver,
        element: <BecomeADriver />,
      },
      {
        path: APP_ROUTES.partners,
        element: <Partners />,
      },
      {
        path: APP_ROUTES.contactUs,
        element: <ContactUs />,
      },
      {
        path: APP_ROUTES.aboutUs,
        element: <AboutUs />,
      },
      {
        path: APP_ROUTES.careers,
        element: <Careers />,
      },
    ],
  },
]);

export default appRoutes;
