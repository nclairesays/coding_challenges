// starting at the beginning of list

function sumList (list, index, currentSum = 0) {
    let sum = currentSum;
    let i = index
    sum += list[i];
    // console.log("sum", sum)

    if (i == list.length - 1) {
        console.log("sum2", sum, "i", i)
        return sum;
    }
    i++
    return sumList(list, i, sum)
}


let total=sumList([1,2,3,4], 0, 0)
console.log("TOTAL METHOD 1",total)





// Start at end of list
function sumList2(list){
    return sumRec(list,list.length-1,0);
}

function sumRec(list, index, currentSum = 0) {
    let sum = currentSum;
    let i = index

    sum += list[i];

    if (i == 0) {
        console.log("sum2:", sum, "index:", i)
        return sum;
    }
    i--
    return sumRec(list, i, sum)
}




let total2=sumList2([5,6,7,8,9])
console.log("TOTAL METHOD 2",total2)