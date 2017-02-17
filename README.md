# ReactCardFlip

React Card Flip is allows you to use the card flipping animation. Credit for the
CSS goes to [David Walsh](https://davidwalsh.name/css-flip).


## Demo & Examples

Live demo: [Demo](//www.aaronccwong.com/react-card-flip/)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use react-card-flip is to install it from NPM with the
command:

```
npm install react-card-flip --save
```

You can also use the standalone build by including `dist/react-card-flip.js` in
your page. If you use this, make sure you have already included React, and it is
available as a global variable.


## Usage

To use this component, first import ReactCardFlip:

```
import ReactCardFlip from 'react-card-flip';
```

and then provide it with two child components with keys marked `front` and `back`
so that the component can tell which component should be in the front and which
component should be in the back.

This component only allows for manual card flip so make sure to include a tag
that has an onClick handler for each side of the card.

The animation itself will be controlled by the prop `isFlipped`. Use this to
control whether to show the front or the back of the card.

```
class App extends React.Component {
  component() {
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ isFlipped: !this.state.isFlipped });
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped}>
        <FrontComponent key="front">
          This is the front of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </FrontComponent>

        <BackComponent key="back">
          This is the back of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </BackComponent>
      </ReactCardFlip>
    )
  }
}
```

### Properties

| Props     | Type    | Description                                                |
|-----------|---------|------------------------------------------------------------|
| isFlipped | bool    | False to show the front of the card, true to show the back |

## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## Contributing

Fork this repo, add your proposed features and make a pull request. I will
review as soon as possible.

## License

This project is licensed under the terms of the MIT license. Check [LICENSE.txt](https://github.com/AaronCCWong/react-remark/blob/master/LICENSE.txt)
for more information.
