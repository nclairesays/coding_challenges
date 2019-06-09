var info = {
    "name": "claire",
    "address": {
        "city": "San Diego",
        "state": "CA"
    }
}

info.address.city = undefined
info.address.state = undefined

console.log(info)

info.address = undefined
console.log(info)



info.address = undefined

console.log(info)


// garbage collector


//primitive data type


// var age =23
// var arr = ['john', age, age+=10, age--, age-1, undefined];
// console.log(arr)

// arr.length = 2

// console.log(arr)

// delete arr[3] 
// console.log(arr.length)


// delete arr[0] 
// console.log(arr)
// console.log(arr.length)


// arr[6] = "sam" 
// // console.log(arr)

// console.log(age)