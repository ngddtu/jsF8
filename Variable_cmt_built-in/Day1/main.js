var fullName = 'Nguyễn Đình Tuấn';
// var age = '19';
alert(fullName);    
// alert(age);



console.log(fullName) //run rồi f12 để xem
// console.error(fullName) 
 
// confirm('Xac nhan ban du tuoi')
// prompt('Xac nhan ban du tuoi')


// setTimeout(function () {
//     alert('Thong bao')
// }, 5000)                   // cho mot doan code duoc chay sau mot khoang thoi gian; dvi mns



setInterval(function () {
    console.log('Day la thong bao' + Math.random())    //Math.random() : tao ra mot day so random
}, 1000)