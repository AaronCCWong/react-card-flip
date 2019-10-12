import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ReactCardFlip from 'react-card-flip';

class RevolvingExample extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} infinite>
        <div style={this.props.styles.card}>
          <img
            style={this.props.styles.image}
            src="//static.pexels.com/photos/59523/pexels-photo-59523.jpeg"
          />

          <button onClick={this.handleClick}>Flip Card</button>
        </div>

        <div style={this.props.styles.card}>
          <img
            style={this.props.styles.image}
            src="//img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr06/4/16/enhanced-11136-1396643149-13.jpg?no-auto"
          />

          <button onClick={this.handleClick}>Flip Card</button>
        </div>
      </ReactCardFlip>
    );
  }
}

export default RevolvingExample;
