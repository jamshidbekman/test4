// // Task 1

// function Closure() {
//   let count = 0;
//   return {
//     counter: () => {
//       count += 1;
//       console.log(count);
//     },
//     reset: () => {
//       count = 0;
//       console.log(count);
//     },
//   };
// }

// const { counter, reset } = Closure();
// counter();
// counter();
// counter();
// reset();
// counter();

// // Task 2

// function daysUntilBirthday(birthday) {
//   const today = new Date();
//   const birthDate = new Date(birthday);
//   let nextBirthday = new Date(
//     today.getFullYear(),
//     birthDate.getMonth(),
//     birthDate.getDate()
//   );
//   if (nextBirthday < today) {
//     nextBirthday.setFullYear(today.getFullYear() + 1);
//   }
//   const diffInTime = nextBirthday - today;
//   const daysLeft = Math.ceil(diffInTime / (1000 * 60 * 60 * 24));
//   return `Tug'ilgan kuningizga ${daysLeft} kun qoldi`;
// }
// const birthday = "2000-11-1";
// console.log(daysUntilBirthday(birthday));

// // Task 3

// function generatePassword(length) {
//   const randomSymbol = () => {
//     let symbols = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//     let random = Math.trunc(Math.random() * symbols.length);
//     return symbols[random];
//   };
//   let password = "";
//   for (let i = 0; i < length; i++) {
//     password += randomSymbol();
//   }
//   return password;
// }
// console.log(generatePassword(8));

// // Task 4

// function timeDifference(time1, time2) {
//   const date1 = new Date(time1);
//   const date2 = new Date(time2);
//   const diffInMilliseconds = date2 - date1;
//   const hours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
//   const minutes = Math.floor((diffInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
//   return `${hours} soat ${minutes} daqiqa`;
// }
// const time1 = "2024-01-01 10:00";
// const time2 = "2024-01-01 15:30";
// console.log(timeDifference(time1, time2));

// // Task 5

// function createDeposit(interestRate) {
//   return function (amount) {
//     const interest = amount * (interestRate / 100);
//     return amount + interest;
//   };
// }
// const deposit = createDeposit(10);
// console.log(deposit(1000));
// console.log(deposit(2000));

// // Task 6

// function getWeekDay(myDate) {
//   let date = new Date(myDate);
//   let weekDays = ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"];
//   return weekDays[date.getDay()];
// }
// console.log(getWeekDay("2024-11-01"));

// // Task 7

// function generateColor() {
//   const randomNumber = Math.floor(Math.random() * 16777215);
//   return `#${randomNumber.toString(16).padStart(6, "0")}`;
// }
// console.log(generateColor());
// console.log(generateColor());

// // Task 8

// function formatTime(seconds) {
//   const hours = Math.floor(seconds / 3600);
//   const minutes = Math.floor((seconds % 3600) / 60);
//   const remainingSeconds = seconds % 60;
//   return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
// }

// console.log(formatTime(3665));
// console.log(formatTime(7200));

// // Task 9

// function Calculator() {
//   let value = 0;
//   return {
//     add: (number) => {
//       value += number;
//       console.log(value);
//     },
//     minus: (number) => {
//       value -= number;
//       console.log(value);
//     },
//     multiply: (number) => {
//       value *= number;
//       console.log(value);
//     },
//     division: (number) => {
//       value /= number;
//       console.log(value);
//     },
//     reset: () => {
//       value = 0;
//       console.log(value);
//     },
//   };
// }

// const { add, minus, multiply, division, reset } = Calculator();
// add(5);
// minus(2);
// multiply(4);
// reset();

// // Task 10

// function ageCalculation(birthday) {
//   let today = new Date();
//   let birthdate = new Date(birthday);
//   let years = today.getFullYear() - birthdate.getFullYear();
//   let months = today.getMonth() - birthdate.getMonth();
//   let days = today.getDate() - birthdate.getDate();
//   if (days < 0) {
//     months--;
//     days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
//   }
//   if (months < 0) {
//     years--;
//     months += 12;
//   }

//   return `${years} yosh, ${months} oy, ${days} kun`;
// }
// console.log(ageCalculation("2001-05-05"));

// // Task 11

// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(getRandomNumber(1, 10));

// // Task 12

// function createCounter(step) {
//   let count = 0;

//   return function () {
//     count += step;
//     return count;
//   };
// }
// const counter1 = createCounter(2);
// const counter2 = createCounter(5);

// console.log(counter1());
// console.log(counter1());
// console.log(counter2());
// console.log(counter2());
