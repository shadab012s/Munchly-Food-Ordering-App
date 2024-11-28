import React,{lazy,Suspense, useEffect,useState} from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { CDN_URL } from "./utils/constants";
import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Footer from "./components/Footer";


// import Grocery from "./components/Grocery";

// using lazy loading or ondemand loading
const Grocery=lazy(()=>import("./components/Grocery"));

const AppLayout = () => {
    // for making changes in user context
    const [userName, setUserName] = useState();
  
    useEffect(() => {
      // making API call and send username and password
      const data = {
        name: "shadab",
      };
      setUserName(data.name);
    }, []);
  
    return (
      // using redux store
      <Provider store={appStore}>
        {/* Provider with UserContext to manipulate its data */}
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <div className="app flex flex-col min-h-screen"> 
            <Header />
            {/* Main content area */}
            <div className="flex-grow">
              <Outlet />
            </div>
            <Footer />
          </div>
        </UserContext.Provider>
      </Provider>
    );
  };
  
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
        },
    {
        path:"/cart",
        element:<Cart/>
    }],
    errorElement:<Error/>,

},


]);
const root= ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout/>);
root.render(<RouterProvider router={approuter}/>);