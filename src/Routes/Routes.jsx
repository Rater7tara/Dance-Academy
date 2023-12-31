import {
    Navigate,
    createBrowserRouter,
} from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import ErrorPage from "../Layout/ErrorPage";
import LoginLayout from "../Layout/LoginLayout";
import Main from "../Layout/Main";
import ClassesPage from "../pages/ClassesPage/ClassesPage/ClassesPage";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import ManageClass from "../pages/Dashboard/ManageClass/ManageClass";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import Home from "../pages/Home/Home/Home";
import InstructorPage from "../pages/InstructorPage/InstructorPage/InstructorPage";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Navigate to="/home"></Navigate>
            },
            {
                path:'login',
                element: <Login></Login>
            },
            {
                path:'register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: "/",
        element: <Main></Main>,
        children: [
          {
            path: '/home',
            element: <Home></Home>
          },
          {
            path: '/instructors',
            element:<InstructorPage></InstructorPage>
          },
          {
            path:'/classes',
            element:<ClassesPage></ClassesPage>
          }
        ]
      },
      {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
          {
            path: 'mycart',
            element: <MyCart></MyCart>
          },
          {
            path: 'manageclass',
            element:<ManageClass></ManageClass>,
          },
          // Admin routes
          // {
          //   path: 'adminhome',
          //   element: <AdminRoute><AdminHome></AdminHome></AdminRoute>,
          // },
          {
            path: 'allusers',
            element: <AdminRoute><AllUsers></AllUsers></AdminRoute>,
          },
          {
            path: 'addclass',
            element: <AdminRoute><AddClass></AddClass></AdminRoute>
          },
          {
            path: 'myclasses',
            element: <AdminRoute><MyClasses></MyClasses></AdminRoute>
          }
        ]
      }

])