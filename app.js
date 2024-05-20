
// let userInput= prompt('Enter mobile name').toLowerCase();
let mobile = {
    iphone: {
        model: '15 pro max',
        camera: ' 108 mp',
        ram: '20GB',
        battey: '6000 MaH',
        price: '7 lakh'
    },
    infinix: {
        model: 'Infinix Hot 11 play',
        camera: '64 mp',
        ram: '4 GB',
        battey: '7000 MaH',
        price: '20,000'
    },
    getModelName: function () {
        return this.iphone.model;
    }, getBrandName: function () {
        return this.iphone.company;
    },
};
// Js have constructor property to control the object properties name which are repeating

function Mobile(model,price,camera,ram,battey) {
    this.model = model;
    this.price = price;
    this.camera = camera;
    this.ram = ram;
    this.battey = battey;
    
};
//In constructor function name should be in variable with the keyword of new otherwise if we call this constructor function in this way so it will give undefined .
// console.log(Mobile());
var mobile1 = new Mobile('Q mobile',4000, '8mp','2GB','3500MaH');
console.log(mobile1);
var mobile2 = new Mobile('Samsung','40,000 PKR', '108mp','16GB','5000MaH');
console.log(mobile2);
var mobile3 = new Mobile('Iphone 8+','56000PKR', '4mp','4GB','4500MaH');
console.log(mobile3);
for (const key in mobile1) {
    console.log(mobile1[key]);
    for(const key1 in mobile2){
        console.log(mobile2[key1]);
    }
}
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
let btn = document.getElementById('bt');
let hell = "";
hell = () => {
    document.getElementById("demo").innerHTML += this;
}
//The window object calls the function:
btn.addEventListener('click', hell);

//Arrow function
let multiply = (a, b) => a * b;

let add = (a, b) => a + b;
console.log(`Arrow function ${add(2, 4)} +`);


// This is the long way to do 
let hello = "";
hello = () => {
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