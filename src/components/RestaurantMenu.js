import {useState, useEffect } from "react"; // to fetch the url of each restaurant
import Shimmer from "./Shimmer";
import RestaurantMenuCard from "./RestaurantMenuCard";
import { useParams } from "react-router-dom";
import { menu_api } from "../utils/constants";



const RestaurantMenu=()=>{

    const {resid}=useParams();  // destructuring it
console.log(resid);

const[resData,SetresItems]=useState(null);    
useEffect(()=>{
    fetchMenu();
        },[]);

const fetchMenu=async()=>{
    const data= await fetch(menu_api+resid+"&submitAction=ENTER");
    const json=await data.json(); 
    // console.log(json);
    SetresItems(json);
}   
if(resData===null)
    return <Shimmer/>

 //for displaying res info
const {name,cuisines,avgRating,areaName,costForTwoMessage,sla}=resData?.data?.cards[2]?.card?.card?.info;
//for dislaying res menu
const resItems=resData?.data.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
console.log(resItems);


    return (
        <div className="restaurantName">
           <ul> <li><h1>{resData.data.cards[2].card.card.info.name}</h1></li>
           <li> {cuisines.join(",")}</li>
           <li>{avgRating}</li>
           <li> {areaName}</li>
           <li> {costForTwoMessage}</li>
           <li> {sla.deliveryTime} minutes</li>
           </ul>

           <div className="menu">
            <h1>Menu</h1>
            {/* */}


            {/* {resItems.map(items=><li>{items.card.info.name}</li>)} */}
            {/* <li>{resData.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info.name}</li>
            <li>{resData.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[1].card.info.name}</li>
            <li>{resData.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[2].card.info.name}</li>
            <li>{resData.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[3].card.info.name}</li>
            <li>{resData.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[4].card.info.name}</li>
            <li>{resItems[0].card.info.name}</li> */}

           
      {resItems.map((items)=>        // to display to ui
    (<RestaurantMenuCard key={items?.card?.info?.id} resData={items}/>))}   {/* passing as props*/}
        


           </div>
        </div>

    );
}
export default RestaurantMenu;