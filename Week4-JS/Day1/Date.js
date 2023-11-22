console.log("Date.js file is connected")

let date = new Date()
// To get current date obj
console.log(date);

// date, month, hours, seconds... ETC
date.getHours()
date.getDate()
date.getDay()
date.getFullYear()
date.getSeconds()
date.getMinutes()

// How to add  1 day extra into cuurent datetime
const miiliPerDay = 1000 * 60 * 60 * 24
const dateOfDayAfterToday = new Date(date.setTime(date.getTime() + (miiliPerDay)))

// Formatted date (date-month-year)
date = new Date()
// "20 Nov 2023"
let tarik = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let forMattedDate = `${tarik} ${months[month]} ${year}`
forMattedDate;

// Formatted date (day-date-month-year)