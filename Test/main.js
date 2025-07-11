// function getContentLength(content) {
//     return content.length
// };


// // Mở tab Console để xem kết quả trực quan
// console.log(getContentLength('JavaScript'));
// console.log(getContentLength('Hello World'));


// function joinWithCharacter(array, charactor) {
//     return array.join(charactor)
// }

// // Ví dụ khi sử dụng
// var cars = ['Honda', 'Mazda', 'Mercedes'];
// var fruits = ['apple', 'banana', 'cherry'];
// var result = joinWithCharacter(fruits, ' - ');

// console.log(result); // Expected: "Honda - Mazda - Mercedes"




// Viết hàm tại đây
function getLastElement(array){
    let LastElement
    //cách 1 
    for(var i = 0; i < array.length; i++){
        LastElement = array[array.length - 1]
    }
    return LastElement
    //cách 2
    // return array[array.length - 1]
}



// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
console.log(animals.length)
var result = getLastElement(animals);

console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']


document.write(animals)