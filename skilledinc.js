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

//v1 )

function watchFlightMovies(flightLength, movieLengths) {
    let diff;
    const someHash = {};
    
    for(let i = 0; i < movieLengths.length; i++){
        diff = flightLength - movieLengths[i];
        if (someHash[diff]) {
            return true;
        }
        someHash[movieLengths[i]] = true;
    }
    return false;
}


// v2)


function watchFlightMovies2(flightLength, movieLengths) {
    let diff;
    const someHash = {};

    // { 80: 0, 110: 1, 40: 2 } = valuesLastSeen
    // { 80: 2, 110: 1 }
    // save the indices, 
    for(let i = 0; i < movieLengths.length; i++) {
        someHash[movieLengths[i]] = i   
    }

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



// v4 O(2n) ; but this does not account 2 same movie legnths ==> 80+80 =160
function watchFlightMovies4(flightLength, movieLengths) {
    let diff;
    const someHash = {};
    for(let i = 0; i < movieLengths.length; i++) {
        someHash[movieLengths[i]] = "some truthy value"   
    }
    for(let i = 0; i < movieLengths.length; i++){
        diff = flightLength - movieLengths[i];
        if(someHash[diff]){
            return true
        }
    }
}

// v5) brute force O(n^2)
function watchFlightMovies5(flightLength, movieLengths) {
    let diff;
    for(let i = 0; i < movieLengths.length; i++ ){
        diff = flightLength - movieLengths[i];
        for(let j = ++i; i < movieLengths.length; i++) {
            if (movieLengths[j] === diff) {
                return true
            }
        }
    }
}