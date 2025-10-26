import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "../components/shimmer";
import useCustomHook from "../utils/CustomHook.jsx";
import useOnline from "./useOnline.jsx";
import UserContext from "../utils/UserContext.jsx";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [hasSearched, setHasSearched] = useState(false); // New state to track if a search was performed

    const {loggedInUser, setUsername} = useContext(UserContext);

    const restaurants = useCustomHook();

    useEffect(() => {
        setListOfRestaurants(restaurants);
        setAllRestaurants(restaurants);
    }, [restaurants]);

    const handleSearch = () => {
        setHasSearched(true); // Set to true when the search button is clicked
        const searchedRestaurants = allRestaurants.filter(
            (restaurant) => restaurant.brand_name.toLowerCase().includes(searchText.toLowerCase())
        );
        setListOfRestaurants(searchedRestaurants);
        console.log(listOfRestaurants);
    };

    const handleKeyDown = (e) => {
        // Check if the key pressed is "Enter"
        if (e.key === "Enter") {
            // Call the search function
            handleSearch();
        }
    };

    const status = useOnline();

    if (status === false) {
        return (
            <h1>Looks like you are Offline! Please check your Internet</h1>
        );
    }

    // Determine what to render based on the component's state
    const renderContent = () => {
        // Condition 1: Initial load or data hasn't arrived yet
        if (!restaurants.length) {
            return <Shimmer />;
        }
        // Condition 2: Search was performed and yielded no results
        if (hasSearched && listOfRestaurants.length === 0) {
            return (
                <div className="no-results-found text-center mt-8">
                    <h1 className="text-2xl text-gray-600">No restaurants found.</h1>
                    <p className="text-gray-500">Try searching for a different restaurant.</p>
                </div>
            );
        }
        // Condition 3: Display the list of restaurants (initial or filtered)
        return (
            <div className="restaurant-list">
                {listOfRestaurants.map((restaurant) =>
                    <Link to={`brand/${restaurant.brand_id}/${restaurant.client_source_id}`} key={restaurant.brand_id}>
                        <RestaurantCard resData={restaurant} />
                    </Link>
                )}
            </div>
        );
    };

    return (
        <div className="body">
            <div className="upbar bg-white shadow-sm p-4 rounded-lg">
                <div className="search flex items-center justify-center space-x-2 w-full max-w-lg ml-auto mr-0">
                    <input
                        type="text"
                        className="search-bar w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Search for restaurants"
                    />
                    <button
                        className="search-button px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>
                    <input
                        type="text"
                        className="search-bar w-28 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-auto mr-0"
                        value={loggedInUser || ""}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                
            </div>
            <div className="restaurant-container">
                {renderContent()}
            </div>
        </div>
    );
};

export default Body;
