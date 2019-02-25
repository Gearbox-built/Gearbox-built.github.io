// USING CLASS
// Bad
function Queue(contents = []) {
  this._queue = [...contents];
}
Queue.prototype.pop = function() {
  const value = this._queue[0];
  this._queue.splice(0, 1);
  return value;
}

// Good
class Queue {
  constructor(contents = []) {
    this._queue = [...contents];
  }

  pop() {
    const value = this._queue[0];
    this._queue.splice(0, 1);
    return value;
  }
}

// USING EXTENDS
// Bad
const inherits = require('inherits');
function PeekableQueue(contents) {
  Queue.apply(this, contents);
}
inherits(PeekableQueue, Queue);
PeekableQueue.prototype.peek = function() {
  return this._queue[0];
}

// Good
class PeekableQueue extends Queue {
  peek() {
    return this._queue[0];
  }
}


// TOSTRING
class Jedi {
  contructor(options = {}) {
    this.name = options.name || 'no name';
  }

  getName() {
    return this.name;
  }

  toString() {
    return `Jedi - ${this.getName()}`;
  }
}


// ACCESSORS
// Bad
dragon.age();
dragon.age(25);

// Good
dragon.getAge();
dragon.setAge(25);

// Bad
if (!dragon.born()) {
  return false;
}

// Good
if (!dragon.isBorn()) {
  return false;
}

// OK
class Jedi {
  constructor(options = {}) {
    const lightsaber = options.lightsaber || 'blue';
    this.set('lightsaber', lightsaber);
  }

  set(key, val) {
    this[key] = val;
  }

  get(key) {
    return this[key];
  }
}