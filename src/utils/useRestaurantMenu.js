import { useEffect, useState } from "react";
import { menu_api } from "./constants";
// craeting custom hooks
const useRestaurantMenu=(resid)=>
{
    const [resInfo,SetResInfo]=useState(null);

    useEffect(()=>
    {
        fetchData();
    },[]);

    const fetchData=async()=>
    {
        const data=await fetch(menu_api+resid+"&submitAction=ENTER");
        const json= await data.json();
        SetResInfo(json);
    }

    return resInfo
};
export default useRestaurantMenu;