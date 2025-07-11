//Object trong JS

var myInfor = {
    name: 'Nguyen Dinh Tuan',
    age: 19,
    address: 'Ha Noi',
}


console.log(myInfor['email'])
//nếu lấy key chưa được khai báo thì sẽ trả về undefined


myInfor.email = 'daicaratu1807@gmail.com'
//thêm email



//cách thêm ký tự trái quy tắc
myInfor['my-fb'] = 'Dinh Tuan'
console.log(myInfor.name)


//cách lấy key values
console.log(myInfor)


//Tạo key mới
var myKey = 'address'
console.log(myInfor[myKey])



//thêm key bằng cách tạo biến
var emailKey = 'email'
var myInfor2 = {
    name: 'Tuan',
    age: 19,
    [emailKey]: 'dinhtuan2gmail.com',
}
console.log(myInfor2)


//cách xoá key
delete myInfor2.age


//sử dụng hàm trong object
var myInfor3 = {
    name: 'dinhtuan',
    age: 19,
    address: 'HaNoi',
    getName: function(){
        return this.name
    }
};

console.log(myInfor3.getName())













// OBJECT CONSTRUCTOR (XÂY DỰNG ĐỐI TƯỢNG)
function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName1 = function(){
        return this.firstName + ' ' + this.lastName
    }
}

var author = new User('Dinh', 'Tuan', 'https://i.imgur.com/8Q');
var ortherAuthor = new User('Hoai', 'Thu', 'https://i.imgur.com/8Q');

author.title = 'Be Kind' //thêm thuộc tính title cho author
ortherAuthor.comment = 'Never be your' //thêm comment cho ortherAuthor

console.log(author)
console.log(author.getName1())
console.log(ortherAuthor)