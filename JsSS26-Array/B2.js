let arr = [`a`,`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`]
let b = prompt("Nhập giá trị muốn tìm")
let count = 0

for (let i = 0; i < arr.length-1; i++) {
    if(arr[i]===b) {
        console.log("Giá trị vừa tìm:" +arr[i] )
        alert("Giá trị vừa tìm:"+arr[i])
        count++
        
    }
}

if(count == 0) {
    alert("Không tìm thấy giá trị nào trong mảng")
}



