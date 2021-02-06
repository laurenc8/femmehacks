import React from "react";
import SeeReviews from './SeeReviews';

const RestaurantCard = (props) => {
  const {name, location, image, desc, price, reviews} = props;
  const boxStyle = {
    backgroundColor: "fdsae3",
    height: 400,
    borderRadius: "20px",
    marginBottom: "50px",
    fontSize: 12,
    //padding: "20px"
  }

  const paddingStyle = {
    textAlign: "center",
    paddingTop: "10px",
    paddingLeft: "20px",
    paddingRight: "20px"
  }
  const imgStyle = {
    width: "100%", 
    maxHeight: 100,
    overFlow: "hidden",
    objectFit: "cover",
  }
  
  return (
    <div style={paddingStyle}>
      <h2>{name}</h2>
      <p>{location}</p>
      <img style = {imgStyle} src = {image} alt = "Food!"></img>
      <p>{desc}</p>
      <p>{price}</p>
      <SeeReviews reviews = {reviews}/>
    </div> 
  );
}

export default RestaurantCard;