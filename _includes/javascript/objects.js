// LITERAL SYNTAX / OBJECT METHOD SHORTHAND / RESERVED WORDS
// Bad
const superman = new Object(
  default: { clark: 'kent' },
  private: true,
  class: 'alien',

  laserEyes: function (target) {
    return `${target} is real dead`;
  },
);

// Good
const superman = {
  defaults: { clark: 'kent' },
  hidden: true,
  type: 'alien',

  laserEyes(target) {
    return `${target} is real dead`;
  },
};


// COMPUTED PROPERTY NAMES
function getKey(k) {
  return `a key named ${k}`;
}

// Bad
const obj = {
  name: 'San Francisco',
};
obj[getKey('enabled')] = true;

// Good
const obj = {
  name: 'San Francisco',
  [getKey('enabled')]: true,
};


// PROPERTY VALUE SHORTHAND
const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

// Bad
const obj = {
  episodeOne: 1,
  lukeSkywalker,
  twoJedisWalkIntoACantina: 2,
  anakinSkywalker,
};

// Good
const obj = {
  lukeSkywalker,
  anakinSkywalker,
  episodeOne: 1,
  twoJedisWalkIntoACantina: 2,
};


// ACCESSING PROPERTIES
const luke = {
  jedi: true,
  age: 28,
};

// Bad
const isJedi = luke['jedi'];

// Good
const isJedi = luke.jedi;