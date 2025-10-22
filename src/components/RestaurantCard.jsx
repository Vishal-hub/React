import constant from "../utils/constant";

const RestaurantCard = (props) => {

    const { resData } = props;

    const { brand_name, description, banner_image_es } = resData;

    return (
        <div className="restaurant-card">
            {banner_image_es
            ? <img className="restaurant-image" src={banner_image_es} />
            : <img className="restaurant-image" src={constant.Restaurant_IMG}/>
            }
            <h3>{brand_name}</h3>
            <h3>{description}</h3>
        </div>
    );
};

export default RestaurantCard;
