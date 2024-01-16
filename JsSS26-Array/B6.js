let a = [-1,-2,4,-6,7,-5,3,-10,-11,20,-8]
let length = a.length

for (let i = 1; i < length; i++) {
    for(let j = 0; j < length; j++) {
        if(a[j]>0){
            let temp = a[j]
            a[j] = a[i]
            a[i] = temp
        }
    }
}
console.log(a)