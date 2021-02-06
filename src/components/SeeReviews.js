import React, { Component } from 'react';
import {
  PopupboxManager,
  PopupboxContainer
} from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css"

class SeeReviews extends Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.reviews};
  }
  openPopupbox() {
    const content = (
      <div>
        {this.state.value}
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