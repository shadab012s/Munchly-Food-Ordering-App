import {useState, useEffect } from "react"; // to fetch the url of each restaurant
import Shimmer from "./Shimmer";
import RestaurantMenuCard from "./RestaurantMenuCard";
import { useParams } from "react-router-dom";
import { menu_api } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";



const RestaurantMenu=()=>{

    const {resid}=useParams();  // destructuring it
console.log(resid);

// const[resData,SetresItems]=useState(null);    
// useEffect(()=>{
//     fetchMenu();
//         },[]);

// const fetchMenu=async()=>{
//     const data= await fetch(menu_api+resid+"&submitAction=ENTER");
//     const json=await data.json(); 
//     // console.log(json);
//     SetresItems(json);
// }   

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
            <p><h1 className="font-bold my-6 text-2xl">{name}</h1></p>
           <p className="font-bold text-lg"> {cuisines.join(",")}</p>
           
           <p> {areaName}, {costForTwoMessage}, {avgRating}⭐</p>
           <p> {sla.deliveryTime} minutes</p>
           
           {/*categories accordians */}

           {
            categories.map((category,index)=>
            (
                <RestaurantCategory key={category?.card?.card?.title} 
                data={category.card.card}
                showItems={index===showIndex?true:false}
                setShowIndex={()=>setShowIndex(index)}/>
            ))
           }
           </div>
           {/* <div className="menu m-6">
            <h1>Menu</h1> */}
            {/* */}


            {/* {resItems.map(items=><li>{items.card.info.name}</li>)} */}
            {/* <li>{resData.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info.name}</li>
            <li>{resData.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[1].card.info.name}</li>
            <li>{resData.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[2].card.info.name}</li>
            <li>{resData.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[3].card.info.name}</li>
            <li>{resData.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[4].card.info.name}</li>
            <li>{resItems[0].card.info.name}</li> */}

           
      {/* {resItems.map((items)=>        // to display to ui
    (<RestaurantMenuCard key={items?.card?.info?.id} resData={items}/>))}   {/* passing as props*/}
        

{/* 
           </div> */}
        </div> 

    );
}
export default RestaurantMenu;