const RestaurantMenuCard = ({ resData }) => {
  if (!resData) return <p>Loading menu...</p>;

  const { product_name, small_description, price, rating, product_imageUrl } = resData;

  return (
    <div className="restaurant-card">
      <img className="restaurant-image" src={product_imageUrl} alt={product_name} />
      <h2>{product_name}</h2>
      <p>{small_description}</p>
      <h3>Price: ₹{price}</h3>
      <h3>Rating: {rating}</h3>
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
            top: "8px",
            left: "8px",
            display: "flex",
            gap: "8px",           // space between labels
            zIndex: 10,
          }}
        >
          <span
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "4px 8px",
              borderRadius: "8px",
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
                borderRadius: "8px",
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