var student = {id: 123, phone: 123, name:"Abir Ahmed"};
var student1 = {id: 125, phone: 3454, name:"Mahia Mahi"};

var phoneNo = student1.phone;
var phoneNo1 = student["phone"];

console.log(phoneNo);
console.log(phoneNo1);

student1.phone = 3452353;

console.log(student1);