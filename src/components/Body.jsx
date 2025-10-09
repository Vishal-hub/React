import RestaurantCard from "./RestaurantCard";
import resList from "../utils/MockData";
import { useState } from "react";

const Body = () => {

    let [listOfRestaurants, setListOfRestaurants] = useState(resList);

    return (
        <div className="body">
            <div className="upbar">
                <div className="search"><input type="text" className="search-bar" placeholder="Search for restaurants"/></div>
                <div className="filter">
                    <button className="toprestaurant" 
                        onClick={() => {
                            const filteredList = listOfRestaurants.filter(
                                (restaurant) => restaurant.info.avgRating >= 4.5
                            );
                            setListOfRestaurants(filteredList);
                    }}>
                        Top Rated Restaurant
                    </button>
                </div>
            </div>
            <div className="restaurant-container">
                <div className="restaurant-list">
                    {
                        listOfRestaurants.map((restaurant) => (
                            <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
                        ))
                    }
                    {/* <RestaurantCard resData={resList[0]?.info} /> */}
                </div>
            </div>
        </div>
    );
};

export default Body;