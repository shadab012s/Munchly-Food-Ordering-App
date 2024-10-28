import RestaurantCard from "./RestaurantCard";
import reslist from "../utils/mockData";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body=()=>{

   

    const [ListOfRestaurants,setListOfRestaurants]=useState([]);
    const[filteredRestaurants,setfilteredRestaurants]=useState([]); // making copy of original list
    // for search box value
    const [searchValue,Setsearchvalue]=useState("");

    useEffect(()=>{
        fetchData();
    },[]);
    
    const fetchData=async ()=>{
        // swiggy api to fetch the restaurants 
        const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=28.7040592&lng=77.10249019999999");



        const json=await data.json();
        // using optional chaining
        setListOfRestaurants(json?.data?.success?.cards[1].gridWidget?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurants(json?.data?.success?.cards[1].gridWidget?.gridElements?.infoWithStyle?.restaurants);

    }
    const onlineStatus=useOnlineStatus();
    //for checking network is present or not at user's end
    if(onlineStatus===false)
        return(
    <h1>Looks like you are offline!! Please check your internet connection;</h1>)

    if(ListOfRestaurants.length===0)
         return (<Shimmer/>)  // using shimmer for fake cards

   return  (
    <div className="body">
    

        <div className="filter">
            {/* search box to filter out restaurant*/}
            <div className="search">
            <input type="text" className="search-box" value={searchValue}
             onChange={(e)=> // e is event handler
             {
                Setsearchvalue(e.target.value);
             }
             }/>
             <button  onClick={()=>
                {
                   const filteredRestaurants= ListOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchValue.toLowerCase()));
                   setfilteredRestaurants(filteredRestaurants);
                }
                
             }>search</button>
             </div>

            <button className="filter-btn"  //button for filtering the res with rating >4.2
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
        <div className="restaurant-container">
       {/* <Resturantcard resData={reslist[0]}/>  */}

       {/* using map to pass reslist data */}

       {ListOfRestaurants.map((restaurant)=>        // to display to ui
    (<Link
        key={restaurant.info.id} 
         to={"restaurants/"+restaurant.info.id}>
    <RestaurantCard resData={restaurant}/>
    </Link>
))}
        
        
        
        
        </div>
    </div>);
   
};
export default Body;