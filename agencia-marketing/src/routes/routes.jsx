import { createBrowserRouter } from "react-router-dom";
import Diseñoweb from "../pages/Diseñoweb";
import Inicio from "../components/inicio";
import Redesociales from "../pages/Redesociales";
import ComoTrabajamos from "../pages/ComoTrabajamos";
import Quienesomos from "../pages/Quienesomos";
import Formulario from "../pages/formulario";


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
        element: <Inicio />
    },
    {
        path: "/disenoweb",
        element: <Diseñoweb />
    },
    {
        path: "/redssociales",
        element: <Redesociales />
    },
    {
        path: "/trabajamos",
        element: <ComoTrabajamos />
    },
    {
        path: "/somos",
        element: <Quienesomos />
    },
    {
        path: "/Formulario",
        element: <Formulario/>
    }
]);