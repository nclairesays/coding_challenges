function squareArrayInPlace(intArray) {

    intArray.forEach((int, index) => {
      intArray[index] *= int;
    });
  
    // NOTE: no need to return anything - we modified
    // intArray in place
  }
// if you call the intArray that was passed in, it would have the new results
  
  
  function squareArrayOutOfPlace(intArray) {
  
    // We allocate a new array that we'll fill in with the new values
    const squaredArray = [];
  
    intArray.forEach((int, index) => {
      squaredArray[index] = Math.pow(int, 2);
    });
  
    return squaredArray;
  }


//But be careful: an in-place algorithm can cause side effects. Your input is "destroyed" or "altered," which can affect code outside of your function. For example:

  const originalArray = [2, 3, 4, 5];
squareArrayInPlace(originalArray);

console.log('original array: ' + originalArray);
// Logs: original array: 4,9,16,25 - confusingly!


squareArrayOutOfPlace (originalArray)