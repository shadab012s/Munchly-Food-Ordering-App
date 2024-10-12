import RestaurantCard from "./RestaurantCard";
import reslist from "../utils/mockData";
import { useState } from "react";
const Body=()=>{

    const [ListOfRestaurants,setListOfRestaurants]=useState(reslist);
    return(
    <div className="body">
      

        <div className="filter">
            <button className="filter-btn" 
            onClick={()=>
            {
                const filterdList=ListOfRestaurants.filter(
                    (res)=>res.info.avgRating>4.2
                );
                setListOfRestaurants(filterdList);
            }
            }
            >
               Top rated  Restaurants
            </button>
        </div>
        <div className="restaurant-container">
       {/* <Resturantcard resData={reslist[0]}/>  */}

       {/* using map to pass reslist data */}

       {ListOfRestaurants.map((restaurant)=>
    (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))}
        
        
        
        
        </div>
    </div>)
}
export default Body;