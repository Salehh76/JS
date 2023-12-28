///////////////// 1 /////////////////////
// To automatically increase all meal prices by 10% in a restaurant every month:
const restaurantMenu = new Map();
restaurantMenu.set('Meatballs', 25);
restaurantMenu.set('Grilled Chicken', 20);
restaurantMenu.set('Baked Potato', 30);
restaurantMenu.set('Stuffed Zucchini', 18);

const today = new Date();
const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);

if (today.getMonth() !== yesterday.getMonth()) {
    for (const menuItem of restaurantMenu.entries()) {
        const [food, price] = menuItem;
        const updatedPrice = price * 1.1; // 10% increase
        restaurantMenu.set(food, updatedPrice);
    }
}

console.log(restaurantMenu);

//////////////// 2 ///////////////////////
// To trigger an alarm at the user's specified time:
const alarmHour = prompt("At what time do you want to set the alarm? (Please input the time in 24-hour format)");
const currentHour = new Date().getHours();
const alarmTime = parseInt(alarmHour);

if (currentHour === alarmTime) {
  console.log("Alarm Time!");
} else {
  console.log(`Alarm set for ${alarmHour}.`);
}

//////////////////////////// 3 ///////////////////////////////////
// Managing a shopping cart:
let shoppingCart = ['Pen', 'Notebook', 'Eraser', 'Paperclip', 'Book'];

shoppingCart.push('Ruler');
console.log(shoppingCart); // ['Pen', 'Notebook', 'Eraser', 'Paperclip', 'Book', 'Ruler']

let removedItem = shoppingCart.pop();
console.log(removedItem); // 'Ruler'
console.log(shoppingCart); // ['Pen', 'Notebook', 'Eraser', 'Paperclip', 'Book']

if (shoppingCart.includes('Notebook')) {
  console.log('Notebook is in your cart.');
} else {
  console.log('Notebook is not in your cart.');
}

shoppingCart.splice(0, shoppingCart.length);
console.log(shoppingCart); // []

if (shoppingCart.length > 0) {
  console.log('Your shopping cart is full.');
} else {
  console.log('Your shopping cart is empty.');
}

/////////////////////////////////////////////////// 4 /////////////////////////////////////////////
// Creating a constructor function for representing products on an e-commerce site:
function Product(name, category, price) {
    this.name = name;
    this.category = category;
    this.price = price;
    
    // Method to decrease product prices based on the given discount rate.
    this.discountedPrice = function(discount) {
        return this.price - (this.price * (discount / 100));
    };
}

let phone = new Product('iPhone 13', 'Electronics', 1200);
let shirt = new Product('Slim Fit Shirt', 'Fashion', 35);
let book = new Product('JavaScript Basics', 'Books', 20);

console.log(phone.discountedPrice(10)); // 10% discount for the phone
console.log(shirt.discountedPrice(20)); // 20% discount for the shirt
console.log(book.discountedPrice(15)); // 15% discount for the book

////////////////////////////////// 5 /////////////////////////
// Calculating the total price of products in a user's cart and determining shipping discounts:
const userCart = [
    { name: 'Phone', price: 1500 },
    { name: 'Headphones', price: 100 },
    { name: 'Pen Set', price: 20 },
];

function calculateTotalPrice(cart) {
    let total = 0;
    for (const item of cart) {
        total += item.price;
    }
    return total;
}

function applyShippingDiscount(totalAmount) {
    const freeShippingThreshold = 1000;
    if (totalAmount >= freeShippingThreshold) {
        return 'Total amount is ' + totalAmount + ' TL. No shipping fee will be charged!';
    } else {
        return 'Total amount is ' + totalAmount + ' TL. Shipping fee will be added.';
    }
}

const totalAmount = calculateTotalPrice(userCart);
const shippingMessage = applyShippingDiscount(totalAmount);

console.log('Cart Total: ' + totalAmount + ' TL');
console.log(shippingMessage);

////////////////////////////////// 6 ////////////////////////////////////
// Creating parent and child classes for animals:
class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    speak() {
      console.log(`${this.name} is making a sound.`);
    }
  
    calculateAge() {
      console.log(`${this.name} is ${this.age} years old.`);
    }
  }
  
class Dog extends Animal {
    constructor(name, age, breed) {
      super(name, age);
      this.breed = breed;
    }
  
    move() {
      console.log(`${this.name} is running.`);
    }
}
  
class Cat extends Animal {
    constructor(name, age, breed) {
      super(name, age);
      this.breed = breed;
    }
  
    meow() {
      console.log(`${this.name} is meowing.`);
    }
}

let blackie = new Dog('Blackie', 5, 'Labrador');
blackie.speak();
blackie.calculateAge();
blackie.move();

let whiskers = new Cat('Whiskers', 3, 'Siamese');
whiskers.speak();
whiskers.calculateAge();
whiskers.meow();