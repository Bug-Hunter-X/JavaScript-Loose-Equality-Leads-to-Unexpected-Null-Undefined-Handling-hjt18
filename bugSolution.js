function foo(x) {
  if (x === null || x === undefined) {
    return 0;
  }
  return x + 1;
}

console.log(foo(null)); // Outputs 0
console.log(foo(undefined)); // Outputs 0