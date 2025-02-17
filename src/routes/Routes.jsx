import Error from "@/components/ui/Shared/Error";
import Layout from "@/layouts/Layout";
import About from "@/pages/About";
import Cart from "@/pages/Cart";
import ContactUs from "@/pages/ContactUs";
import Faq from "@/pages/Faq";
import FruitBox from "@/pages/FruitBox";
import Home from "@/pages/Home";
import HowitWorks from "@/pages/HowitWorks";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/fruit-box",
        element: <FruitBox />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/how-it-works",
        element: <HowitWorks />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);
