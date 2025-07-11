/* 
Kiểu dữ liệu trong javascript 

1. Dữ liệu nguyên thuỷ - Primitive Data
    -Number
    -String
    -Boolean
    -Undefined
    -Null
    -Symbol

2. Dữ liệu phức tạp - Complex Data
    -Function 
    -Object
*/



// number type
var a = 1
var b = 2
var c = 1.5

// string type
var fullname = 'Dinh \'Tuan'
//  dấu \ giúp viết thêm dấu nháy ở bên trong dấu nháy
console.log(fullname)


// boolean type
var isSuccess = true
console.log(isSuccess)


//undfined type 
var age;
console.log(age)


//null
var isNull = null
console.log(null)


//symbol
var id = Symbol('id')
var id2 = Symbol('id')

console.log(id == id2)



//function

var myFunction = function(){
    alert('Hi')
}

m=myFunction()


//object 
var myObject = {
    name: 'Dinh Tuan',
    age : 19,
    adress: 'Ha Noi',
    myFunction: function(){

    }
}   
console.log(myObject)


var myArray = [
    'javascript',
    'php',
    'ruby'
]
console.log(myArray)




// cách kiểm tra xem biến thuộc kiểu dữ liệu nào 
console.log(typeof a)