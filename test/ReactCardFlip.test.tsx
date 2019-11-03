import React from 'react';
import { mount } from 'enzyme';

import ReactCardFlip from '../src/ReactCardFlip';

describe('Flipping', () => {
  it('flips from front to back when props change', () => {
    const wrapper = mount(
      <ReactCardFlip>
        <div>
          <p id="front_text">Front</p>
        </div>
        <div>
          <p id="back_text">Back</p>
        </div>
      </ReactCardFlip>
    );
    expect(wrapper.find('.react-card-front').props().style.transform).toBe(
      'rotateY(0deg)'
    );
    expect(wrapper.find('.react-card-back').props().style.transform).toBe(
      'rotateY(-180deg)'
    );

    wrapper.setProps({ isFlipped: true });
    wrapper.update();

    expect(wrapper.find('.react-card-front').props().style.transform).toBe(
      'rotateY(180deg)'
    );
    expect(wrapper.find('.react-card-back').props().style.transform).toBe(
      'rotateY(0deg)'
    );
  });

  it('flips vertically', () => {
    const wrapper = mount(
      <ReactCardFlip flipDirection="vertical">
        <div>
          <p id="front_text">Front</p>
        </div>
        <div>
          <p id="back_text">Back</p>
        </div>
      </ReactCardFlip>
    );
    expect(wrapper.find('.react-card-front').props().style.transform).toBe(
      'rotateX(0deg)'
    );
    expect(wrapper.find('.react-card-back').props().style.transform).toBe(
      'rotateX(-180deg)'
    );

    wrapper.setProps({ isFlipped: true });
    wrapper.update();

    expect(wrapper.find('.react-card-front').props().style.transform).toBe(
      'rotateX(180deg)'
    );
    expect(wrapper.find('.react-card-back').props().style.transform).toBe(
      'rotateX(0deg)'
    );
  });

  it('flips in the opposite direction on both sides when infinite prop is provided', () => {
    const wrapper = mount(
      <ReactCardFlip infinite>
        <div>
          <p id="front_text">Front</p>
        </div>
        <div>
          <p id="back_text">Back</p>
        </div>
      </ReactCardFlip>
    );

    expect(wrapper.find('.react-card-front').props().style.transform).toBe(
      'rotateY(0deg)'
    );
    expect(wrapper.find('.react-card-back').props().style.transform).toBe(
      'rotateY(180deg)'
    );

    let isFlipped = true;

    for (let i = 1; i <= 5; i++) {
      wrapper.setProps({ isFlipped });
      wrapper.update();
      expect(wrapper.find('.react-card-front').props().style.transform).toBe(
        `rotateY(${0 + i * 180}deg)`
      );
      expect(wrapper.find('.react-card-back').props().style.transform).toBe(
        `rotateY(${180 + i * 180}deg)`
      );

      isFlipped = !isFlipped;
    }
  });

  it('does nothing when rerendering with no isFlipped prop change', () => {
    const wrapper = mount(
      <ReactCardFlip isFlipped>
        <div>
          <p id="front_text">Front</p>
        </div>
        <div>
          <p id="back_text">Back</p>
        </div>
      </ReactCardFlip>
    );

    expect(wrapper.find('.react-card-front').props().style.transform).toBe(
      'rotateY(180deg)'
    );
    expect(wrapper.find('.react-card-back').props().style.transform).toBe(
      'rotateY(0deg)'
    );

    wrapper.setProps({ isFlipped: true });

    expect(wrapper.find('.react-card-front').props().style.transform).toBe(
      'rotateY(180deg)'
    );
    expect(wrapper.find('.react-card-back').props().style.transform).toBe(
      'rotateY(0deg)'
    );
  });
});

describe('Rendering', () => {
  it('fails if not given two children', () => {
    expect(() => {
      mount(
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
    const wrapper = mount(
      <ReactCardFlip isFlipped cardStyles={styles}>
        <div>
          <p id="front_text">Front</p>
        </div>
        <div>
          <p id="back_text">Back</p>
        </div>
      </ReactCardFlip>
    );

    expect(wrapper.find('.react-card-front').props().style.position).toBe(
      'absolute'
    );
    expect(wrapper.find('.react-card-back').props().style.position).toBe(
      'fixed'
    );
  });
});
