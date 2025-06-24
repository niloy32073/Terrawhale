import {
  createBrowserRouter,
  // RouterProvider,
} from "react-router-dom";
import Main from "../layouts/main/Main";
import Approach from "../pages/Approach/Approach";
import Contact from "../pages/Contact/Contact";
import Investment from "../pages/Investment/Investment";
import Login from "../pages/Login/Login";
import News from "../pages/News/News";
// import Signup from "../pages/Signup/Signup";
import Team from "../pages/Team/Team";
import WhoWeAre from "../pages/WhoWeAre/WhoWeAre";
import Privacy from "../pages/Privacy/Privacy";
import Home from "../ui/home/Home";
import Dashboard from "../dashbord/Dashboard";
import MainDashboard from "../dashbord/MainDashboard";
import NewsPost from "../dashbord/Dashboard-pages/News";
import Blog from "../dashbord/Dashboard-pages/Blog";
import ContactPost from "../dashbord/Dashboard-pages/ContactPost";
import TeamPost from "../dashbord/Dashboard-pages/TeamPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/who-we-are",
        element: <WhoWeAre />,
      },

      {
        path: "/privacy-and-policy",
        element: <Privacy />,
      },

      {
        path: "/approach",
        element: <Approach />,
      },

      {
        path: "/team",
        element: <Team />,
      },

      {
        path: "/investments",
        element: <Investment />,
      },

      {
        path: "/news",
        element: <News />,
      },

      {
        path: "/get-in-touch",
        element: <Contact />,
      },

      {
        path: "/login",
        element: <Login />,
      },

      // {
      //     path: "/signup",
      //     element: <Signup />
      // },
    ],
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <Blog></Blog>,
      },
      {
        path: "/dashboard/news",
        element: <NewsPost></NewsPost>,
      },
      {
        path: "/dashboard/contact",
        element: <ContactPost></ContactPost>,
      },
      {
        path: "/dashboard/team",
        element: <TeamPost></TeamPost>,
      },
      {
        path: "/dashboard/demo",
        element: <MainDashboard></MainDashboard>,
      },
    ],
  },
]);

export default router;
