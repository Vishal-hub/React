import RestaurantCard from "./RestaurantCard";
import resList from "../utils/MockData";
import { useEffect, useState } from "react";
import Shimmer from "../components/shimmer";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        //install CORS extention in browser to avoid CORS error
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9966135&lng=77.5920581&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        
        const json = await data.json();
        
        //optional chaining(?.)
        const restaurants=json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        
        setAllRestaurants(restaurants);
        setListOfRestaurants(restaurants);
    }

    //Shimmer UI
    // if(listOfRestaurants.length === 0){
    //     return <Shimmer /> ;
    // }

    const handleToggle = () => {
        if(isFiltered){
            setListOfRestaurants(allRestaurants);
        }else{
            const filteredList = allRestaurants.filter(
                (restaurant) => restaurant.info.avgRating >= 4.5
            );
            setListOfRestaurants(filteredList);
        }
        setIsFiltered(!isFiltered);
    };


    return (
        <div className="body">
            <div className="upbar">
                <div className="search">

                    <input type="text" className="search-bar" 
                        value={searchText} onChange={(e) => setSearchText(e.target.value)} />

                    <button className="search-button" onClick={() => {
                        console.log(searchText);
                        const searchedRestaurants = allRestaurants.filter(
                            (restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setListOfRestaurants(searchedRestaurants);
                    }}>
                        Search
                    </button>

                </div>
                <div className="filter">
                    <button className="toprestaurant" 
                        onClick={handleToggle}>
                        {isFiltered ? "Show All Restaurants" : "Top Rated Restaurant"}
                    </button>
                </div>
            </div>
            {listOfRestaurants.length === 0 ? <Shimmer /> : null} {/* Conditional Rendering for Shimmer UI */}
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