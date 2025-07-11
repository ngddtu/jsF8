var a = NaN
/* 
0
false
'' ""
undefined                    trừ những t/h này ra thì những cái khác khi cho vào if đều trả về true
NaN
null
*/


if (a) {
    console.log('Dieu kien dung')
} else{
    console.log('Dieu kien sai')
}



var result = 'A' && a;
console.log(result)