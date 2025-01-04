const fibonacci = function(n) {
  // Convert string input to a number
  n = Number(n);

  // Reject negative numbers
  if (n < 0) return "OOPS";

  // Handle 0 and 1 as base cases
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0;
  let b = 1;
  for(let i = 2; i <= n; i++){
    const temp = a + b;
    a = b;
    b = temp;
  }
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
