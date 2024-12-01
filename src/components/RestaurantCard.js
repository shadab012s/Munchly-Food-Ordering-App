

import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;

  // Using useContext in cards
  const { loggedInUser } = useContext(UserContext);

  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    avgRating,
    sla,
  } = resData; // functional chaining

  return (
    <div
      data-testid="resCardId"
      className="res-card m-4 p-4 w-full sm:w-[250px] bg-gray-200 shadow-lg rounded-lg hover:bg-gray-300 transition-all duration-300 ease-in-out transform hover:scale-105"
    >
      <img
        className="res-logo rounded-lg w-full h-[200px] object-cover"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <h3 className="font-bold py-4 text-lg hover:text-green-500">{name}</h3>
      <h5 className="text-sm text-gray-600">{cuisines.slice(0, 3).join(", ")}</h5>
      <h5 className="text-sm text-gray-600">{costForTwo}</h5>
      <h5 className="text-sm text-gray-600">{avgRating} ⭐</h5>
      <h5 className="text-sm text-gray-600">{sla.deliveryTime} minutes</h5>
      <h5 className="text-sm text-gray-600">User: {loggedInUser}</h5>
    </div>
  );
};

// Higher Order Component for Promoted Label
export const withPrometedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-2 left-2 bg-black text-white rounded-lg p-2 z-10">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
