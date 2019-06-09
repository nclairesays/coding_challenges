var str='dababzbcabcaaaaaadz';
var arrS=str.split('');
console.log(arrS)

// console.log('size1')


var mySet = new Set();

for(let i=0; i < arrS.length;i++){
    mySet.add(arrS[i]);
}

console.log(mySet)

let sizeOfSet=mySet.size;
let min=arrS.length

arrS=null;

console.log("min vale",min)

for(let i=0; i<arrS.length;i++){
    let setComp = new Set();
    let cnt=0;
    for (let j=i;j<arrS.length;j++){
        cnt++
        setComp.add(arrS[j])
        if (setComp.size==sizeOfSet){
            if (cnt<min){
                min=cnt;
            } 
        }
    }
}

console.log(min)