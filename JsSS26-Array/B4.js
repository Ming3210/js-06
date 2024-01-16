let a = +prompt("Nhập a")
let b = +prompt("Nhập b")
let arr = []
if(isNaN(a)==false || isNaN(b)==false){
    if(a>b){
        for(let i=1;i<=a;i++){
            if(i%b==0){
            arr.push(i)
        }
        
    }
    console.log("Các số chia hết cho b",arr)
    }else if(a<b){
        for(let i=1;i<=b;i++){
            if(i%a==0){
            arr.push(i)
        }
    }
    console.log("Các số chia hết cho a",arr)
    }else {
        
        console.log("Các số chia hết cho a",a)
    }
}else alert("Invalid Input")