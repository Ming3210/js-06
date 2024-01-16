let a = prompt("Nhập số phần tử của mảng")
let arr = []
let count = 0


for (let i = 0; i <a;i++) {
    arr[i] = prompt()
}
let length = arr.length-1
console.log("l="+length)
for (let i = 0; i < Math.floor(length/2); i++) {
    let temp = arr[i]
    arr[i] = arr[length - i]
    arr[length - i] = temp
}
console.log(arr)
