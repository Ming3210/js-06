let a = prompt("Nhập số phần tử của mảng")
let arr = []
let count = 0

if(isNaN(a)==false) {
    for (let i = 0; i < a; i++) {
        arr[i] = prompt()
        console.log(arr[i])
    }
    let result = prompt("Nhập số nguyên")
    for(let i = 0; i < a; i++) {
        if(arr[i]===result) {
            count++;
    }
    if(count!= 0 ){
        alert("Số phần tử " + " "+ result +" " + "được xuất hiện " +" " + count + " "+ " lần")
    }else  alert(" 0 có phần tử nào đc tìm thấy")
}
    
}else alert("Invalid Input")