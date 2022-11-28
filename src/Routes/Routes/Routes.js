import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from "../../Layout/Main";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import Blog from "../../Pages/Blog/Blog";
import Catagory from "../../Pages/Catagory/Catagory";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Myorders from "../../Pages/Dashboard/Myorders";
import MyProduct from "../../Pages/Dashboard/MyProduct/MyProduct";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import DisplayEror from "../../Pages/Shared/DisplayEror/DisplayEror";
import Singup from "../../Pages/Singup/Singup";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";


const router=createBrowserRouter([

{
    path:'/',
    element:<Main></Main>,
    errorElement:<DisplayEror></DisplayEror>,
    children:[

        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/singup',
            element:<Singup></Singup>
        },
        {
            path:'/category/:id',
            element:<PrivateRoutes><Catagory></Catagory></PrivateRoutes>,
            loader:({params})=>{
               return fetch(`http://localhost:5000/catagorie/${params.id}`)
            }
        }
    ]
},
{
    path:'/dashboard',
    element:<PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
    errorElement:<DisplayEror></DisplayEror>,
    children:[
        {
            path:'/dashboard',
            element:<Myorders></Myorders>
        },
        {
            path:'/dashboard/allusers',
            element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
            path:'/dashboard/addproduct',
            element:<AddProduct></AddProduct>
        },
        {
            path:'/dashboard/myproduct',
            element:<MyProduct></MyProduct>
            
        },
        {
            path:'/dashboard/payment/:id',
            element:<Payment></Payment>,
            loader:({params})=>{
                return fetch(`http://localhost:5000/bookings/${params.id}`)
             }
        }
    ]
}




])

export default router;