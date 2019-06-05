// Input
// flightLength: duration of the flight in minutes (integer)
// movieLengths: array of movie lengths in minutes (array of integers)
// Output
// boolean, true if there exists TWO movies that add up EXACTLY to the flightLength
// Examples
// flightLength = 160
// [80, 110, 40] => false
// [80, 110, 80] => true
// [20, 30, 110, 40, 50] => true
// sort it first - nlogn
// n * logn (for each search) => nlogn

function watchFlightMovies(flightLength, movieLengths) {
    let diff;
    const someHash = {};
    // { 80: 0, 110: 1, 40: 2 } = valuesLastSeen
    // { 80: 2, 110: 1 }
    // for(let i = 0; i < movieLengths.length; i++) {
    //     someHash[movieLengths[i]] = i   
    // }
    for(let i = 0; i < movieLengths.length; i++ ){
        diff = flightLength - movieLengths[i];
    
        if (someHash[diff]) {
            return true;
        }
        
        someHash[movieLengths[i]] = true;
        // if (someHash[diff] && i !== someHash[diff]) {
        //     return true;
        // }  
    }
    return false;
}

