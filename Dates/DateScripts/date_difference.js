let startDate = "July 11, 2022";
let endDate = "November 11, 2022";

let milSec = 1000 * 60 * 60 * 24;
let start = new Date(startDate);
let end = new Date(endDate);

let dayMilSec = end.getTime()- start.getTime();



let day = dayMilSec / milSec ;

console.log(Math.round(day));