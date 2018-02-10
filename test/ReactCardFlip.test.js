import React from 'react';
import { mount } from 'enzyme';

import ReactCardFlip from '../src/ReactCardFlip.jsx';

describe('Flipping', () => {
	it('flips from front to back when props change', () => {
		const wrapper = mount(
			<ReactCardFlip>
				<div key="front">
					<p id="front_text">Front</p>
				</div>
				<div key="back">
					<p id="back_text">Back</p>
				</div>
			</ReactCardFlip>
		);
		expect(wrapper.find('.react-card-flipper').props().style.transform).toBe(
			'rotateY(0deg)'
		);
		wrapper.setProps({ isFlipped: true });
		expect(wrapper.find('.react-card-flipper').props().style.transform).toBe(
			'rotateY(180deg)'
		);
	});

	it('flips in the opposite direction on both sides when infinite prop is provided', () => {
		const wrapper = mount(
			<ReactCardFlip infinite>
				<div key="front">
					<p id="front_text">Front</p>
				</div>
				<div key="back">
					<p id="back_text">Back</p>
				</div>
			</ReactCardFlip>
		);
		expect(wrapper.find('.react-card-flipper').props().style.transform).toBe(
			'rotateY(0deg)'
		);
		wrapper.setProps({ isFlipped: true });
		expect(wrapper.find('.react-card-flipper').props().style.transform).toBe(
			'rotateY(180deg)'
		);
		wrapper.setProps({ isFlipped: false });
		expect(wrapper.find('.react-card-flipper').props().style.transform).toBe(
			'rotateY(360deg)'
		);
	});

	it('does nothing when rerendering with no isFlipped prop change', () => {
		const wrapper = mount(
			<ReactCardFlip isFlipped>
				<div key="front">
					<p id="front_text">Front</p>
				</div>
				<div key="back">
					<p id="back_text">Back</p>
				</div>
			</ReactCardFlip>
		);
		expect(wrapper.find('.react-card-flipper').props().style.transform).toBe(
			'rotateY(180deg)'
		);

		wrapper.setProps({ isFlipped: true });
		expect(wrapper.find('.react-card-flipper').props().style.transform).toBe(
			'rotateY(180deg)'
		);
	});
});

describe('Rendering', () => {
	it('fails if not given two children', () => {
		expect(() => {
			mount(
				<ReactCardFlip>
					<div key="front">
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
				<div key="front">
					<p id="front_text">Front</p>
				</div>
				<div key="back">
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
