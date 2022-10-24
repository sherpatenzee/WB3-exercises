function convertFtoC(f){
  let convert = (f -32) / 0.55;
  return(convert);
}

let currentTemp = 212;

let celsiusTemp = convertFtoC(currentTemp);

console.log(celsiusTemp)

currentTemp = 90;

celsiusTemp = convertFtoC(currentTemp);

console.log(celsiusTemp)

currentTemp = 72;

celsiusTemp = convertFtoC(currentTemp);

console.log(celsiusTemp)

currentTemp = 32;

celsiusTemp = convertFtoC(currentTemp);

console.log(celsiusTemp)

currentTemp = 0;

celsiusTemp = convertFtoC(currentTemp);

console.log(celsiusTemp)

currentTemp = -40;

celsiusTemp = convertFtoC(currentTemp);

console.log(celsiusTemp)




