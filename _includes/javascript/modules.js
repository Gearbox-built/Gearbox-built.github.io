// Bad
const StyleGuide = require('./StyleGuide');
module.exports = StyleGuide.es6;

// Bad
import * as StyleGuide from './StyleGuide';
export default StyleGuide.es6;

// Good
import StyleGuide from './StyleGuide';
export default StyleGuide.es6;

// Best
import { es6 } from './StyleGuide';
export default es6;

// Bad
import utils from './utils';
import $ from 'jquery';

// Good
import $ from 'jquery';
import utils from './utils';