import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ReactCardFlip from 'react-card-flip';

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
            src="//cdn2-www.dogtime.com/assets/uploads/gallery/labrador-retriever-dog-breed-pictures/labrador-retriever-dog-pictures-6.jpg"
          />

          <button onClick={this.handleClick}>
            Flip Card
          </button>
        </div>

        <div key="back" style={this.props.styles.card}>
          <img
            style={this.props.styles.image}
            src="//tu9srvbirvvtmtykznrobwiudhfulmnvbq00.g00.thespruce.com/g00/2_d3d3LnRoZXNwcnVjZS5jb20%3D_/TU9SRVBIRVVTMTYkaHR0cHM6Ly9mdGhtYi50cW4uY29tL2hYUnV6ZDVmNjJUX2ZXZVBQdjdhVXNWaVp5RT0vOTYweDAvZmlsdGVyczpub191cHNjYWxlKCkvYWJvdXQvQ2F0LXJvbGxpbmctR2V0dHlJbWFnZXMtMTY1ODkzMTMyLTU4YWM1ZWYwNWY5YjU4YTNjOTBhMTQ0Zi5qcGc%2FaTEwYy5tYXJrLmltYWdlLnR5cGU%3D_$/$/$/$/$/$"
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
