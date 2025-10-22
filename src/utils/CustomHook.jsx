import { useState, useEffect } from "react";


const useCustomHook = () => {
    const [restaurants , setRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        //install CORS extention in browser to avoid CORS error
        const data = await fetch(
            "https://www.eatsure.com/v1/api/get_restaurants_with_details?cityId=8934"
        );

        const json = await data.json();
        
        //optional chaining(?.)
        const restaurants=json?.data?.data;
        
        setRestaurants(restaurants);
       
    }
    // console.log("Custom Hook Rendered");
    // console.log(restaurants);   
    return restaurants;
}

export default useCustomHook;