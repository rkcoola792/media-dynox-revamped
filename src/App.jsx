import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import Footer from "./components/Footer/Footer";
// import Test from "./components/Test/Test";

import { ShiftingDropDown } from "./components/HeaderNew/HeaderNew.jsx";
import AboutUS from "./components/Pages/Company/AboutUS/AboutUS.jsx";
import Team from "./components/Pages/Company/Team/Team.jsx";
import { Work } from "@mui/icons-material";
import Career from "./components/Pages/Career/Career.jsx";
import Technology from "./components/Pages/Services/Design/Technology/Technology.jsx";
import Business from "./components/Pages/Services/Business/Business.jsx";
import Marketing from "./components/Pages/Marketing/Marketing.jsx";
import Design from "./components/Pages/Services/Design/Design.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import ReachUS from "./components/Pages/ReachUs/ReachUS.jsx";
// import Scrollbar from "smooth-scrollbar";

function App() {
  // Scrollbar.init(document.querySelector("body"));
  const Layout = () => {
    return (
      <div className="my-scrollbar">
          <Header></Header>
          {/* <ShiftingDropDown></ShiftingDropDown> */}
        <div className="body-outlet ">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        { path: "/", element: <Homepage/> },
        { path: "/marketing", element: <Marketing/>},
        { path: "/about-us", element: <AboutUS/> },
        { path: "/team", element: <Team/> },
        { path: "/work", element: <Work/> },
        { path: "/career", element: <Career/> },
        { path: "/technology", element: <Technology/> },
        { path: "/business", element: <Business/> },
        { path: "/design", element: <Design/> },
        { path: "/blogs", element: <Blogs/> },
        { path: "/reach-us", element: <ReachUS/> },
       
      ],
    },
  ]);

  return (
    <div className="App   ">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
