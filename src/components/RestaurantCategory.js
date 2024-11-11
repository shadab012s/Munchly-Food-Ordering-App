import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory=({data,showItems,setShowIndex})=>
 {  // const [showItems,setShowItems]=useState(false);
    const handleClick=()=>{
    setShowIndex();
    //accordian
    };
return(
    
    <div >
        {/* // header */}
        <div className="w-6/12 bg-gray-50 shadow-2xl p-4 mx-auto my-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="text-lg font-bold">{data?.title}({data?.itemCards?.length||0})</span>
        <span>∨</span>
        </div>
        {showItems && <ItemList items={data.itemCards}/> } {/*{passing the itemscards which is an array} */} {/* body */}
        </div>
        
       

     
     
    </div>
);
};
export default RestaurantCategory;