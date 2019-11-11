"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_1 = require("react");
var ReactCardFlip = function (props) {
    var flipDirection = props.flipDirection, infinite = props.infinite, flipSpeedFrontToBack = props.flipSpeedFrontToBack, flipSpeedBackToFront = props.flipSpeedBackToFront, _a = props.cardStyles, front = _a.front, back = _a.back, containerStyle = props.containerStyle, cardZIndex = props.cardZIndex;
    var _b = react_1.useState(props.isFlipped), isFlipped = _b[0], setFlipped = _b[1];
    var _c = react_1.useState(0), rotation = _c[0], setRotation = _c[1];
    react_1.useEffect(function () {
        if (props.isFlipped !== isFlipped) {
            setFlipped(props.isFlipped);
            setRotation(function (c) { return c + 180; });
        }
    }, [props.isFlipped]);
    var getComponent = function (key) {
        if (props.children.length !== 2) {
            throw new Error('Component ReactCardFlip requires 2 children to function');
        }
        return props.children[key];
    };
    var frontRotateY = "rotateY(" + (infinite ? rotation : isFlipped ? 180 : 0) + "deg)";
    var backRotateY = "rotateY(" + (infinite ? rotation + 180 : isFlipped ? 0 : -180) + "deg)";
    var frontRotateX = "rotateX(" + (infinite ? rotation : isFlipped ? 180 : 0) + "deg)";
    var backRotateX = "rotateX(" + (infinite ? rotation + 180 : isFlipped ? 0 : -180) + "deg)";
    var styles = {
        container: {
            perspective: '1000px',
            zIndex: "" + cardZIndex
        },
        flipper: {
            position: 'relative',
            width: '100%',
            height: '100%'
        },
        front: __assign({ WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden', left: '0', position: isFlipped ? 'absolute' : 'relative', top: '0', transform: flipDirection === 'horizontal' ? frontRotateY : frontRotateX, transformStyle: 'preserve-3d', width: '100%', height: '100%', zIndex: '2', transition: flipSpeedBackToFront + "s" }, front),
        back: __assign({ WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden', left: '0', position: isFlipped ? 'relative' : 'absolute', transform: flipDirection === 'horizontal' ? backRotateY : backRotateX, transformStyle: 'preserve-3d', top: '0', width: '100%', height: '100%', transition: flipSpeedFrontToBack + "s" }, back)
    };
    return (React.createElement("div", { className: "react-card-flip", style: __assign(__assign({}, styles.container), containerStyle) },
        React.createElement("div", { className: "react-card-flipper", style: styles.flipper },
            React.createElement("div", { className: "react-card-front", style: styles.front }, getComponent(0)),
            React.createElement("div", { className: "react-card-back", style: styles.back }, getComponent(1)))));
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
exports.default = ReactCardFlip;
