import React,{lazy,Suspense, useEffect,useState} from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { CDN_URL } from "./utils/constants";
import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";

// using lazy loading or ondemand loading
const Grocery=lazy(()=>import("./components/Grocery"));

const AppLayout=()=>
{
        // for makingchanges in user context
    const [userName,setUserName]=useState();
    
    useEffect(()=>
    {
        // making api call and send username and password
        const data={
            name:"shadab",
        }
        setUserName(data.name);
    },[])

    return (
        <div className="app"> 

        {/* .provider with user context to manipulate its data by wrapping the funvtional component inside it*/}
        <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
        <Header/>
        {/* <Body/> */}
        <Outlet/>
        </UserContext.Provider>
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

         },
        {
        path:"/grocery",
        element:<Suspense 
                fallback={<h1>loading...</h1>}>
                <Grocery/>
                </Suspense>
        }],
    errorElement:<Error/>,

},


]);
const root= ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout/>);
root.render(<RouterProvider router={approuter}/>);