const RestaurantMenuCard = ({ resData }) => {
  if (!resData) return <p>Loading menu...</p>;

  const { product_name, small_description, price, rating, product_imageUrl } = resData;

  return (
    <div className="p-2 m-2 border-b-2 border-gray-200 text-left flex" >
      <div className="w-9/12">
        <div className="py-2 flex justify-between items-center">
          <div>
            <span className="text-bold">{product_name}</span>
            <span> - ₹{price} </span>
          </div>
          <span className="mr-[7px]">⭐{rating}</span>
        </div>
        <p className="text-xs m-revert-layer">{small_description}</p>
      </div>
      <div className="w-3/12 p-4">
        <div className="absolute">
          <button className="mx-18 my-17 py-[3px] px-[5px] rounded-lg bg-black text-white shadow-lg">
            Add+
          </button>
          </div>
        <img src={product_imageUrl} alt={product_name} />
      </div>
    </div>
  );
};


//Higher Order Component
export const VegLabel = (RestaurantMenuCard) => {
  return (props) => {
    return (
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "555px",
            display: "flex",
            gap: "8px",           // space between labels
            zIndex: 10,
          }}
        >
          <span
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "2px 4px",
              borderRadius: "8px",
              transform: "translateY(-15px)",
            }}
          >
            Veg
          </span>
          {props.resData.rating >= 4.5 && (
            <span
              style={{
                backgroundColor: "goldenrod",
                color: "white",
                padding: "4px 8px",
                borderRadius: "8px",padding: "2px 4px",
                borderRadius: "8px",
                transform: "translateY(-15px)",
              }}
            >
              Top Rated
            </span>
          )}
        </div>
        <RestaurantMenuCard {...props} />
      </div>
    );
  };
};


export default RestaurantMenuCard;