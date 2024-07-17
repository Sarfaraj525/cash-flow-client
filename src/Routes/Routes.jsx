import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import DashBoard from "../Layout/Dashboard";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
        ]
    },
    {
        path: "/dashboard",
        element: <DashBoard></DashBoard>,
        children: [
            // Define child routes here if needed
        ]
    },
]);

export default router;
