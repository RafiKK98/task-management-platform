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
import AddTask from "../components/AddTask";
import EditTask from "../components/EditTask";
import HomeError from "../components/HomeError";

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
        errorElement: <HomeError />
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: '',
                element: <DashboardHome />
            },
            {
                path: 'addTask',
                element: <AddTask />
            },
            {
                path: 'editTask/:taskId',
                element: <EditTask />,
                loader: ({ params }) => fetch(`https://task-management-platform-server-chi.vercel.app/tasks/${params.taskId}`),
            },
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