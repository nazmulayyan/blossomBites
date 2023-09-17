import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../Pages/Shared/Secret/Secret";
import Dashboard from "../LayOut/Dashboard";
import MyCart from "../Pages/Dasboard/MyCart/MyCart";
import AllUsers from "../Pages/Dasboard/AllUsers/AllUsers";
import AddItem from "../Pages/Dasboard/AddItem/AddItem";
import AdminRoutes from "./AdminRoutes";


 export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'menu',
                element:<Menu></Menu>
            },
            {
                path:'order/:category',
                element:<Order></Order>
            },
            // {
            //     path:'order/salad',
            //     element:<Order></Order>
            // },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'singup',
                element:<SingUp></SingUp>
            },
            {
                path: 'secret',
                element: <PrivateRoutes>
                    <Secret></Secret>
                </PrivateRoutes>
            }
        ]
    },
    {
        path:'dashboard',
        element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children:[
            {
                path:'mycart',
                element:<MyCart></MyCart>
            },
            {
                path:'allusers',
                element:<AllUsers></AllUsers>
            },
            {
                path: 'addItem',
                element: <AdminRoutes><AddItem></AddItem></AdminRoutes>
            }
        ]
    }
]);