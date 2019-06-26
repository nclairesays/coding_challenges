// Write a function that given a list of non negative integers, 
// arranges them such that they form the largest possible number. 
// For example, given [50, 2, 1, 9], the largest formed number is 95021.

function largestFormedNumber(array) {
    let arr = array.map(String).sort().reverse()
    // console.log(arr) //[ '99', '98', '9', '8', '6', '503', '50', '1' ]

    return arr
}

let num = largestFormedNumber([8, 9, 6, 1, 99, 98, 503, 50]) //SHOULD BE: 9999886505031

// console.log(num)