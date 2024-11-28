// import { Link } from "react-router-dom";
// import { RESTOCARD_IMG } from "../utils/constants";





// const RestoCard=(props)=>{
//     const {
//         id,
//         cloudinaryImageId,
//         name,
//         sla,
//         costForTwo,
//         cuisines,
//         areaName,
//         avgRating
//     } = props.list
 

//     return  (
//     <>
//     <div className="">       
//                     <div className="rounded-lg border shadow-lg w-auto ">
//                          <Link to={`/restaurants/${id}`} key={id}>
//                     <div>
//                         <img className="rounded-lg" src={RESTOCARD_IMG + cloudinaryImageId} />
//                     </div>
//                     <div className="ml-2">
//                         <h3 className="font-bold text-xl">{name}</h3>
//                         <p>
//                             <span   className={`font-bold text-white mr-1 rounded-md px-2
//                                  ${avgRating > 4 ? "bg-green-600" :
//                                   avgRating > 3 ? "bg-yellow-400" : 
//                                   "bg-red-500"}`}>{avgRating}</span> 
//                           • <span>{sla.slaString}</span></p>
//                         <p>Cost for Two : {costForTwo} </p>
//                         <p>{cuisines.join(", ")}</p>
//                         <p>{areaName}</p>
//                     </div>
//                         </Link>
//                     </div>
//         </div>

//     </>
//     )
// }

// export const HighRated=(RestoCard)=>{
//     return(props)=>{
//         return (
//             <div>
//                 <label className="absolute bg-gray-700 text-white px-1 rounded-md">High Rated</label>
//                 <RestoCard {...props}/>
//             </div>
//         );
//     };
// };

// export default RestoCard;