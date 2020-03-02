
var friendsAge = [17, 15, 20, 25, 14];
console.log(friendsAge);

var sonaliAge = friendsAge[2];

friendsAge[3] = 100;

console.log(sonaliAge);
console.log(friendsAge[3]);
console.log(friendsAge);

var position = friendsAge.indexOf(14);
console.log(position);

console.log(friendsAge.length);

friendsAge.push(23);
friendsAge.push(55);
console.log(friendsAge);

friendsAge.pop();
console.log(friendsAge);

friendsAge.unshift(34);
console.log(friendsAge);

friendsAge.shift();
console.log(friendsAge);


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon","Pineapple");

console.log(fruits);

fruits.shift("");

console.log(fruits);