import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../components/Home";
import App from "../App";
import Dashboard from "../components/Dashboard";
import DashboardHome from "../components/DashboardHome";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            }
        ],
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: '',
                element: <DashboardHome />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <SignUp />
    },
]);

export default router;