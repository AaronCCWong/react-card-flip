import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom';

import ReactCardFlip from '../src/ReactCardFlip';

const querySelectorHTML = (parent: HTMLElement, query: string): HTMLElement => {
  return parent.querySelector(query) as HTMLElement;
}

describe('Flipping', () => {
  it('flips from front to back when props change', () => {
    const Card = ({isFlipped = false}) => {
      return (
        <ReactCardFlip isFlipped={isFlipped}>
          <div>
            <p id="front_text">Front</p>
          </div>
          <div>
            <p id="back_text">Back</p>
          </div>
        </ReactCardFlip>
      );
    };

    const { container, rerender } = render(<Card/>);

    expect(querySelectorHTML(container, ".react-card-front").style.transform).toBe(
      'rotateY(0deg)'
    );
    expect(querySelectorHTML(container, ".react-card-back").style.transform).toBe(
      'rotateY(-180deg)'
    );

    rerender(<Card isFlipped={true}/>)

    expect(querySelectorHTML(container, ".react-card-front").style.transform).toBe(
      'rotateY(180deg)'
    );
    expect(querySelectorHTML(container, ".react-card-back").style.transform).toBe(
      'rotateY(0deg)'
    );
  });

  it('flips vertically', () => {
    const Card = ({isFlipped = false}) => {
      return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div>
            <p id="front_text">Front</p>
          </div>
          <div>
            <p id="back_text">Back</p>
          </div>
        </ReactCardFlip>
      );
    };
    const { container, rerender } = render(<Card/>);
    expect(querySelectorHTML(container, ".react-card-front").style.transform).toBe(
      'rotateX(0deg)'
    );
    expect(querySelectorHTML(container, ".react-card-back").style.transform).toBe(
      'rotateX(-180deg)'
    );

    rerender(<Card isFlipped={true}/>);

    expect(querySelectorHTML(container, ".react-card-front").style.transform).toBe(
      'rotateX(180deg)'
    );
    expect(querySelectorHTML(container, ".react-card-back").style.transform).toBe(
      'rotateX(0deg)'
    );
  });

  it('flips in the opposite direction on both sides when infinite prop is provided', () => {
    const Card = ({isFlipped = false}) => {
      return (
        <ReactCardFlip isFlipped={isFlipped} infinite>
          <div>
            <p id="front_text">Front</p>
          </div>
          <div>
            <p id="back_text">Back</p>
          </div>
        </ReactCardFlip>
      );
    };

    const { container, rerender } = render(<Card/>);

    expect(querySelectorHTML(container, ".react-card-front").style.transform).toBe(
      'rotateY(0deg)'
    );
    expect(querySelectorHTML(container, ".react-card-back").style.transform).toBe(
      'rotateY(180deg)'
    );

    let isFlipped = true;

    for (let i = 1; i <= 5; i++) {
      rerender(<Card isFlipped={isFlipped}/>);
      expect(querySelectorHTML(container, ".react-card-front").style.transform).toBe(
        `rotateY(${0 + i * 180}deg)`
      );
      expect(querySelectorHTML(container, ".react-card-back").style.transform).toBe(
        `rotateY(${180 + i * 180}deg)`
      );

      isFlipped = !isFlipped;
    }
  });

  it('does nothing when rerendering with no isFlipped prop change', () => {
    const Card = ({isFlipped = false}) => {
      return (
        <ReactCardFlip isFlipped>
          <div>
            <p id="front_text">Front</p>
          </div>
          <div>
            <p id="back_text">Back</p>
          </div>
        </ReactCardFlip>
      );
    };

    const { container, rerender } = render(<Card/>);

    expect(querySelectorHTML(container, ".react-card-front").style.transform).toBe(
      'rotateY(180deg)'
    );
    expect(querySelectorHTML(container, ".react-card-back").style.transform).toBe(
      'rotateY(0deg)'
    );

    rerender(<Card isFlipped={true}/>);

    expect(querySelectorHTML(container, ".react-card-front").style.transform).toBe(
      'rotateY(180deg)'
    );
    expect(querySelectorHTML(container, ".react-card-back").style.transform).toBe(
      'rotateY(0deg)'
    );
  });
});

describe('Rendering', () => {
  it('fails if not given two children', () => {
    expect(() => {
      render(
        // ignore this typescript error since this particular test case is expected to throw an error
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        <ReactCardFlip>
          <div>
            <p id="front_text">Front</p>
          </div>
        </ReactCardFlip>
      );
    }).toThrow();
  });

  it('allows overriding the card container styles', () => {
    const styles = {
      front: {
        position: 'absolute'
      },
      back: {
        position: 'fixed'
      }
    };
    const { container } = render(
      <ReactCardFlip cardStyles={styles}>
        <div>
          <p id="front_text">Front</p>
        </div>
        <div>
          <p id="back_text">Back</p>
        </div>
      </ReactCardFlip>
    );

    expect(querySelectorHTML(container, ".react-card-front").style.position).toBe(
      'absolute'
    );
    expect(querySelectorHTML(container, ".react-card-back").style.position).toBe(
      'fixed'
    );
  });

  it('accepts a custom class name for the container', () => {
    const { container } = render(
      <ReactCardFlip containerClassName="test-class-name">
        <div>
          <p id="front_text">Front</p>
        </div>
        <div>
          <p id="back_text">Back</p>
        </div>
      </ReactCardFlip>
    );
    expect(container.querySelector('.test-class-name')).not.toBeNull();
  });
});
