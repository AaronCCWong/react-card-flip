import React, { useState, useEffect } from 'react';
const ReactCardFlip = props => {
    const { flipDirection, infinite, flipSpeedFrontToBack, flipSpeedBackToFront, cardStyles: { front, back }, containerStyle, cardZIndex } = props;
    const [isFlipped, setFlipped] = useState(props.isFlipped);
    const [rotation, setRotation] = useState(0);
    useEffect(() => {
        if (props.isFlipped !== isFlipped) {
            setFlipped(props.isFlipped);
            setRotation(c => c + 180);
        }
    }, [props.isFlipped]);
    const getComponent = (key) => {
        if (props.children.length !== 2) {
            throw new Error('Component ReactCardFlip requires 2 children to function');
        }
        return props.children[key];
    };
    const frontRotateY = `rotateY(${infinite ? rotation : isFlipped ? 180 : 0}deg)`;
    const backRotateY = `rotateY(${infinite ? rotation + 180 : isFlipped ? 0 : -180}deg)`;
    const frontRotateX = `rotateX(${infinite ? rotation : isFlipped ? 180 : 0}deg)`;
    const backRotateX = `rotateX(${infinite ? rotation + 180 : isFlipped ? 0 : -180}deg)`;
    const styles = {
        container: {
            perspective: '1000px',
            zIndex: `${cardZIndex}`
        },
        flipper: {
            position: 'relative',
            width: '100%',
            height: '100%'
        },
        front: {
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
            left: '0',
            position: isFlipped ? 'absolute' : 'relative',
            top: '0',
            transform: flipDirection === 'horizontal' ? frontRotateY : frontRotateX,
            transformStyle: 'preserve-3d',
            width: '100%',
            height: '100%',
            zIndex: '2',
            transition: `${flipSpeedBackToFront}s`,
            ...front
        },
        back: {
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
            left: '0',
            position: isFlipped ? 'relative' : 'absolute',
            transform: flipDirection === 'horizontal' ? backRotateY : backRotateX,
            transformStyle: 'preserve-3d',
            top: '0',
            width: '100%',
            height: '100%',
            transition: `${flipSpeedFrontToBack}s`,
            ...back
        }
    };
    return (<div className="react-card-flip" style={{ ...styles.container, ...containerStyle }}>
      <div className="react-card-flipper" style={styles.flipper}>
        <div className="react-card-front" style={styles.front}>
          {getComponent(0)}
        </div>

        <div className="react-card-back" style={styles.back}>
          {getComponent(1)}
        </div>
      </div>
    </div>);
};
ReactCardFlip.defaultProps = {
    containerStyle: {},
    cardStyles: {
        front: {},
        back: {}
    },
    cardZIndex: 'auto',
    flipDirection: 'horizontal',
    flipSpeedBackToFront: 0.6,
    flipSpeedFrontToBack: 0.6,
    infinite: false,
    isFlipped: false
};
export default ReactCardFlip;
