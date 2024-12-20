function foo(x) {
  if (x == null) {
    return 0; // This is incorrect!
  }
  return x + 1;
}

console.log(foo(null)); // Outputs 0
console.log(foo(undefined)); // Outputs NaN (should be 0)