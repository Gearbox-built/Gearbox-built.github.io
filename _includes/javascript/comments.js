// Bad
// make() returns a new element
// based on the passed in tag name
//
// @param {String} tag
// @return {Element} element
function make(tag) {
  let dogs = 1;
  // there are no cats
  let cats = 0;
  let element = document.createElement(tag); // create element

  return element;
}

// Good
/**
 * make() returns a new element
 * based on the passed in tag name
 *
 * @param {String} tag
 * @return {Element} element
 */
function make(tag) {
  // FIXME: this isn't nearly enough dogs
  let dogs = 1;

  // TODO: add more cats
  let cats = 0;

  // create element
  let element = document.createElement(tag);

  return element;
}