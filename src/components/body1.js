// import { useEffect, useState } from "react";
// import RestoCard, {HighRated} from "./RestoCard";
// import Search from "./Search";
// import WhatsOnMind from "./WhatsonMind";
// import { SWIGGY_URL } from "../utils/constants";


// const Body=()=>{

//     const [mindData, setMindData] = useState([]);
//     const [restoList, setRestoList] = useState([]);
//     const [filteredList, setFilteredList] = useState([]);
//     const [searchText, setSearchText] = useState("");

//     useEffect(()=>{
//         getMind();
//     },[]);


//     async function getMind() {
//         const data = await fetch(`${SWIGGY_URL}`)
//         const json = await data.json();
//         setMindData(json?.data?.cards[0]?.card)
//         setRestoList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//         setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
//     }

//     const HighRatedLabel= HighRated(RestoCard);

//     function topRated(rating){
//         let highRated = restoList.filter((list) => list.info.avgRating>rating);
//         console.log(highRated)
//         setFilteredList(highRated)
//     }

//     function reset(){
//         setFilteredList(restoList);
//     }

//     function searchTextFun(e){
//         setSearchText(e.target.value)
//     }

//     function searchFunc(){
//         const find = searchText.toLowerCase();
//         setFilteredList((restoList.filter((list)=>list.info.name.toLowerCase().includes(find))))
//     }
    
    


//     return filteredList===0 ? (<h1>Loading</h1>) :  (
//         <div className="Body">
//             <button type="button" onClick={topRated} className="bg-blue-500 hover:bg-blue-700 rounded-lg text-white px-3 py-2 text-xs font-bold">Top Rated BTN</button>
//             <button type="button" onClick={reset} className="bg-blue-500 hover:bg-blue-700 rounded-lg text-white px-3 py-2 text-xs font-bold">Reset</button>
//             <WhatsOnMind data = {mindData}/>
//             {/* search */}
//             <div className="flex justify-center">
//             <input type="text" onChange={(e)=>searchTextFun(e)} className="border rounded-md w-60 focus:border-orange-400 focus:border-2 focus:outline-none mb-8 mt-[2px]"/>
//             <div >
//             <button type="button" onClick={searchFunc} className="bg-blue-500 hover:bg-blue-700 rounded-lg text-white px-3 py-2 ml-2 text-xs font-bold">Search</button>
//             </div>
//             </div>
//             <div className="grid grid-cols-4  gap-4 m-72">
//             {/* restoCardsMap */}
//             {filteredList.map((restaurants)=>(
//                 <div>
//                     {restaurants.info.avgRating>4 ? <HighRatedLabel key={restaurants.id} list = {restaurants.info}/> : <RestoCard key={restaurants.id} list = {restaurants.info}/>}
//                 </div>
//             ))}
//             </div>
            
//         </div>
//     )
// }

// export default Body;