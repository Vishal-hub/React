import constant from "../utils/constant";
// import { useContext } from "react";
// import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {

    // const {loggedInUser} = useContext(UserContext);

    const { resData } = props;

    const { brand_name, description, banner_image_es } = resData;

    return (
        <div className="restaurant-card">
            {banner_image_es
            ? <img className="restaurant-image" src={banner_image_es} />
            : <img className="restaurant-image" src={constant.Restaurant_IMG}/>
            }
            <h3 className="font-bold">{brand_name}</h3>
            <h3>{description}</h3>
            {/* <h2>{loggedInUser}</h2> */}
        </div>
    );
};

export default RestaurantCard;
