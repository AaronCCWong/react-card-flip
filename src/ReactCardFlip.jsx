import React from 'react';
import PropTypes from 'prop-types';

class ReactCardFlip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: this.props.isFlipped,
      rotation: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isFlipped !== this.props.isFlipped) {
      this.setState({ isFlipped: nextProps.isFlipped });
      this.setState({ rotation: this.state.rotation + 180 });
    }
  }

  getComponent(key) {
    return this.props.children.filter(component => {
      return component.key === key;
    });
  }

  render() {
    const {
      flipDirection,
      infinite,
      flipSpeedFrontToBack,
      flipSpeedBackToFront,
      cardStyles: { front, back }
    } = this.props;
    const { isFlipped, rotation } = this.state;

    const frontRotateY = `rotateY(${
      infinite ? rotation : isFlipped ? 180 : 0
    }deg)`;
    const backRotateY = `rotateY(${
      infinite ? rotation + 180 : isFlipped ? 0 : -180
    }deg)`;
    const frontRotateX = `rotateX(${
      infinite ? rotation : isFlipped ? 180 : 0
    }deg)`;
    const backRotateX = `rotateX(${
      infinite ? rotation + 180 : isFlipped ? 0 : -180
    }deg)`;

    const styles = {
      container: {
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      },
      flipper: {
        position: 'relative',
        transformStyle: 'preserve-3d'
      },
      front: {
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        left: '0',
        visibility: isFlipped ? 'hidden' : '',
        position: isFlipped ? 'absolute' : 'relative',
        top: '0',
        transform: flipDirection === 'horizontal' ? frontRotateY : frontRotateX,
        transformStyle: 'preserve-3d',
        width: '100%',
        zIndex: '2',
        transition: `${flipSpeedBackToFront}s`,
        ...front
      },
      back: {
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        left: '0',
        visibility: isFlipped ? '' : 'hidden',
        position: isFlipped ? 'relative' : 'absolute',
        transform: flipDirection === 'horizontal' ? backRotateY : backRotateX,
        transformStyle: 'preserve-3d',
        top: '0',
        width: '100%',
        transition: `${flipSpeedFrontToBack}s`,
        ...back
      }
    };

    return (
      <div className="react-card-flip" style={styles.container}>
        <div className="react-card-flipper" style={styles.flipper}>
          <div className="react-card-front" style={styles.front}>
            {this.getComponent('front')}
          </div>

          <div className="react-card-back" style={styles.back}>
            {this.getComponent('back')}
          </div>
        </div>
      </div>
    );
  }
}

ReactCardFlip.propTypes = {
  cardStyles: PropTypes.shape({
    front: PropTypes.object,
    back: PropTypes.object
  }),
  children: (props, propName, componentName) => {
    if (React.Children.count(props[propName]) !== 2) {
      return new Error(`${componentName} requires two children.`);
    }
  },
  flipSpeedBackToFront: PropTypes.number,
  flipSpeedFrontToBack: PropTypes.number,
  infinite: PropTypes.bool,
  isFlipped: PropTypes.bool,
  flipDirection: (props, propName, componentName) => {
    if (!props[propName]) {
      return;
    }

    if (!(typeof props[propName] === 'string' || props[propName] instanceof String)) {
      return new Error(`${propName} requires a string.`);
    }

    if (props[propName].toLowerCase() !== 'horizontal' && props[propName].toLowerCase() !== 'vertical') {
      return new Error(`${propName} expects (horizontal|vertical), got ${props[propName].toLowerCase()}`);
    }
  },
};

ReactCardFlip.defaultProps = {
  cardStyles: {
    front: {},
    back: {}
  },
  flipSpeedBackToFront: 0.6,
  flipSpeedFrontToBack: 0.6,
  infinite: false,
  isFlipped: false,
  flipDirection: 'horizontal'
};

export default ReactCardFlip;
