import { createBrowserRouter } from "react-router-dom";
import Diseñoweb from "../pages/Diseñoweb";
import Inicio from "../components/inicio";


export const routes = createBrowserRouter([
    /* 
    {
        path: "/",
        element: <Inicio/>,
    },
    {
        path: "/about",
        element: <div>About</div>,
    },*/
    {
        path: "/",
        element: <Inicio/>
    },
    {
        path: "/disenoweb",
        element: <Diseñoweb/>
    },
]);