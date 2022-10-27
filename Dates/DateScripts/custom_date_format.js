const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let d = new Date();

let monthName = months[d.getMonth()];

let day = days[d.getDay()];

let date = d.getDate();

let year = d.getFullYear();

console.log(date + "-" + monthName + "-" + year + "(" + day + ")");
