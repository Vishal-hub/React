import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const useFetchMenu = ()=> {
    
    const [products, setProducts] = useState([]);
    const {brand_id} = useParams();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
        "https://www.eatsure.com/v1/api/get_all_products/brand_id/"+ brand_id +"/store_id/10393/source_id/13?is_preorder=true&start_time_slot=2025-10-18T10%3A00%3A00&end_time_slot=2025-10-18T11%3A00%3A00"
        );
        const json = await data.json();
        // Extract all products in one flat array
        const products = json?.data?.collections?.flatMap(
        (collection) => collection.products
        ) || [];
        setProducts(products);
        // console.log(products);
    };

    return products;
}

export default useFetchMenu;