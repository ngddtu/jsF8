/*
    CHUỖI TRONG JAVASCRIPT

    1. Tạo chuỗi
        - Các cách tạo chuỗi
        - Nên dùng cách nào? Lý do?
        - Kiểm tra data type

    2. Một số case sử dụng backslash (\)
    3. Xem độ dài chuỗi
    4. Chú ý độ dài khi viết code
    5. Template string ES6
*/


// var fullName = new String('Đình Tuấn')  không nên dùng
var fullName = 'Đình Tuấn là \'siêu nhân\''   // nên dùng
// ở trên là cách thêm dấu nháy


// cách viết dấu \ 
var name = 'Day la dau \\'
console.log(name)
console.log(typeof fullName)
alert(fullName)


//Xem độ dài chuỗi
console.log(name.length)


//5. Template string ES6

var firstName =  'Tuấn'
var lastName  =  'Đình'

console.log(`Tôi là: ${lastName} ${firstName}`)
