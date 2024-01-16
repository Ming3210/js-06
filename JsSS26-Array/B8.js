let a = prompt("Nhập số phần tử của mảng")
let array = []
let count = 0
let subarray = []

for (let i = 0; i < a; i++) {
    array[i] = prompt()
}
for(let i = 0; i < a; i++) {
    for(let j = 1; j < a; j++) {
        if(array[i] == array[j]){
            count++
        }
    }
    
    if(count != 1) {
        subarray.push(array[i])
        count = 0
    }
}
for(let i = 0; i < subarray.length; i++) {
    for(let j = i+1; j < subarray.length; j++){
        if(subarray[i] == subarray[j]){
            subarray.splice(j,1)
        }
    }
}
console.log(subarray)
