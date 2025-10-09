import constant from "../utils/constant";

const RestaurantCard = (props) => {

    const { resData } = props;

    const { name, cuisines, avgRating, cloudinaryImageId, costForTwo } = resData;

    return (
        <div className="restaurant-card">
            <img className="restaurant-image" src={constant.Restaurant_IMG + cloudinaryImageId} />
            <h3>{name}</h3>
            <h3>Cuisine: {cuisines.join(", ")}</h3>
            <h3>Rating: {avgRating}</h3>
            <h3>Cost for two: {costForTwo}</h3>
        </div>
    );
};

export default RestaurantCard;
