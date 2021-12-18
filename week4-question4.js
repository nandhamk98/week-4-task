//1.Task 1: Simple Programs todo for variables
//a)Declare four variables without assigning values and print them in console

let name;
let country;
let maritalStatus;
let age;

console.log(name);
console.log(country);
console.log(maritalStatus);
console.log(age);

//b)How to get value of the variable myvar as output
var myvar = 1;
console.log(`myvar : ${myvar}`);

//c)Declare variables to store your first name, last name, marital status, country and age in multiple lines

let firstName = "Nandhakumar";
let lastName = "M K";
let country = "India";
let maritalStatus = "Single";

//d) Declare variables to store your first name, last name, marital status, country and age in a single line

let firstName = "Nandhakumar",
  lastName = "M K",
  country = "India",
  maritalStatus = "Single";

//e)Declare variables and assign string, boolean, undefined and null data types

let str = "hello";
let bool = true;
let undef = undefined;
let nulldata = null;

//f)Convert the string to integer
let str = 25;

console.log(typeof parseInt(str));
console.log(typeof Number(str));
console.log(typeof +str);

//g)Write 6 statement which provide truthy & falsey values

//2.Task 2: Simple Programs todo for Operators

//a)Square of a number

const getSquare = (num) => Math.pow(num, 2);
console.log(getSquare(9));

//b)Swapping 2 numbers

let val1 = 1;
let val2 = 2;
[val1, val2] = [val2, val1];
console.log(val1, val2);

//c)Addition of 3 numbers

const additionOfThreeNum = (num1, num2, num3) => num3 + num2 + num1;
console.log(additionOfThreeNum(1, 2, 3));

//d)Celsius to Fahrenheit conversion

const celsiusToFahren = (val) => val * (9 / 5) + 32;
console.log(celsiusToFahren(35));

//e)Meter to miles

const meterToMiles = (meter) => meter / 1609.34;
console.log(meterToMiles(2));

//f)Pounds to kg

const poundsTokg = (pounds) => pounds / 2.205;
console.log(poundsTokg(100));

//g)Calculate Batting Average
const battingAverage = (runScored, timesout) => runScored / timesout;
console.log(battingAverage(500, 40));

//h)Calculate five test scores and print their average
const testAverageScore = (test1, test2, test3, test4, test5) =>
  (test1, test2, test3, test4, test5) / 5;
console.log(testAverageScore(100, 200, 10, 9, 91));

//i)Power of any number x ^ y

const getPower = (x, y) => Math.pow(x, y);
console.log(getPower(2, 3));

//j)Calculate Simple Interest

const simpleInterest = (principle, rate, year) =>
  (principle * rate * year) / 100;
console.log(simpleInterest(1000, 10, 2));

//k)Calculate area of an equilateral triangle
const areaOfequi = (side) => (Math.sqrt(3) / 4) * Math.pow(side, 2);
console.log(areaOfequi(4));

//l)Area Of Isosceles Triangle

const areaofIso = (base, height) => (base * height) / 2;
console.log(areaofIso(4, 2));

//m)Volume Of Sphere

const volOfSphere = (radius) => (4 * Math.PI * Math.pow(radius, 3)) / 3;
console.log(volOfSphere(4));

//n)volume of prism

const volOfPrism = (baseArea, height) => baseArea * height;
console.log(volOfPrism(64, 24));

//o)Find area of a triangle

const areaOfTriangle = (base, height) => (base * height) / 2;
console.log(areaOfTriangle(4, 6));

//p)Give the Actual cost and Sold cost, Calculate Discount Of Product
const discount = (soldPrice, actualPrice) =>
  ((actualPrice - soldPrice) / actualPrice) * 100;
console.log(`${discount(400, 500)}%`);

//q)Given their radius of a circle and find its diameter, circumference and area

const getDiameter = (radius) => 2 * radius;
const getCircumference = (radius) => 2 * Math.PI * radius;
const getAreaOfCircle = (radius) => Math.PI * Math.pow(radius, 2);

console.log(getDiameter(2), getCircumference(2), getAreaOfCircle(2));

//r)Given two numbers and perform all arithmetic operations

const arthematicOperations = function (num1, num2) {
  console.log(num1 + num2);
  console.log(num1 - num2);
  console.log(num1 * num2);
  console.log(num1 / num2);
  console.log(num1 % num2);
  console.log(num1++);
  console.log(num1--);
  console.log(num1 ** 2);
};

arthematicOperations(4, 2);

//o)Display the asterisk pattern as shown below(No loop needed)

const printPattern1 = () => {
  console.log("*****");
  console.log("*****");
  console.log("*****");
  console.log("*****");
  console.log("*****");
};

printPattern1();

//s)Calculate electricity bill?
const calculateBill = (watts, price) => watts * 24 * 30 * price;

console.log(calculateBill(100, 10));

//t)Program To Calculate CGPA

const cgpaCalculator = (...subjectsMarks) => {
  let total = 0;
  for (let mark of subjectsMarks) {
    total += mark;
  }
  return total / subjectsMarks.length;
};

console.log(cgpaCalculator(90, 80, 99, 100, 92));

//3)Task 3: Simple Programs todo for Condition , Looping and Arrays
//a)Write a loop that makes seven calls to console.log to output the following triangle

const printPattern2 = () => {
  for (let i = 1; i <= 7; i++) {
    let temp = "";
    for (let j = 0; j < i; j++) {
      temp += "*";
    }
    console.log(temp);
  }
};

printPattern2();

//b)Iterate through the string array and print it contents

var strArray = [
  "<option>Jazz</option>",
  "<option>Blues</option>",
  "<option>New Age</option>",
  "<option>Classical</option>",
  "<option>Opera</option>",
];

for (let strVal of strArray) {
  console.log(strVal);
}

//c)write a code to count the elements in the array . Don’t use length property

const getLength = (arr) => {
  let len = 0;
  while (arr[len] !== undefined) {
    len += 1;
  }
  return len;
};
var myarray = [11, 22, 33, 44, 55];
console.log(getLength(myarray));

let food = [
  "Briyani",
  "Chilli chicken",
  "Grill chicken",
  "poori",
  "burger",
  "pizza",
  "shawarma",
  "dosa",
  "chicken gravy",
  "chilli fish",
  "crab",
];

console.log(`fifth favourite food ${food[4]}`);
console.log(getLength(food));

//d)Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”
let friends = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAK chandran",
];
function dataHandling(input) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] === "Mari") {
      input[i] = "Munnabai";
    }
  }
}
dataHandling(friends);

//e)Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.
let friends = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAK chandran",
];
function dataHandling(input) {
  for (var i = 0; i < input.length; i++) {
    console.log(input[i]);
    if (input[i] === "CaptianAmerica") break;
  }
}
dataHandling(friends);

//f)Find the person is ur friend or not.
let friends = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAK chandran",
];
function dataHandling(input, name) {
  let found = "no";
  for (var i = 0; i < input.length; i++) {
    if (input[i] === "name") {
      found = "yes";
      break;
    }
  }
  return found;
}
let found = dataHandling(friends, "Jeff");
console.log(found);

//g)We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.
var friends1 = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAK chandran",
];
var friends2 = ["Gabbar", "Rajinikanth", "Mass", "Spiderman", "Jeff", "ET"];
let friends = friends2.concat(friends1);
function dataHandling(input) {
  //Your code goes here
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] > input[j]) {
        let temp = input[i];
        input[i] = input[j];
        input[j] = temp;
      }
    }
  }
  console.log(input);
  return input;
}
dataHandling(friends);

//4)Task:4

let friends = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAK chandran",
];
//a)Get the first item, the middle item and the last item of the array

const getFirstMiddleLastItem = (arr) => {
  let ans = [];
  ans.push(arr[0]);
  ans.push(arr[Math.floor(arr.length / 2)]);
  ans.push(arr[length - 1]);
  return ans;
};

console.log(getFirstMiddleLastItem(friends));
//b)Add your name to the end of the friends array, and add another name to beginning
const addNames = (myname, anotherName, arr) => {
  let ans = [...arr];
  ans.push(myname);
  ans.unshift(anotherName);
  return ans;
};

console.log(addNames("nandha", "kumar", friends));

//c)Add Mr or Ms to the names in the friends array

const addMrAndMrs = (arr) => {
  let ans = [...arr];
  for (let i = 0; i < arr.length; i++) {
    ans[i] = "Mr." + ans[i];
  }
  return ans;
};

console.log(addMrAndMrs(friends));

//d)Concat all the names the friends array and return as comma “,” seperated string

const concatArrEle = (arr) => {
  let str = "";
  for (let i = 0; i < arr.length - 1; i++) {
    str += arr[i] + ",";
  }
  str += arr[arr.length - 1];
  return str;
};

console.log(concatArrEle(friends));

//e)Find the friends names who has letter ‘a’ and return the list

const elementsContainsA = (arr) => {
  let ans = [];
  for (let ele of arr) {
    if (ele.indexOf("a") !== -1) {
      ans.push(ele);
    }
  }
  return ans;
};

console.log(elementsContainsA(friends));

//f)Find the avg length of all the friends names. Get the individual length of the names and do the avg.

const getAvg = (arr) => {
  let total = 0;
  for (let ele of arr) {
    total += ele.length;
  }
  return total / arr.length;
};

console.log(getAvg(friends));

//g)Find the names and return the list starting with letter M

const elementsStartingWithM = (arr) => {
  let ans = [];
  for (let ele of arr) {
    if (ele.startsWith("M")) ans.push(ele);
  }
  return ans;
};

console.log(elementsStartingWithM(friends));

//h)Find the name with max characters and return the name

const getLargestName = (arr) => {
  let index = 0;
  let len = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > len) {
      index = i;
      len = arr[i].length;
    }
  }
  return arr[index];
};

console.log(getLargestName(friends));

//i)Find the name with min characters and return the name

const getSmallestName = (arr) => {
  let index = 0;
  let len = arr[index].length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < len) {
      index = i;
      len = arr[i].length;
    }
  }
  return arr[index];
};

console.log(getSmallestName(friends));

//j)Find the average in the array below. Make sure you add only the numbers and do avg
const friendsInfo = [
  6,
  12,
  "Mari",
  1,
  true,
  "Munnabai",
  "200",
  "CaptianAmerica",
  8,
  10,
];

const getAvgForNum = (arr) => {
  let total = 0;
  let len = 0;
  for (let ele of arr) {
    if (typeof ele === "number") {
      total += ele;
      len++;
    }
  }
  return total / len;
};

console.log(getAvgForNum(friends));

//k)Print the contents of the input variable
var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];
function dataHandling(input) {
  for (var i = 0; i < input.length; i++) {
    //Your code goes here
    let innerArr = input[i];
    for (let j = 0; j < innerArr.length; j++) {
      console.log(input[i][j]);
    }
  }
}
dataHandling(input);

//5)TASK:5
//Objects:
//What the output

myobject = { 1: one, 11: 1, name: "arun" };
// console.log(myobject.11);
console.log(myobject.name);

//ans :
//error: one is not defined
//error: line 502 number cannot be used after . operator
//can be used like this myobject['11']

//Add a new key value pair to myobject
// key : ten
// value : ten

myobject = { 1: "one", 11: 1, name: "arun" };
myobject["ten"] = "ten";
console.log(myobject);

//ans:{"1":"one","11":1,"name":"arun","ten":"ten"}

//Write out an object literal to represent the data below.
//Guvi, Geek, 6, IIT-M RP,Chennai.

let institute = "Guvi";
let word = "Geek";
let num = 6;
let college = "IIT-M RP";
let city = "Chennai";

//How would you represent the following data using a combination of object literals and arrays? (You can describe a strategy without typing or writing out the whole thing.)
// Guvi, Geek, 6, IIT-M RP,Chennai.
// Amazon, Inc, 31, SP Infocity, Chennai.
// Google, Alphabet, 34 Amphitheater Parkway, MountainView.
// Tesla, Inc , 32, 333 Santana Row,San Jose.

//we can create a array with objects having
//{'company name': 'Guvi','organisation': 'Geek','door no': 6 ;'area':'IIT-M RP','city' : 'Chennai'}
