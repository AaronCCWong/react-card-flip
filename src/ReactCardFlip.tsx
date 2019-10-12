import React, { useState, useEffect } from 'react';

interface Props {
  /**z-Index for the flip card. Used to help solve context stack issues while using multiple flip cards.
   * @default 'auto'
   */
  cardZIndex?: string;
  /**Extra css styling that can be applied to the container.
   * @default {}
   */
  containerStyle?: {};
  /**False to show the front of the card, true to show the back
   * @default undefined
   */
  isFlipped?: boolean;
  /**The speed of the flip animation when the card flips from back to front, the higher the number the slower the flip animation
   * @default 0.6
   */
  flipSpeedBackToFront?: number;
  /**The speed of the flip animation when the card flips from front to back, the higher the number the slower the flip animation
   * @default 0.6
   */
  flipSpeedFrontToBack?: number;

  cardStyles?: { front?: {}; back?: {} };
  /**False to rotate in opposite directions on both sides of the card, true to rotate in the same direction
   * @default false
   */
  infinite?: boolean;

  /**Direction of the card flip (options are: 'horizontal' or 'vertical' )
   * @default 'horizontal'
   */
  flipDirection?: 'horizontal' | 'vertical';
  children: [React.ReactNode, React.ReactNode];
}

const ReactCardFlip: React.FC<Props> = props => {
  const {
    flipDirection,
    infinite,
    flipSpeedFrontToBack,
    flipSpeedBackToFront,
    cardStyles: {
      front: {},
      back: {}
    },
    containerStyle,
    cardZIndex
  } = props;

  const [isFlipped, setFlipped] = useState(props.isFlipped);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (props.isFlipped !== isFlipped) {
      setFlipped(props.isFlipped);
      setRotation(c => c + 180);
    }
  }, [props.isFlipped]);

  const getComponent = key => {
    return props.children.filter((component: any) => {
      return component.key === key;
    });
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
      ...props.cardStyles.front
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
      ...props.cardStyles.back
    }
  };

  return (
    <div
      className="react-card-flip"
      style={{ ...styles.container, ...containerStyle }}
    >
      <div className="react-card-flipper" style={styles.flipper}>
        <div className="react-card-front" style={styles.front}>
          {getComponent('front')}
        </div>

        <div className="react-card-back" style={styles.back}>
          {getComponent('back')}
        </div>
      </div>
    </div>
  );
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
