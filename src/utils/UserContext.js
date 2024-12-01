
    //context act as global variable inside an app

import { createContext } from "react";

    // it takes object and work as gloabal objext
const UserContext=createContext({
loggedInUser:"default user"
}); 
export default UserContext;