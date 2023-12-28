// Create a string with back-tick character

let fName = 'John';
let lName = 'Washington';

let fullName = `Your full name is : ${fName} ${lName}  Your age is 40`;
console.log(fullName);


// Ex; 
let quantity = 100;
let price = 1.5;

let total = `Total Price is : ${quantity * price}`;
console.log(total);// Total Price is : 150


//  2. Number
const pi = 3.14;
let r = 5;
console.log(typeof pi); //number
console.log(typeof r);  //number


// Numeric String : If there are only numbers in the string, JS can use them as numbers where necessary
let x = '100';
let y = '10'
let w = 5;
let z = x / y; 
console.log(z); // 10
console.log(typeof z) //number
console.log(y / w) // 2


// If the "+" sign is next to string, it performs concatenation
console.log(y + w); // 105
console.log(w + y); // 510
console.log(typeof (y + w));//string

// Number Methods and Properties

// 1) toString() : Converts a number to a string.
let u =111;
let uv = u.toString();
console.log(uv);//111
console.log(typeof uv);//string


// 2) toExponential(): Writes the number in Exponential Notation. Converts the result to a string.
//    Places the decimal point after the first digit from the left and rounds to the numerical value of the parameter digits after the decimal point.

let X = 5;
console.log(X.toExponential(2)); // 5.00e+0

let X2 = 555;
console.log(X2.toExponential(2)); // 5.55e+2 ==> 5.55 * 10^2 

let X3 = 5555;
console.log(X3.toExponential(2)); // 5.56e+3

let X4 = 54321;
console.log(X4.toExponential(3)); // 5.432e+4

// 3)toFixed(); Rounds the decimal part to the number of digits specified, Returns a string

let a = 19.6543;
console.log(a.toFixed()) // 20
console.log(a.toFixed(1)) //19.7
console.log(a.toFixed(2)) // 19.65


// 4) toPrecision(); Rounds the number to the specified length. Returns a string
let b = 19.6543;
console.log(b.toPrecision()); // 19.6543
console.log(b.toPrecision(1)); // 2e+1 ==> 2 * 10^1  
console.log(b.toPrecision(2)); // 20
console.log(b.toPrecision(3)); // 19.7
console.log(b.toPrecision(4)); // 19.65
console.log(typeof b.toPrecision()); // string



// 5) Number(variable) : Converts JS variables to numbers

console.log(Number(true))  //1
console.log(Number(false))  //0
console.log(Number('     123  '))  //123
console.log(Number('     123  123 ')) //NaN
console.log(Number('     George '))//NaN



// Note : Number() also converts dates to numbers. Starts from January 1 1970 in JS, the timestamp
// Gives the time difference in milliseconds between the given date and January 1, 1970
let date1 = new Date('1970-01-02');
console.log(Number(date1)) // 86400000


// 6) parseInt(); Takes a string and returns the integer part if it encounters a number first (excluding spaces)

console.log(parseInt('   77.77 ')) //77
console.log(parseInt('   77 sasdasd '))//77
console.log(parseInt('   -77 sasdasd ')) //-77
console.log(parseInt(' sasdasd  -77  ')) // NaN
console.log(typeof parseInt()); // number
console.log(parseInt(true))//NaN


// 7) parseFloat(): Takes a string and returns the number if it encounters a number first (excluding spaces).
console.log(parseFloat('77.77 999')); // 77.77
console.log(parseFloat('77.77 text')); // 77.77
console.log(parseFloat('-77.77')); // -77.77
console.log(parseFloat('text 77.77')); // NaN
console.log(typeof parseFloat()); // number
console.log(parseFloat(true)); // NaN


// 3. Boolean : Only accepts "true" and "false" values.
//The Boolean() Function: Determines if an expression is true or false

console.log(Boolean(7<9))//true
console.log(Boolean(7<9 && 9<7))//false
console.log(Boolean(7<9 || 9<7))//true

//Falsy/Truthy Values:
// Javascript has specific values that evaluate to true(Truthy Values) and other that evaluate to false(Falsy Values)

//Falsy Values : false,  ''   , 0   , -0    , NaN    , null    , undefined


console.log(Boolean(false)); // false
console.log(Boolean('')); // false
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false


// Truthy Values:   true    ,  'text'   , 777 , -777   ,   -7   ,    7 , Infinity , -Infinity  ,  {}    ,   []

console.log(Boolean(true)); // true
console.log(Boolean('any text you wrote')); // true
console.log(Boolean(777)); // true
console.log(Boolean(-777)); // true
console.log(Boolean(-7.7)); // true
console.log(Boolean(Infinity)); // true
console.log(Boolean(-Infinity)); // true
console.log(Boolean({})); // true
console.log(Boolean([])); // true


// 4) Undefined : A variable without a value has an undefined type. Its data type is also undefined

let str;
console.log(str);//undefined
console.log(typeof str);//undefined

// Note: Empty strings are not considered undefined

let str2 ='';
console.log(str2);
console.log(typeof str2);//string