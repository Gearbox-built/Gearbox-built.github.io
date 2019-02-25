// Bad
function q() {
  const OBJEcttsssss = {};
  const this_is_my_object = {};

  const that = this;
  return function() {
    console.log(that);
  };
}

// Good
function query() {
  const thisIsMyObject = {};
  function thisIsMyFunction() {}

  return () => {
    console.log(this);
  };
}

// Bad
function good_dog(options) {
  this.__furColour__ = options.fur;
  this.furColour_ = options.fur;
}

// Good
class GoodDog {
  constructor(options) {
    this._furColour = options.fur;
  }
}
export default GoodDog;

// Bad
import GoodDog from './good_dog';

// Good
import GoodDog from './GoodDog';

// Good
function petSomeDogs() {
  // ...
}
export default petSomeDogs;