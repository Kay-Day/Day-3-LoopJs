/**
 * Lam viec voi mang
 * 1. To string
 * 2. Join
 * 3. Pop //xoa element cuoi mang
 * 4. Push// them element vao cuoi mang
 * 5. Shift //xoa element dau mang
 * 6. Unshift //them element vao dau mang
 * 7. Splice
 * 8. Concat
 * 9. Slicing
 */

var languages = [
    'Java',
    'PHP',
    'Ruby',
];
var languages2 = [
    'Dart',
    'JS',
    'TypeScript',
];
// console.log(languages.toString());
// console.log(languages.join(' - '));
// console.log(languages.pop()); //xoa element 
// Cuối mảng và trả về phần tử đã xóa
// console.log(languages);
// console.log(languages.push('Dart', 'JS')); //them element vao cuoi mang
// console.log(languages);
// console.log(languages.shift()); //xoa element dau mang
// console.log(languages);
// console.log(languages.unshift('Dart', 'JS')); //them element vao dau mang
// console.log(languages);
// console.log(languages.splice(0,1));
// languages.splice(1,1,'c++');
// console.log(languages.concat(languages2));
// console.log(languages.slice(0,2));
// console.log(languages);

/**
 * Hàm (function) trong javascript
 * 1.Hàm?
 * - Một khối mã
 * - Làm 1 việc cụ thể
 * 
 * 2. Loại hàm
 * - Built-in
 * - Tự định nghĩa
 * 
 * 3. Tính chất
 * - Không thực thi khi định nghĩa
 * - Sẽ thực thi khi được gọi
 * - Có thể nhận tham số
 * - Có thể trả về 1 giá trị
 * 
 * 4. Tao hàm
 */

function Daylaham() {
    console.log('Day la ham');
    alert('Day la ham');
}
// Daylaham();

/**
 * Tham số hàm ja cơ bản 
 * 1. Tham số
 * - Định nghĩa: là các biến được khai báo khi tạo hàm
 * - Kiểu dữ liệu
 * - TÍnh Private
 * - 1 tham số
 * - Nhiều tham số
 * 
 * 2. Truyền tham số
 * - 1 tham số
 * - Nhiều tham số
 * 
 * 3. Arguments
 * - Đối tượng arguments
 * - Giới thiệu vòng lặp for of
 */

function tapcodedao(bite,bidau,bikhoc){
    // if(bite){
    //     console.log(bite);
    // }else{
    //     console.log('Khong co bite');
    // }
    // // console.log(bite);
    // // console.log(bidau);
    // // console.log(bikhoc);
    // console.log(Array.isArray(bite));
}
tapcodedao('day ne','day ne','day ne');


// function logG()
// {
//     console.log(arguments)
// }
// logG();

function logG()
{
    var myString = '';
   for(var thay of arguments){
    myString += `${thay} +`;
   }
   console.log(myString);
}
logG('a','b','c','d ');

/**
 * Return trong hàm
 * 
 */

// var isConfirm = confirm('Message');
// console.log(isConfirm);

function sum(a, b) {
    return a + b;
}
var result = sum(1, 2);
console.log(result); 

/**
 * Một số diều cần biết về Function
 * 
 * 1. Khi Function đặt trùng tên 
 * 2. Khai báo biến trong hàm
 * 3. Định nghĩa ham trong ham
 */

function showCode(mygod){
   var fullname = 'Thay Nghia';
   console.log(fullname);
   console.log(mygod);
}
showCode('Mainnn');

// Định nghĩa hàm trong hàm
function Magic(){
    function aothatday(){
        console.log('Mess')

    }
    aothatday();
}
Magic();

/**
 * Các loại function
 * 1. Declaration function
 * 2. Expression function
 * 3. Arrow function
 */

//1. Declaration function
function test(){

}
//2. Expression function
var Tester = function(){

}

setTimeout(function autolog(){
 console.log('Day la ham an danh');
},5000);


var myObject  = {
    myFunction: function(){
        
    }

}

//Polyfill
if(!String.prototype.includes){ 
    String.prototype.includes = function(search,start){
        'use strict';
        if(search instanceof RegExp){
            throw TypeError('first argument must not be a RegExp')
        }
        if(start === undefined){
            start = 0;}
            return this.indexOf(search,start) !== -1;
        };
}
// const str = 'Hello, world!';
// const searchStr = 'world';

// const index = str.indexOf(searchStr);
// if (index !== -1) {
//   console.log(`Found "${searchStr}" at index ${index}`);
// } else {
//   console.log(`"${searchStr}" not found`);
// }

//Object trong javascript
var myKey = 'id';
var myInfo = {
    name:'kay day',
    age: 20,
    address: 'Tokyo',
    [myKey]:'21IT567',
    getName: function(){
        return this.name;
    }

};
// delete myInfo.age;
// var myKey = 'id';
// myInfo.email = 'kay@gmail.com'

// Function --> Phuong thuc/ method
// Others --> Thuoc tinh/ property
console.log(myInfo.getName());

// Object constructor
function User(firstName,lastName,avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}
var author = new User('Thay','Nghia','Avatar');
var user = new User('Teacher','NgNghia','Nihongo');

author.title = 'Chia se cho thay di'
user.comment ='Bai hoc hay qua thay oi'

console.log(author.constructor === User);
console.log(author.getName());
console.log(author);
console.log(user);

// Object prototype
//    1. Prototype là gì ?
//    2. Sử dụng khi nào ?

function Users(firstName,lastName,avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}
Users.prototype.className = 'Like share cho thay di';
Users.prototype.getClassName = function(){
    return this.className
}

var user1 = new Users('Coder','Nghia','Avatar');
var user2 = new Users('kawaii','NgNghia','Benkyo');

console.log(user1.className);
console.log(user2.getClassName());
console.log(user2);

// Đối tượng Date

var date = new Date();

var year = date.getFullYear();
var month = date.getMonth()+1;
var day = date.getDate();

console.log(date.toString()); 
console.log(date.getFullYear()); 
console.log(date.getMonth()+1);

console.log(day);
console.log(`${day}/${month}/${year}`);

// Câu lệnh rẽ nhánh
var date = 2;
if(date === 2) {
    console.log('Hom nay la thu 2');
} else if(date === 3) {
    console.log('Hom nay la thu 3');
} else if(date === 4) {
    console.log('Hom nay la thu 4');
} else{
    console.log('Hông biết');
}
// Câu lệnh rẽ nhánh Switch
 var date1 = 0;
 switch (date1){
    case 1:
        console.log('Hom nay la thu 2');
        break;
    case 2:
        console.log('Hom nay la thu 2');
         break;
    case 3:
        console.log('Hom nay la thu 3');
        break;
    case 4:
        console.log('Hom nay la thu 4');
        break;
    default:
        console.log('Hông biết');
        
 }

 // Toán tử 3 ngôi - Ternary Operator
  var course = {
    name : 'Java',
    Coin : 0,
  }

//   if (course.Coin > 0){
//       console.log(`${course.Coin} Coins`);
//   }else{
//     console.log('Free');
//   }

var result = course.Coin > 0 ? `${course.Coin} Coins` : 'Free';
console.log(result);

// var a = 1;
// var b = 2;

// var c = a > 0 ? a : b;
// console.log(c);  

/**
 * Vòng lặp - Loop
 * 
 * 1. for - Lặp với điều kiện đúng
 * 2. for/in - Lặp qua key của đối tượng
 * 3. for/of - Lặp qua value của đối tượng
 * 4. while - Lặp khi điều kiện đúng
 * 5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
 * 
 */

//For loop
for(var i = 0; i <= 1000; i++){
    console.log(i);
}
//For loop 2
var k = 1;
for (;k<100;){
    k++;
    console.log(k);
}
//For loop 3 ////////////////////////////////////////////////////////
var myNoPro = [
    'Javascript',
    'PHP',
    'Ruby',
    'Java'

];
var arrayLength = myNoPro.length;
for (var f = 0 ; f < arrayLength; f++){
    console.log(myNoPro[f]);
}
console.log(myNoPro);
/////////////////////////////////////////////////////////////////////
//For/in loop
var myIn4 ={
    name : 'Nghia sensei',
    age : 20, 
    address : 'Osaka'

};

for(var key in myIn4){
    //code
    console.log(myIn4[key]);
}

////////////////////////////////
var NN = [
    'http',
    'https',
    'ftp',
    'file',
];
for(var kay in NN){
   console.log(NN[kay]);
}

var strings = 'Javascript';
for(var ka in strings){
    console.log(ka);
    console.log(strings[ka]);
}
// var badau = 'Java, JS , NodeJs , ReactJs, Sql';
// console.log(badau.split(', '));

// For/of loop
// chuoi thi tach chu
// Object k phai doi tuong loc
var tiengNhat = [
    'Kanji',
    'Hiragana',
    'Katakana',
    
];
// k in thu tu so
for(var value of tiengNhat ){
    console.log(value); 
}

//lay key object
var JQK = {
    name: 'My Lanh',
    age: 20,
};
for (var daisuki of Object.values(JQK)){
    console.log(daisuki);
}
console.log(Object.keys(JQK));

//While loop
var i = 0;
while(i < 10){
    console.log(i);
    i++;
}

var mangtui = [
    'Man',
    'she',
];
var L = 0;
var dodai = mangtui.length;
while(L < dodai){
    console.log(mangtui[L]);
    L++;
}

// Do/while loop
var t = 0;
var napcard2chuc = false;
do {
    t++;
    console.log('Nap the lan ' + t);
    //done
    if(true){
        napcard2chuc  = true;
    }

}while(!napcard2chuc && t <=3 ); 

// Break & Continue in Loop
for (var p = 0; p < 10 ; p++){

    // if(p % 2 == 0){
    //     continue;
    // }

    console.log(p);

    if (p >= 5){
        break;
    }
}

// Vong lap long nhau - Nested loop
var Arrays = [
    [1,2],
    [1,3],
    [1,4],
    
];
for (var u = 0 ; u < Arrays.length; u++){
    for (var w = 0 ; w < Arrays[u].length; w++){
        console.log(Arrays[u][w]);
    }
    console.log(Arrays[u]);
}

//Loop ...
// for (var y = 0 ; y >100 ; y--){
//     console.log(y);
// }
for (var y = 0 ; y <=100 ; y +=5){
    console.log(y);
}