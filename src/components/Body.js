import RestaurantCard,{withPrometedLabel} from "./RestaurantCard";
import reslist from "../utils/mockData";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { BodyCard_URL } from "../utils/constants";

const Body=()=>{

   

    const [ListOfRestaurants,setListOfRestaurants]=useState([]);
    const[filteredRestaurants,setfilteredRestaurants]=useState([]); // making copy of original list
    // for search box value
    const [searchValue,Setsearchvalue]=useState("");
    //for promoted label, higher order component
    const RestaurantCardPromoted=withPrometedLabel(RestaurantCard);
    // for using context
    const {loggedInUser,setUserName}=useContext(UserContext);

    useEffect(()=>{
        fetchData()
    },[]);


   
      
    
    const fetchData = async () => {
  const timestamp = new Date().getTime(); // Add a unique query param
  const data = await fetch(`https://www.swiggy.com/mapi/homepage/getCards?lat=28.7040592&lng=77.10249019999999&_=${timestamp}`);
  

  const json = await data.json();
//   console.log(json);

  setListOfRestaurants(json?.data?.success?.cards[1].gridWidget?.gridElements?.infoWithStyle?.restaurants);
  setfilteredRestaurants(json?.data?.success?.cards[1].gridWidget?.gridElements?.infoWithStyle?.restaurants);
  console.log(json?.data?.success?.cards[1].gridWidget?.gridElements?.infoWithStyle);
};




  

    const onlineStatus=useOnlineStatus();
    //for checking network is present or not at user's end
    if(onlineStatus===false)
        return(
    <h1>Looks like you are offline!! Please check your internet connection;</h1>)

    if(ListOfRestaurants.length===0)
         return (<Shimmer/>)  // using shimmer for fake cards

   return  (
    <div className="body">
    

        <div className="filter flex ">
            {/* search box to filter out restaurant*/}
            <div className="search m-4 p-4">
            <input type="text" className="search-box border border-solid border-black rounded-lg m-4" value={searchValue}
             onChange={(e)=> // e is event handler
             {
                Setsearchvalue(e.target.value);
             }
             }/>
             
             {/* search button*/}
             
             <button className="px-4 py-1 bg-green-100 rounded-lg"  onClick={()=>
                {
                   const filteredRestaurants= ListOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchValue.toLowerCase()));
                   setfilteredRestaurants(filteredRestaurants);
                }
                
             }>search</button>
             </div>

             {/* //button for filtering the res with rating >4.2 */}
             <div  className="search m-4 p-4 flex items-center ">
            <button 
            className="filter-btn px-4 py-2 bg-gray-100 rounded-lg"  
            onClick={()=>
            {
                const filterdList=ListOfRestaurants.filter(
                    (res)=>res.info.avgRating>4.2
                );
                setfilteredRestaurants(filterdList);
            }
            }
            >
               Top rated  Restaurants
            </button>
            </div>
            <div  className="search m-4 p-4 flex items-center ">
                <label>user : </label>
            <input className="border border-black  rounded-lg p-2" type="text" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}/>
            </div>
        </div>
        <div className="restaurant-container flex flex-wrap w-full ">
       {/* <Resturantcard resData={reslist[0]}/>  */}

       {/* using map to pass reslist data */}

       {filteredRestaurants.map((restaurant)=>        // to display to ui // it is basically an array
    (<Link
        key={restaurant.info.id} 
         to={"restaurants/"+restaurant.info.id}>
            {/*when restaurant is promoted */}
        {restaurant.info.promoted ?(<RestaurantCardPromoted resData={restaurant}/>):  
    (<RestaurantCard resData={restaurant}/>)}
    </Link>
))}
        
        
        
        
        </div>
    </div>);
   

   
};
export default Body;