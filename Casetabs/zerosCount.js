const zeros_count = N => {
    const bi = N.toString(2);
    let max = 0;
    let a = null;
    let b = null;
    let counter = 0;

    for (let i = 0; i < bi.length; i++) {
        if (bi.charAt(i) === "1" && b === null && counter === 0) {
            a = i;
        } else if (bi.charAt(i) === "0" && b === null) {
            ++counter;
        } else {
            b = i;
            if (counter > max) {
                max = counter;
                a = b;
                b = null;
                counter = 0;
            }
        }
    }
    console.log(bi)
    console.log(a, b, counter, max)
    return max;
}

zeros_count( 529 ) 

// time complexity: O(n)
// space comlexity: I haven't learned about how to calculate space complexity but I think it's O(n) also?