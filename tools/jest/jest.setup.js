/* eslint-disable @typescript-eslint/no-var-requires */
const Enzyme = require('enzyme');

const Adapter = require('enzyme-adapter-react-16');
require('@babel/polyfill');
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
