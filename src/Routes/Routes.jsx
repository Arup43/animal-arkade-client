import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Blogs from "../pages/Blogs/Blogs";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import AddToy from "../pages/AddToy/AddToy";
import UpdateToy from "../pages/UpdateToy/UpdateToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Registration></Registration>
        },
        {
            path: '/blogs',
            element: <Blogs></Blogs>
        },
        {
            path: '/all-toys',
            element: <AllToys></AllToys>
        },
        {
            path: '/my-toys',
            element: <MyToys></MyToys>
        },
        {
            path: '/toy-details/:id',
            element: <ToyDetails></ToyDetails>
        },
        {
            path: '/add-toy',
            element: <AddToy></AddToy>
        },
        {
            path: '/update-toy/:id',
            element: <UpdateToy></UpdateToy>
        }
    ]
  },
  {
    path: "*",
    element: <NotFound></NotFound>
  }
]);

export default router;