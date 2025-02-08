import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, id, cuisines, avgRatingString } =
    resData?.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo crop"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h4>{id}</h4>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString}</h4>
      <h4>{resData.info.sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
