//làm việc với chuỗi 

var myString = 'Học JS '

//1. length
// console.log(myString.length)

//2. Find index
// console.log(myString.indexOf('JS'))
// console.log(myString.lastIndexOf('JS')) tìm ký tự JS(nếu có nhiều JS) cuối cùng trong chuỗi
// console.log(myString.search('JS'))

//3. Cut sring
console.log(myString.slice(-3, -1))

//4. Replace
// console.log(myString.replace(/JS/g, 'Python'))

//5. Convert to  upper/lower case
// console.log(myString.toUpperCase())
// console.log(myString.toLowerCase())


//6. Trim (loại bỏ khảng trắng)
console.log(myString.trim().length)


//7 Split (cắt chuỗi thành array)
var languages = 'Javascript, Ruby, PHP'
console.log(languages.split(', ')) //cắt chuỗi thành mảng


//8. Get a character by index
var myString2 = 'Dinh Tuan'

console.log(myString2.charAt(5))






//
var coursesStr = 'HTML & CSS, JavaScript, ReactJS';

function strToArray(str) {  
    str = str.split(',')
    return str
}

// Expected results
console.log(strToArray(coursesStr)) 
// console.log(strToArray) 
// ['HTML & CSS', 'JavaScript', 'ReactJS']