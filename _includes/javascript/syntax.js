// Bad
function test (){
  const x=y+5
  const dog = {
      breed: 'Dachshund'
    , legs: 'short'
  };

  if (x>6)
    return false;

  if(isJedi){
    console.log (x)
  }
  else{
    console.log (y)
  }
  return x
}

// Good
function test() {
  const x = y + 5;
  const dog = {
    breed: 'Dachshund',
    legs: 'short',
  };

  if (x > 6) return false;

  if (isJedi) {
    console.log(x);
  } else {
    console.log(y);
  }

  return x;
}

// Bad
function() { return false; }

// Good
function() {
  return false;
}