import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import DashBoard from "../Layout/Dashboard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <DashBoard></DashBoard>, 
      children: [

      ]
    },
  ]);


  export default router;