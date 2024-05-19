
// let userInput= prompt('Enter mobile name').toLowerCase();
// let mobile ={
//     iphone :{
//         model: '15 pro max',
//         camera: ' 108 mp',
//         ram:'20GB',
//         battey: '6000 MaH',
//         price : '7 lakh'
//     },
//     infinix :{
//         model: 'Infinix Hot 11 play',
//         camera: '64 mp',
//         ram:'4 GB',
//         battey: '7000 MaH',
//         price : '20,000'
//     },
//     getModelName:function(){
//         return this.iphone.model;
//     },getBrandName:function(){
//         return this.iphone.company;
//     },


// };
// mobile.iphone.company = 'Iphone';
// console.log(`Brand is ${mobile.getBrandName()} and  model is ${mobile.getModelName()}`);








// let obj = {
//     firstName: 'Ammar',
//     lastName: 'Ahmed',
//     ID: 227780,
//     enroll: 'WMA',
//     email: 'ammar69aa59@gmail.com',
//     topic: ['html ', 'css ', 'js'],
//     bookDetails: {
//         Aurthor: 'Alice Heprew',
//         bookName: 'Smater Way To Learn JS'
//     },
//     getBookName: function () {
//         return (`We are using the book to study is ${obj.bookDetails.bookName} and the Aurthor of this book is ${obj.bookDetails.Aurthor}`);
//     },
//     getTopic: function () {
//         return (`Our course outline is ${obj.topic}`)
//     },
//     getFullName: function () {
//         return (`Your client full name is : ${obj.firstName} ${obj.lastName}`)
//     }
// };
// console.log(obj.getFullName());
// console.log(obj.getTopic());
// console.log(obj.getBookName());
// obj.class = 'web' //adds in obj (object)
// console.log(obj.bookDetails);
// delete obj.enroll // delete 
// console.log('firstName' in obj); //Check if the value is in the object or not .
//  for (let key in obj) {
//     console.log(key + " =====> " + obj[key]);
//  }
// obj[keys] it returs us the value stored in the object
// key  it gives us the variable in the object;
//Arrow function
let multiply = (a, b) => a * b;
console.log(`Arrow func ${multiply(2, 4)} *`);

let add = (a, b) => a + b;
console.log(`Arrow function ${add(2, 4)} +`);


// This is the long way to do 
let hello = "";
hello = () =>{
    return "How are you ?"
}
console.log(hello());

//Alternative method to code in few lines if(single statements)
let greet = '';
greet = () => "Good Morning";
console.log(greet());

// this code can also be minimize
var foo = "";
foo = (val) => "Hello " + val;
console.log(foo('Universe'));

// Parenthses are also not important in arrow function
var foo = '';
foo = value => `Ammar ${value}`
console.log(foo('Ahmed'));