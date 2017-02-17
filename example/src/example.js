import React from 'react';
import ReactDOM from 'react-dom';
import ReactCardFlip from 'react-card-flip';

class App extends React.Component {
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
		var styles = {
			example: {
				height: '75vh',
				width: '250px'
			},
			card: {
				border: '1px solid #eeeeee',
				borderRadius: '3px',
				padding: '15px',
				width: '250px'
			},
			image: {
				width: '250px'
			}
		};

		return (
			<div style={styles.example}>
				<p>
					Click the button to flip the card!
				</p>

				<ReactCardFlip isFlipped={this.state.isFlipped}>
					<div key="front" style={styles.card}>
						<img
							style={styles.image}
							src="//www.petfinder.com/wp-content/uploads/2012/11/dog-how-to-select-your-new-best-friend-thinkstock99062463.jpg"
						/>

						<button onClick={this.handleClick}>
							Flip Card
						</button>
					</div>

					<div key="back" style={styles.card}>
						<img
							style={styles.image}
							src="//img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr06/4/16/enhanced-11136-1396643149-13.jpg?no-auto"
						/>

						<button onClick={this.handleClick}>
							Flip Card
						</button>
					</div>
				</ReactCardFlip>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
