import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ReactCardFlip from 'react-card-flip';

import dogCat from './images/dog-cat-bff-min.jpg';

class FasterExample extends Component  {
  constructor() {
    super();
    this.state = {
			isFlipped: false
		};
		this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
		event.preventDefault();
		this.setState({ isFlipped: !this.state.isFlipped });
	}

  render() {
    return (
      <ReactCardFlip
        isFlipped={this.state.isFlipped}
        flipSpeedBackToFront={0.1}
        flipSpeedFrontToBack={0.1}>
        <div key="front" style={this.props.styles.card}>
          <img
            style={this.props.styles.image}
            src={dogCat}
          />

          <button onClick={this.handleClick}>
            Flip Card
          </button>
        </div>

        <div key="back" style={this.props.styles.card}>
          <img
            style={this.props.styles.image}
            src="//www.planwallpaper.com/static/images/dogs1_lm4Ye34.jpg"
          />

          <button onClick={this.handleClick}>
            Flip Card
          </button>
        </div>
      </ReactCardFlip>
    );
  }
};

FasterExample.propTypes = {
  styles: PropTypes.object
};

export default FasterExample;
