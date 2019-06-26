// My initial solution: 92ms
// Runtime: 96 ms, faster than 68.05% of JavaScript online submissions for First Unique Character in a String.
// Memory Usage: 38.5 MB, less than 42.61% of JavaScript online submissions for First Unique Character in a String.
// Next challenges:
var firstUniqChar = function(s) {
    
    if (!s || s === "") {return -1}
    
    const letters = {}
    
    for ( let l of s ) {
        if (letters[l]) { letters[l]++ }
        else {
            letters[l] = 1
        }
    }

    // other solution for above loop:
    // for (let i = 0; i < s.length; i++) {
    //     if (!counts[s[i]]) {
    //         counts[s[i]] = 0;
    //     }
    //     counts[s[i]]++;
    // }
    
    for (let i = 0; i < s.length; i++ ){
        if (letters[s[i]] === 1) {
            return i
        }
    }
    
    return -1
    
}

//84ms... similar to mine. but when I copy and paste this, it still says
//108 ms, faster than 38.31% 
var firstUniqChar = function(s) {
    if (!s) {
        return -1;
    }
    let counts = {};
    for (let i = 0; i < s.length; i++) {
        if (!counts[s[i]]) {
            counts[s[i]] = 0;
        }
        counts[s[i]]++;
    }
    for (let i = 0; i < s.length; i++) {
        if (counts[s[i]] === 1) {
            return i;
        }
    }
    
    return -1;
};


// sample 80ms submission:
var firstUniqChar = function(s) {
    if(!s || s === "") return -1;
       if(s.length === 1) return 0;
       
        for (let i = 0; i < s.length; i++) {
           let j = s.charAt(i)
           if (s.indexOf(j) === s.lastIndexOf(j)) {
               return i;
           }
       }
      return -1;
   };


// sample 56ms submission:
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const occurrences = [];
    const charCodeBase = 'a'.charCodeAt(0);

    // collect occurrences of characters with respect character codes
    for (let i = 0; i < s.length; i++) {
        let position = s.charCodeAt(i) - charCodeBase;
        if (! occurrences[position]) occurrences[position] = 1
        else occurrences[position]++;
    }
    // return the first unique character's index
    for (let i = 0; i < s.length; i++)
        if (occurrences[s.charCodeAt(i) - charCodeBase] === 1) return i;

    return -1;
};

// sample 60ms submission:
var firstUniqChar = function(s) {
    
    let count = new Array(26).fill(0);
   for(let i=0;i<s.length;i++){
       count[s.charAt(i).charCodeAt(0)-97] +=1;
   }
   for(let i=0;i<s.length;i++){
       if(count[s.charAt(i).charCodeAt(0)-97]==1) return i;
   }
   return -1;
};