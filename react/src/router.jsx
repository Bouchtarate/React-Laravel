import { createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import User from "./views/User";
import NotFound from "./views/NotFound";
const router = createBrowserRouter([
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/users", element: <User /> },
    { path: "*", element: <NotFound /> },
]);

export default router;
