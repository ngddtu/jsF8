/*
1. Tham số?
    - Tham số là một giá trị được truyền vào một hàm khi nó được gọi.
    - 1 tham số?
    - Nhiều tham số?
    - Tính private
    - Kiểu dữ liệu  

2. Truyền tham số
    - 1 tham số
    - Nhiều tham số

3. Arguments?
    - Đối tượng arguments
    - Giới thiệu vòng for
    */

function writeLog(message){
    console.log(message);
}
writeLog('Test message');





function  writeLog2(message, level){
    console.log(message);
    console.log(level);
}

writeLog2('Test', 'Test2')





function writeLog3(){
    console.log(arguments)
}

writeLog3('Log1', 'Log2', 'Log3')




function writeLog4(){
    var myStirng ='';
    for (var param of arguments){
            myStirng += `${param} - `     //mean: để in ra 3 cái log trên cùng 1 dòng cách đều nhau bởi dấu -
    }
    console.log(myStirng)
}

writeLog4('Log1', 'Log2', 'Log3')




// RETURN 
function cong(a, b){
    return a + b;
    alert('Nguyen Dinh Tuan')//những hàm ở dưới  return sẽ không được thực hiện

}

var result = cong(2, 8);
console.log(result); // undefined

/*
Một số điều cần biết về function 

1. Khi fuction đặt trùng tên?
- function định nghĩa sau sẽ ghi đè lên  function trước


2. Khi báo biến trong hàm 
3. Định nghĩa hàm trong hàm 
*/

//3.
function show() {
    function show2() {
        console.log('Hello, world!');
    }
}

show();


//TYPES  OF FUNCTION
/*
1.  Declaration Function 
2.  Expression Function 
3.  Arrow Function

*/


//1 Declaration Function 
function dinhTuan(){

}

//2 Expression Function 
var  dinhTuan = function kenzie() {

}

setTimeout(function kenzie(){

})


var dinhTuan = {
    myFunction: function kenzie() {
// không đặt tên cho fuction cũng ko sao
    }
}
