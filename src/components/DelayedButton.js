// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {
  clicker = (event) => {
    event.persist();

  setTimeout(() => {
    this.props.onDelayedClick(event)
  }, this.props.delay)
}
  render() {
    return(
      <button onClick={this.clicker}>Delay</button>
    );
  }
}

export default DelayedButton
