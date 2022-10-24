function convertCtoF(c){
  let convert = (c * 1.8) + 32 ;
  return (convert);
}

let currentTemp = 100;

let farTemp = convertCtoF(currentTemp);

console.log(farTemp);

currentTemp = 45;

farTemp = convertCtoF(currentTemp);

console.log(farTemp);
currentTemp = 19;

farTemp = convertCtoF(currentTemp);

console.log(farTemp);


currentTemp = 0;

farTemp = convertCtoF(currentTemp);

console.log(farTemp);


currentTemp = -7;

farTemp = convertCtoF(currentTemp);

console.log(farTemp);


currentTemp = -40;

farTemp = convertCtoF(currentTemp);

console.log(farTemp);





