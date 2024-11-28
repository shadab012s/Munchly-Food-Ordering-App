import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const RestaurantCard=(props)=>{ // props is like argument
    const{resData}=props;
    console.log(resData);
    
    // using usecontextin in cards
    const {loggedInUser}=useContext(UserContext);

    const{
        cloudinaryImageId,
        name,
        cuisines,
        costForTwo,
        avgRating,
        sla,
    }=resData; // functional chaining
    return(
        <div className="res-card m-4 p-4 w-[250px] bg-gray-200 shadow-lg rounded-lg hover:bg-gray-300">

            
            <img 
            className="res-logo rounded-lg w-[200px] h-[200px]"
            src={CDN_URL+cloudinaryImageId }/>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h5>{cuisines.slice(0,3).join(",")}</h5>
            <h5>{costForTwo}</h5>
            <h5>{avgRating} stars</h5>
            <h5>{sla.deliveryTime} minutes</h5>
            <h5>user : {loggedInUser}</h5>
            
        </div>
    );
};
// higher order component
// it takes functional component "restaurant card" as input and return new functional component with added features 
// and it does not modify existing features

export const withPrometedLabel=(RestaurantCard)=>
{
    return (props)=> // returning a functional component
    {
        return(
            <div>
                <label className="absolute bg-black text-white rounded-lg  p-2 ">
                    promoted
                    </label>
                    <RestaurantCard {...props}/>
                
            </div>
        );
    };
};
export default RestaurantCard;