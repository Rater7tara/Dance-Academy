import {
    Navigate,
    createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "../Layout/ErrorPage";
import LoginLayout from "../Layout/LoginLayout";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [

        ]
    }

])