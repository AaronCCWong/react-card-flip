import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ReactCardFlip from 'react-card-flip';

class SlowerExample extends Component  {
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
        flipSpeedBackToFront={2}
        flipSpeedFrontToBack={2}>
        <div key="front" style={this.props.styles.card}>
          <img
            style={this.props.styles.image}
            src="//cdn1-www.dogtime.com/assets/uploads/gallery/siberian-husky-dog-breed-pictures/siberian-husky-dog-breed-pictures-3.jpg"
          />

          <button onClick={this.handleClick}>
            Flip Card
          </button>
        </div>

        <div key="back" style={this.props.styles.card}>
          <img
            style={this.props.styles.image}
            src="//tu9srvbirvvtmtykznrobwiudhfulmnvbq00.g00.thespruce.com/g00/2_d3d3LnRoZXNwcnVjZS5jb20%3D_/TU9SRVBIRVVTMTYkaHR0cHM6Ly9mdGhtYi50cW4uY29tL3ZacFFVMTFyS3NEUkZjLUR6TkMtbHdNTUpGaz0vOTYweDAvZmlsdGVyczpub191cHNjYWxlKCkvYWJvdXQvQ2F0LWVhdGluZy1ncmFzcy1HZXR0eUltYWdlcy01MzM1MDczODEtNThhYzYwYWUzZGY3OGMzNDViNDEzOTUzLmpwZz9pMTBjLm1hcmsuaW1hZ2UudHlwZQ%3D%3D_$/$/$/$/$/$"
          />

          <button onClick={this.handleClick}>
            Flip Card
          </button>
        </div>
      </ReactCardFlip>
    );
  }
};

SlowerExample.propTypes = {
  styles: PropTypes.object
};

export default SlowerExample;
