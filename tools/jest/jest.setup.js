/* eslint-disable @typescript-eslint/no-var-requires */
const Enzyme = require('enzyme');

const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');
require('@babel/polyfill');

Enzyme.configure({ adapter: new Adapter() });
