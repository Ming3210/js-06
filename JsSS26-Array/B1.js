let a = prompt("Nhập số phần tử của mảng")
let array = []
let count = 0

if(isNaN(a)==false) {
    for (let i = 0; i < a; i++) {
    array[i] = prompt()
    console.log(array[i])
    if(isNaN(array[i])==false){
        count++
    }
    }
    if(count==0) {
        alert("Trong mảng ko có số nguyên nào")
    }
}else alert("Invalid Input")
