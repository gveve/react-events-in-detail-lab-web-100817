// Code CoordinatesButton Component Here

import React from 'react';

class CoordinatesButton extends React.Component {

  clicker = (event) => {
    const coordinates = [event.screenX, event.screenY]
    this.props.onReceiveCoordinates(coordinates)
  }
  render(){
    return(
      <button onClick={this.clicker}>Button</button>
    )
  }
}

export default CoordinatesButton;
