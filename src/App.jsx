import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import Footer from "./components/Footer/Footer";
// import Test from "./components/Test/Test";
import  Marketing from "./components/Marketing/Marketing.jsx"

function App() {
  const Layout = () => {
    return (
      <>
          <Header></Header>
        <div className="body-outlet ">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        { path: "/", element: <Homepage></Homepage> },
        { path: "/marketing", element: <Marketing
        ></Marketing> },
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
