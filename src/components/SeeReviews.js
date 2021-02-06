import React, { Component } from 'react';
import {
  PopupboxManager,
  PopupboxContainer
} from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css"

class SeeReviews extends Component {
  render() {
    const popupboxConfig = {
      fadeIn: true,
      fadeInSpeed: 500
    }
    const buttonStyle = {
      backgroundColor: "#d1d7ef",
      fontSize: 16,
      height: 30,
      width: 120,
      marginBottom: "10px",
      borderRadius: "5px"
    }
    return (
      <div>
        <button onClick={() => PopupboxManager.open({content: this.props.reviews})} style={buttonStyle}>See Reviews</button>
        <PopupboxContainer { ...popupboxConfig } />
      </div>
    )
  }
}

export default SeeReviews;