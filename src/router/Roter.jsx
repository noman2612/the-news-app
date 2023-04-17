
import {
    createBrowserRouter,    
  } from "react-router-dom";
import Main from "../layout/Mane";
import Home from "../pages/home/Home/Home";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    
      children: [
        {
          path: 'home',
          element: <Home></Home>,
        },
      ],
    },
  ]);

  export default router