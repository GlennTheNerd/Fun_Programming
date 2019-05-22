// My age
myAge = 24;

// this value is flexible
let earlyYears = 2;

earlyYears *= 10.5;

// variable later years is set equal to my age - 2.
let laterYears = myAge - 2;

//this is to calculate dog years
laterYears *= 4;

//this takes early years (2 human) into equation adding the later years aswell which is 4 dog years per year.
let myAgeInDogYears = earlyYears + laterYears;

const myName = "Glenn".toLowerCase();

//this should log my set age and log what that is in dog years.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)