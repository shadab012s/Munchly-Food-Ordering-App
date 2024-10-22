import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { CDN_URL } from "./utils/constants";
import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/error";
import RestaurantMenu from "./components/RestaurantMenu";



const AppLayout=()=>
{
    return (
        <div className="app"> 
        <Header/>
        {/* <Body/> */}
        <Outlet/>
        </div>
    )
}
// to route to other pages with  changes in url
const approuter=createBrowserRouter([
{
    path:"/",
    element:<AppLayout/>,
   
    children:[                  // adding children of header so that  heder should be present at different pages
        {
        path:"/",
        element:<Body/>
        },
        {
        path:"/about",
        element:<About/>
         },
         {
        path:"/contact",
        element:<Contact/>
         },{
         path:"/restaurants/:resid",
         element:<RestaurantMenu/>,

         },],
    errorElement:<Error/>,

},


]);
const root= ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout/>);
root.render(<RouterProvider router={approuter}/>);