import React from 'react';
import SeeReviews from './SeeReviews';

const RestaurantCard = (props) => {
  const {name, location, image, desc, price, reviews} = props;
  const boxStyle = {
    height: '100%',
    paddingLeft: "20px",
    paddingRight: "20px",
    backgroundColor: "#ffffff",
  }
  const imgStyle = {
    width: "70%",
    maxHeight: 100,
    overFlow: "hidden",
    // objectFit: "cover",
  }
  return (
    <div style={boxStyle}>
      <p style={{fontSize: '24px'}}>{name}</p>
      <p style={{fontSize: '14px'}}>{location}</p>
      <img style = {imgStyle} src = {image} alt = "Food!"></img>
      <p style={{fontSize: '16px'}}>{desc}</p>
      <p style={{fontSize: '18px'}}>{price}</p>
      <SeeReviews reviews={reviews}/>
    </div> 
  );
}

export default RestaurantCard;