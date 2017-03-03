import React from 'react';

class ReactCardFlip extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isFlipped: this.props.isFlipped
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.isFlipped !== this.props.isFlipped) {
			this.setState({ isFlipped: nextProps.isFlipped });
		}
	}

	getComponent(key) {
		return this.props.children.filter(component => {
			return component.key === key;
		});
	}

	render() {
		const styles = {
			container: {
				perspective: '1000px',
				transformStyle: 'preserve-3d'
			},
			flipper: {
				position: 'relative',
				transformStyle: 'preserve-3d',
				transition: '0.6s'
			},
			flipperFlip: {
				position: 'relative',
				transform: 'rotateY(180deg)',
				transformStyle: 'preserve-3d',
				transition: '0.6s'
			},
			front: {
				WebkitBackfaceVisibility: 'hidden',
				backfaceVisibility: 'hidden',
				left: '0',
				position: 'absolute',
				top: '0',
				transform: 'rotateY(0deg)',
				transformStyle: 'preserve-3d',
				width: '100%',
				zIndex: '2'
			},
			back: {
				WebkitBackfaceVisibility: 'hidden',
				backfaceVisibility: 'hidden',
				left: '0',
				position: 'absolute',
				transform: 'rotateY(180deg)',
				transformStyle: 'preserve-3d',
				top: '0',
				width: '100%'
			}
		};

		return (
			<div className="react-card-flip" style={styles.container}>
				<div
					className="react-card-flipper"
					style={this.state.isFlipped ? styles.flipperFlip : styles.flipper}>
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
	children: (props, propName, componentName) => {
		if (React.Children.count(props[propName]) !== 2) {
			return new Error(`${componentName} requires two children.`);
		}
	},
	isFlipped: React.PropTypes.bool
};



export default ReactCardFlip;
