import React, { Component } from 'react';
import {
  PopupboxManager,
  PopupboxContainer
} from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css"

class SeeReviews extends Component {
  openPopupbox(review = this.props.reviews) {
    console.log(review)
    const content = (
      <div>
        Yay!
      </div>
    )
    PopupboxManager.open({ content })
  }

  render() {
    const popupboxConfig = {
      fadeIn: true,
      fadeInSpeed: 500
    }
    const buttonStyle = {
      backgroundColor: "#0e71a9",
      color: "#ffffff",
      fontSize: 16,
      height: 30,
      width: 120,
      marginBottom: "10px",
      borderRadius: "5px"
    }

    return (
      <div>
        <button onClick={this.openPopupbox} style={buttonStyle}>See Reviews</button>
        <PopupboxContainer { ...popupboxConfig } />
      </div>
    )
  }
}

export default SeeReviews;