const RestaurantMenuCardShimmer = () => {
  return (
    <div className="w-full justify-items-center text-center p-4">
      {/* Container for the filter buttons */}
      <div className="flex justify-center my-4">
        {/* Placeholder for the "Show Top Rated Items" button */}
        <div className="bg-gray-300 h-10 w-40 mx-2 rounded-lg animate-pulse"></div>
        {/* Placeholder for the "Show Pure Veg" button */}
        <div className="bg-gray-300 h-10 w-32 mx-2 rounded-lg animate-pulse"></div>
      </div>
      
      {/* Shimmer sections to mimic the collapsible menu items */}
      <div className="w-6/12 bg-white shadow-lg mx-auto my-4 rounded-lg">
        {/* Repeating a placeholder section 9 times to represent the menu list */}
        {Array(9).fill(0).map((_, index) => (
          <div key={index} className="p-4 m-2 border-b-2 border-gray-200 animate-pulse">
            <div className="flex justify-between items-center">
              {/* Placeholder for the section title and count */}
              <div className="bg-gray-300 h-5 w-2/3 rounded-md"></div>
              {/* Placeholder for the arrow icon */}
              <div className="bg-gray-300 h-5 w-6 rounded-md"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenuCardShimmer;
