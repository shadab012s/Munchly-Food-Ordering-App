import {useState, useEffect } from "react"; // to fetch the url of each restaurant
import Shimmer from "./Shimmer";

import { useParams } from "react-router-dom";
import { menu_api } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";



const RestaurantMenu=()=>{

    const {resid}=useParams();  // destructuring it
console.log(resid);


const resData=useRestaurantMenu(resid);
const [showIndex,setShowIndex]=useState(null);
if(resData===null)
    return <Shimmer/>

 //for displaying res info
const {name,cuisines,avgRating,areaName,costForTwoMessage,sla}=resData?.data?.cards[2]?.card?.card?.info;
//for dislaying res menu
const resItems=resData?.data.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;


// for having accordians of a resturant
const categories=resData?.data.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");



    return (
        <div className="restaurantName text-center">
            <div>
            <p><h1 className="font-bold my-6 text-2xl transition-all hover:text-green-500">{name}</h1></p>
           <p className="font-bold text-lg"> {cuisines.join(",")}</p>
           
           <p> {areaName}, {costForTwoMessage}, {avgRating}⭐</p>
           <p> {sla.deliveryTime} minutes</p>
           
           {/*categories accordians */}

           {/* {
            categories.map((category,index)=>
            (
                <RestaurantCategory key={category?.card?.card?.title} 
                data={category.card.card}
                showItems={index===showIndex?true:false}
                setShowIndex={()=>setShowIndex(index)}/>
            ))
           } */}

{
  categories.map((category, index) => (
    <RestaurantCategory
      key={category?.card?.card?.title}
      data={category.card.card}
      showItems={index === showIndex}
      setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
    />
  ))
}


           </div>
          
     
        </div> 

    );
}
export default RestaurantMenu;