import * as React from 'react';
import { useEffect, useState, useMemo } from 'react';

import { ReactFlipCardProps } from '../types/index';

const ReactCardFlip: React.FC<ReactFlipCardProps> = (props) => {
  const {
    cardStyles: {
      back,
      front,
    },
    cardZIndex,
    containerStyle,
    containerClassName,
    flipDirection,
    flipSpeedFrontToBack,
    flipSpeedBackToFront,
    infinite,
  } = props;

  const [isFlipped, setFlipped] = useState(props.isFlipped);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (props.isFlipped !== isFlipped) {
      setFlipped(props.isFlipped);
      setRotation((c) => c + 180);
    }
  }, [props.isFlipped]);

  const getContainerClassName = useMemo(() => {
    let className = 'react-card-flip';
    if (containerClassName) {
      className += ` ${containerClassName}`;
    }
    return className;
  }, [containerClassName]);

  const getComponent = (key: 0 | 1) => {
    if (props.children.length !== 2) {
      throw new Error(
        'Component ReactCardFlip requires 2 children to function',
      );
    }
    return props.children[key];
  };

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

  const styles: any = {
    back: {
      WebkitBackfaceVisibility: 'hidden',
      backfaceVisibility: 'hidden',
      height: '100%',
      left: '0',
      position: isFlipped ? 'relative' : 'absolute',
      top: '0',
      transform: (flipDirection === 'horizontal' ? backRotateY : backRotateX) + 'translateZ(1px)',
      transformStyle: 'preserve-3d',
      transition: `${flipSpeedFrontToBack}s`,
      width: '100%',
      ...back,
    },
    container: {
      perspective: '1000px',
      zIndex: `${cardZIndex}`,
    },
    flipper: {
      height: '100%',
      position: 'relative',
      width: '100%',
    },
    front: {
      WebkitBackfaceVisibility: 'hidden',
      backfaceVisibility: 'hidden',
      height: '100%',
      left: '0',
      position: isFlipped ? 'absolute' : 'relative',
      top: '0',
      transform: flipDirection === 'horizontal' ? frontRotateY : frontRotateX,
      transformStyle: 'preserve-3d',
      transition: `${flipSpeedBackToFront}s`,
      width: '100%',
      zIndex: '2',
      ...front,
    },
  };

  return (
    <div
      className={getContainerClassName}
      style={{ ...styles.container, ...containerStyle }}
    >
      <div className="react-card-flipper" style={styles.flipper}>
        <div className="react-card-front" style={styles.front}>
          {getComponent(0)}
        </div>

        <div className="react-card-back" style={styles.back}>
          {getComponent(1)}
        </div>
      </div>
    </div>
  );
};

ReactCardFlip.defaultProps = {
  cardStyles: {
    back: {},
    front: {},
  },
  cardZIndex: 'auto',
  containerStyle: {},
  flipDirection: 'horizontal',
  flipSpeedBackToFront: 0.6,
  flipSpeedFrontToBack: 0.6,
  infinite: false,
  isFlipped: false,
};

export default ReactCardFlip;
