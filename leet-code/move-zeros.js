// THEY'RE PRETTY MUCH SAME BUT DIFFERENT RUN TIME SPEEDS?

// My initial solution:
//72 ms  36400kb space
// should have used regular for loop. indexOf takes space and time
for (num of nums) {
    if (num === 0) {
        nums.splice(nums.indexOf(num),1)
        nums.push(0)
    }
}
return nums

// 60ms
var moveZeroes = function(nums) {
    for (var i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }
    return nums
};

// 72ms
var moveZeroes = function(nums) {
    for (var i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }
    return nums
};

//47ms
var moveZeroes = function (nums) {
    for(var i= nums.length; i >= 0; i-- ) {
        if (nums[i] == 0) {
            nums.splice(i, 1);
            nums.push(0)
        }
    }
}

//beats many in space complexity?
var moveZeroes = function(nums) {
    for(let i =0;i<nums.length;i++) {
        if(nums[i] === 0) {
             nums.push(nums.splice(i, 1));
            i = i - 1;
        }
    }
    return nums;
};



//low space
const moveZeroes = (nums) => {
    if (!nums || nums.length === 0) return;
    
    let leftNonZeroIndex = 0;
    
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] !== 0) {
            nums[leftNonZeroIndex++] = nums[i];
        }
    }
    
    while (leftNonZeroIndex < nums.length) {
        nums[leftNonZeroIndex++] = 0;
    }
};