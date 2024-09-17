class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

// my solution with a recursion
function reliableMultiply(a, b) {
  try {
  	return primitiveMultiply(a, b);
  } catch (err) {
  	if (err instanceof MultiplicatorUnitFailure) {
      	console.log(err.message);
    	return reliableMultiply(a, b);
    }
    throw err;
  }
}

// suggest solution with infinite loop

console.log(reliableMultiply(8, 8));
// → 64