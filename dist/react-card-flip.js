(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ReactCardFlip = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var ReactCardFlip = (function (_React$Component) {
	_inherits(ReactCardFlip, _React$Component);

	function ReactCardFlip(props) {
		_classCallCheck(this, ReactCardFlip);

		_get(Object.getPrototypeOf(ReactCardFlip.prototype), 'constructor', this).call(this, props);
		this.state = {
			isFlipped: this.props.isFlipped
		};
	}

	_createClass(ReactCardFlip, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.isFlipped !== this.props.isFlipped) {
				this.setState({ isFlipped: nextProps.isFlipped });
			}
		}
	}, {
		key: 'getComponent',
		value: function getComponent(key) {
			return this.props.children.filter(function (component) {
				return component.key === key;
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var styles = {
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

			return _react2['default'].createElement(
				'div',
				{ className: 'react-card-flip', style: styles.container },
				_react2['default'].createElement(
					'div',
					{
						className: 'react-card-flipper',
						style: this.state.isFlipped ? styles.flipperFlip : styles.flipper },
					_react2['default'].createElement(
						'div',
						{ className: 'react-card-front', style: styles.front },
						this.getComponent('front')
					),
					_react2['default'].createElement(
						'div',
						{ className: 'react-card-back', style: styles.back },
						this.getComponent('back')
					)
				)
			);
		}
	}]);

	return ReactCardFlip;
})(_react2['default'].Component);

ReactCardFlip.propTypes = {
	children: function children(props, propName, componentName) {
		if (_react2['default'].Children.count(props[propName]) !== 2) {
			return new Error(componentName + ' requires two children.');
		}
	},
	isFlipped: _react2['default'].PropTypes.bool
};

exports['default'] = ReactCardFlip;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});