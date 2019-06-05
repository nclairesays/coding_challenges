
// ## Requirement
// Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

// **For example:**

// Given the array `[-2,1,-3,4,-1,2,1,-5,4]`,

// the contiguous subarray `[4,-1,2,1]` has the largest sum = 6.

// For this problem, return the maximum sum.

/// [-1, 2, 3] => 5 

/// [-1, 2,  4, -2,  3] => 2, 4, -2, 3 => 7 

// const arr = [-1, 2,  4, -2,  3] 


// Let us say Ai ... Ak prefix had a negative sum.
// Sum ( Ai Ai+1 ... Aj ) = Sum (Ai ... Ak) + Sum(Ak+1 ... Aj)
// Sum ( Ai Ai+1 ... Aj) - Sum(Ak+1 ... Aj) = Sum(Ai ... Ak)
// Now, since Sum(Ai ... Ak) < 0,
// Sum (Ai Ai+1 ... Aj) - Sum (Ak+1 ... Aj) < 0
// which means Sum(Ak+1 ... Aj ) > Sum (Ai Ai+1 ... Aj)
// This contradicts the fact that Ai, Ai+1 ... Aj is our optimal solution.











const array = [-1, -10,  -8, -2,  -4] 

function sub (arr) {
    let max = arr[0]
        for (let i = 0; i < arr.length; i++) {
            if (max < arr[i] + arr[i+1]){
                max = arr[i] + arr[i+1]
            }
    }
    return max
}
  
console.log(sub(array))

 
