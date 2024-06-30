import {  createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";


 const router = createBrowserRouter([
   {
    path: '/',
    element: <Main/>,
    errorElement: <div>Not found</div>,
    children: [
        {
            path: '/',
            element: <Home/>,
            errorElement: <div>Not found</div>
        }
    ]
   }
])

export default router; 