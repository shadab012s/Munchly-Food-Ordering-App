import { menu_img } from "../utils/constants";

const RestaurantMenuCard = (props) => {
    const { resData } = props;

    // Destructure the necessary properties from resData
    const {
        imageId = null,  // Set imageId to null if it's undefined
        name,
        defaultPrice,
        price,
        description
    } = resData.card.info;

    return (
        <div className="res-menu-card">
            <div className="text">
                <h3>{name}</h3>
                <h3>Rs {defaultPrice / 100 || price / 100}</h3>
                <h5>{description}</h5>
            </div>

            <div className="image">
                {/* Render the image only if imageId exists */}
                {imageId && (
                    <img 
                        className="menu-logo"
                        src={menu_img + imageId}
                        alt={name}  // Add alt attribute for better accessibility
                    />
                )}
            </div>
        </div>
    );
};


export default RestaurantMenuCard;
