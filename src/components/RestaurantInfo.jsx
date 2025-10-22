import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import RestaurantMenuCard, {TopRated, VegLabel} from "./RestaurantMenuCard";
import useFetchMenu from "./FetchMenu";

const RestaurantInfo = () => {
  
  const [restInfo, setRestInfo] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  const [isFiltered, setIsFiltered] = useState(false);
  const [isVegFilter, setIsVegFilter] = useState(false);


  const IsVeg = VegLabel(RestaurantMenuCard);
  
  const products = useFetchMenu();

  useEffect(() => {
          setRestInfo(products);
          setAllRestaurants(products);
      }, [products]);

   const handleToggle = () => {
        if(isFiltered){
            setRestInfo(allRestaurants);
        }else{
            const filteredList = allRestaurants.filter(
                (restaurant) => restaurant.rating >= 4.5
            );
            setRestInfo(filteredList);
        }
        setIsFiltered(!isFiltered);
    };

    const handleVegFilter = () => {
      if (isVegFilter) {
        setRestInfo(allRestaurants);
      } else {
        const filteredVegList = allRestaurants.filter(
          (restaurant) => restaurant.is_veg
        );
        setRestInfo(filteredVegList);
      }
      setIsVegFilter(!isVegFilter);
    };


  if (restInfo.length === 0) {
    return <Shimmer />;
  }

  return (
    <div>
      <div className="filter flex items-center justify-center mt-8 space-x-2">
        <button
          className="search-button px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200"
          onClick={handleToggle}
        >
          {isFiltered ? "Show All Items" : "Show Top Rated Items"}
        </button>
        <button
          className="search-button px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200"
          onClick={handleVegFilter} // Use the new handler
        >
          {isVegFilter ? "Go for Veg + Non-Veg" : "GO Pure Veg"}
        </button>

      </div>
      <div className="restaurant-list">
      {restInfo.map((product, idx) => {
          if (product.is_veg) {
            return <IsVeg key={`${product.product_id}-${idx}`} resData={product} />;
          }  
          else {
            return <RestaurantMenuCard key={`${product.product_id}-${idx}`} resData={product} />;
          }
        })}

      </div>
    </div>
  );
};

export default RestaurantInfo;
