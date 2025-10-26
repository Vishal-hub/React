import { useEffect, useState } from "react";
import RestaurantMenuCardShimmer from "./RestaurantMenuCardShimmer";
import RestaurantMenuCard, { VegLabel } from "./RestaurantMenuCard";
import useFetchMenu from "../utils/FetchMenu";
import { useNavigate } from "react-router-dom";

const RestaurantInfo = () => {
  const [collections, setCollections] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [isVegFilter, setIsVegFilter] = useState(false);
  // Use a state variable to hold the ID of the currently open collection.
  const [openCollectionId, setOpenCollectionId] = useState(null);

  const IsVeg = VegLabel(RestaurantMenuCard);

  const { products, collectionsData } = useFetchMenu();

  useEffect(() => {
    // Keep full collections structure for grouped rendering
    setCollections(collectionsData);
  }, [products]);

  const handleToggle = () => {
    setIsFiltered((prev) => !prev);
  };

  const handleVegFilter = () => {
    setIsVegFilter((prev) => !prev);
  };

  const handleClick = (collectionId)=> {
    // If the clicked collection is already open, close it by setting the ID to null.
    // Otherwise, open the new one.
    setOpenCollectionId(
      openCollectionId === collectionId ? null : collectionId
    );
  }

  const navigate = useNavigate();

    useEffect(()=>{
        let timer;
        if (!collections.length){
            timer = setTimeout(()=>{
                alert("Restaurant not available at the moment! \nRedirecting you to Home Page");
                navigate("/");
            },3000);
            console.log("Empty");   
        }
        return () => clearTimeout(timer);
    },[collections,navigate]);

  if (collections.length === 0) {
    return <RestaurantMenuCardShimmer />;
  }

  return (
    <div>
      <div className="filter flex items-center justify-center mt-8 space-x-2">
        <button
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
          onClick={handleToggle}
        >
          {isFiltered ? "Show All Items" : "Show Top Rated Items"}
        </button>

        <button
          className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
          onClick={handleVegFilter}
        >
          {isVegFilter ? "Show All Items" : "Show Pure Veg"}
        </button>
      </div>

      {/* Render categories */}
      <div className="justify-items-center text-center">
        {collections.map((collection) => {
          const filteredProducts = collection.products.filter((product) => {
            if (isFiltered && product.rating < 4.5) return false;
            if (isVegFilter && !product.is_veg) return false;
            return true;
          });

          return (
            <div key={collection.collection_id} className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4">
              <div
                className="flex justify-between cursor-pointer"
                onClick={() => handleClick(collection.collection_id)}
              >
                <span className="font-bold text-lg">
                  {collection.collection_name} ({collection.products.length})
                </span>
                <span>🔽</span>
              </div>
              <div>
                {openCollectionId === collection.collection_id && (
                  filteredProducts.length > 0 ? (
                    filteredProducts.map((product) =>
                      product.is_veg ? (
                        <IsVeg key={product.product_id} resData={product} />
                      ) : (
                        <RestaurantMenuCard key={product.product_id} resData={product} />
                      )
                    )
                  ) : (
                    <div className="text-gray-500 py-4">No products in this category.</div>
                  )
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantInfo;
