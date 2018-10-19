const add = (flockX, flockY) => flockX + flockY;
const multiply = (flockX, flockY) => flockX * flockY;

const flockA = 4;
const flockB = 2;
const flockC = 0;
const result = 0;

//add(multiply(flockB,add(flockA,flockC)), multiply(flockA,flockB));
multiply(flockB, add(flockA,flockA));

// The Case for Purity: Pure Functions
// A pure function is a function that, given the same input, will always return the same output and does not have any observable side effect.


// Currying: 

// Using add2 because add is already defined above and as a const is unmutable
const add2 = x => y => x + y;
const increment = add2(1);
const addTen = add2(10);
console.log(increment(2));
console.log(addTen(10));

// curry :: ((a, b, ...) -> c) -> a -> b -> ... -> c
const curry = (fn) => {
    const arity = fn.length;
  
    return function $curry(...args) {
      if (args.length < arity) {
        return $curry.bind(null, ...args);
      }
  
      return fn.call(null, ...args);
    };
  };
  const match = curry((what, s) => s.match(what));
  const replace = curry((what, replacement, s) => s.replace(what,replacement));
  const filter = curry((f, xs) => xs.filter(f));
  const map = curry((f, xs) => xs.map(f));