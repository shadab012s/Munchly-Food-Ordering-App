import RestaurantCard from "./RestaurantCard";
import reslist from "../utils/mockData";
const Body=()=>{
    return(<div className="body">
        <div className="search">search</div>
        <div className="restaurant-container">
       {/* <Resturantcard resData={reslist[0]}/>  */}

       {/* using map to pass reslist data */}

       {reslist.map((restaurant)=>
    (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))}
        
        
        
        
        </div>
    </div>)
}
export default Body;