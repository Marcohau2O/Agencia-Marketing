import { createBrowserRouter } from "react-router-dom";
import Diseñoweb from "../pages/Diseñoweb";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <div>Home</div>,
    },
    {
        path: "/about",
        element: <div>About</div>,
    },
    {
        path: "/disenoweb",
        element: <Diseñoweb/>
    },
]);