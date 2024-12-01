
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import RestaurantCard, { withPrometedLabel } from "./RestaurantCard";
import WhatsOnMindCard from "./WhatsOnMindCard";
import { BodyCard_URL } from "../utils/constants";

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [whatsOnMindArray, setWhatsOnMindArray] = useState([]);
  const [searchValue, setSearchValue] = useState(""); // for search box value
  const RestaurantCardPromoted = withPrometedLabel(RestaurantCard); // for promoted label
  const { loggedInUser, setUserName } = useContext(UserContext); // for using context

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(BodyCard_URL);
    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setWhatsOnMindArray(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
  };

  const onlineStatus = useOnlineStatus();
  // Display message if user is offline
  if (onlineStatus === false) return <h1>Looks like you are offline! Please check your internet connection.</h1>;

  // Use shimmer for loading state
  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    
    <div className="body min-h-screen bg-gray-50">

      {/* Filter and Search Section */}
      <div className="filter flex flex-wrap justify-between items-center p-4">

        <div className="search m-4 flex items-center space-x-4">
          {/* Search Box */}
          <input
            type="text"
            data-testid="searchId"
            className="search-box border border-solid border-black rounded-lg p-2"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search for restaurants"
          />
          {/* Search Button */}
          <button
            className="px-4 py-1 bg-green-100 rounded-lg transition-all hover:bg-green-300"
            onClick={() => {
              const filtered = ListOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchValue.toLowerCase())
              );
              setFilteredRestaurants(filtered);
            }}
          >
            Search
          </button>
        </div>

        
            <div flex  items-center >
        {/* Button to filter top-rated restaurants */}
        
          <button
            className="filter-btn px-4 py-2 mx-2 bg-gray-100 rounded-lg transition-all hover:bg-gray-300"
            onClick={() => {
              const filteredList = ListOfRestaurants.filter((res) => res.info.avgRating > 4.2);
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        

         {/* Button to reset filter top-rated restaurants */}
         
          <button
            className="filter-btn px-4 py-2 mx-2 bg-gray-100 rounded-lg transition-all hover:bg-gray-300"
            onClick={() => {
              const filteredList = ListOfRestaurants.filter((res) => res.info);
              setFilteredRestaurants(filteredList);
            }}
          >
            Reset
          </button>
        
            </div>
        {/* Input for user's name */}
        <div className="search m-4 p-4 flex items-center">
          <label className="mr-2">User:</label>
          <input
            className="border border-black rounded-lg p-2"
            type="text"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      {/* Whats On Your Mind Cards */}
      <div className="whats-on-mind-container flex overflow-x-auto hide-scrollbar px-4 space-x-4 w-full my-14">
        {whatsOnMindArray.map((foodItem) => (
          <WhatsOnMindCard key={foodItem.id} mindData={foodItem} />
        ))}
      </div>

      {/* Restaurant Cards */}
      <div className="restaurant-container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 my-12">
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant?.info.id}>
            {/* Render promoted card if available */}
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant.info} />
            ) : (
              <RestaurantCard resData={restaurant.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
