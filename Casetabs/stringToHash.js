const str = "{key:[[value_1, value_2],[value_3, value4]], 5:10:00AM]}"

const parser = str => {
    const arraySplit = str.split(":");
    const firstKey = arraySplit.shift().slice(1)
    const obj = str.substring(firstKey.length+3, str.length-2)
    const valueSplit = obj.split('], ')
    const firstValArray = []

    while (valueSplit.length > 1){
    firstValArray.push(valueSplit.shift())
    }
    
    //5 => 10:00AM
    const lastPair = valueSplit[0].substring(0, valueSplit[0].length)
    const lastKey = lastPair.split(":").shift()
    const lastValue = lastPair.substring(lastKey.length+1, lastPair.length)

    return {[firstKey]: firstValArray, [lastKey]: lastValue}
}

const parsed = parser(str)
console.log("PARSED", parsed)



