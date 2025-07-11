/*
Kiểu number trong Javascript

1. Tạo giá trị number
    - Các cách tạo 
    - Dùng cách nào? Tại sao?
    - Kiểm tra datatype

2. Làm việc với number
    - To string
    - To fixed
*/


//1
var age = 18
var PI = 3.14

var otherNumber = new Number(9);

var results = 20 / 'abc'

console.log(!isNaN(results)) //ktra xem typeof có phải NaN hay ko

//2
console.log(age.toString())
//ép từ kiểu number -> string



//to fixed (làm tròn)
console.log(PI.toFixed(2)) //làm còn 2 chữ số thập phân
//khi không có số 2 trong () toFixed() sẽ mặc định hiểu bên trong là số 0


function isNumber(value){
    return typeof value === 'number' && 
    !Number.isNaN(value);
}




// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false

console.log(isNumber(NaN)); // false
console.log(isNumber(100 / 'abc')); // false


console.log(Number.isNaN(100/ 'abc')) //cách kiểm tra
//value là NaN hay ko


//key : JS number methods