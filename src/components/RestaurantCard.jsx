import React from "react";
import './RestaurantCard.css'

const RestaurantCard = ({name, description, imageURL, menu_link}) => {
  return(
    <div className = "restaurant-card">
      <img src={imageURL} className="restaurant-card-img" />
       <h2>{name}</h2> 
       <p>{description}</p>
       <a href={menu_link} className="view-menu-btn">View Menu</a>
    </div>
  )
}

export default RestaurantCard;
