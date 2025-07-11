/*
Mảng trong JS - Array

1. Tạo mảng 
    - Cách tạo
    - Sử dụng cách nào? Tại sao?
    - Kiểm tra datatype
    
2. Truy xuất mảng
    - Độ dài mảng
    - Lấy phần tử theo index
*/


//c1
var languages = [
    "JavaScript",
    "PHP",
    "Ruby",
]
//c2
var languages1 = new Array(
    "JavaScript",
    "PHP",
    "Ruby",
)
console.log(languages)
console.log(languages1)


//ktra type
console.log(Array.isArray(languages))

//2

//2.1
console.log(languages.length)

//2.2
console.log(languages[0]) //lấy phần tử đầu tiên




//LÀM VIỆC VỚI ARRAY
/*
1. To string
2. Join
3. Pop
4. Push
5. Shift
6. Unshift
7. Splice
8. Concat
9. Slicing
*/

//1. To string(biến array -> string)
console.log('Câu 1.')
var languages1 = new Array(
    "JavaScript",
    "PHP",
    "Ruby",
)

console.log(languages1.toString())



//2. Join(thêm dấu - )
console.log('Câu 2.')
var languages = [
    "JavaScript",
    "PHP",
    "Ruby",
]
console.log(languages1.join(' - '))


//3. Pop(xoá elements ở cuối mảng)
console.log('Câu 3.')
console.log(languages1.pop())
console.log(languages1)
// ['JavaScript', 'PHP']



//4. Push(thêm elements vào cuối mảng)
console.log('Câu 4.')
console.log(languages1.push('Dart'))


//5. Shift(xoá element đầu mảng và trả về elm đã xoá)
console.log('Câu 5.')
console.log(languages1.shift())
console.log(languages1)


//6. Unshift(thêm elements đầu mảng và trả về độ dài mới)
console.log('Câu 6.')
console.log(languages1.unshift('Javascript'))
console.log(languages1)




//7. Splice(thêm các mục mớI vào mảng)
console.log('Câu 7.')
var fruits = ['apple', 'banana', 'cherry']
console.log(fruits)
fruits.splice(1, 0, 'orange')
console.log(fruits)//['apple', 'orange', 'banana', 'cherry']
/*
- Tham số đầu tiên (1) xác định vị trí mà các
phần tử mới sẽ được thêm vào (nối vào).
- Tham số thứ hai (0) xác định 
số lượng phần tử cần loại bỏ .
*/

//Cũng có thể dùng splice để xoá các phần tử
fruits.splice(1, 1)
console.log(fruits)//['apple', 'banana', 'cherry']



//8. Concat(dùng để nối mảng) 
console.log('Câu 8.')
console.log(languages.concat(languages1))


//9. Slice(cắt ra một phần của mảng)
console.log('Câu 9.')
var fruits2 = fruits.slice(1)
console.log(fruits2)//['banana', 'cherry']


//indexx
console.log(fruits.indexOf('banana')) //trả về vị trí của phần tử 
console.log(fruits.lastIndexOf('apple')) //trả về vị trí cuối cùng của phần tử
//có tên giống nhau
