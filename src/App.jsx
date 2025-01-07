import NotFound from "./components/404/Notfound.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/contact/contact.jsx";
import Hero from "./components/hero/Hero.jsx";
import Portfolio from "./components/portfolio/portfolio.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";

let router = createBrowserRouter([
  {
    index: true,
    element: <Hero />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "portfolio",
    element: <Portfolio />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
