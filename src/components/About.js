import User from "./user";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
const About =()=>{
    return(

        <div>
            <h1>this is a about page</h1>
            {/* <User name={"Munchly"} location={"delhi"}/> */}
            <UserContext.Consumer>
            {
                ({loggedInUser})=><h1 className="text-4xl font-bold">{loggedInUser}</h1>
            }
        </UserContext.Consumer>
            
        <UserClass name={"Munchly"} location={"delhi"}/>
   
        </div>
         )}

    export default About;