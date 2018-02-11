import React from 'react';
import ReactDOM from 'react-dom';

import Example from './Example.jsx';
import SlowerExample from './SlowerExample.jsx';
import FasterExample from './FasterExample.jsx';
import RevolvingExample from './RevolvingExample.jsx';

const App = () => {
	const styles = {
		card: {
			border: '1px solid #eeeeee',
			borderRadius: '3px',
			padding: '15px',
			width: '250px'
		},
		image: {
			height: '200px',
			width: '250px'
		}
	};

	return (
		<div>
			<p>
				Click the button to flip the card!
			</p>

			<section className="example-section">
				<h3>
					Default card flip
				</h3>

				<Example styles={styles} />
			</section>

			<section className="example-section">
				<h3>
					Slower card flip
				</h3>

				<SlowerExample styles={styles} />
			</section>

			<section className="example-section">
				<h3>
					Faster card flip
				</h3>

				<FasterExample styles={styles} />
			</section>

			<section className="example-section">
				<h3>
					Revolving door card flip
				</h3>

				<RevolvingExample styles={styles} />
			</section>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('app'));
