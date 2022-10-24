function getSocSecTax(grossPay){
let tax =  grossPay * 0.062;
return(tax);
}

let grossPay = 5000;
let tax = getSocSecTax(grossPay);
console.log(tax);

function getMedicareTax(gPay){
  let tax =  gPay * 0.0145;
  return(tax);
}
let gpay = 5000;
let tax1 = getMedicareTax(gpay);
console.log(tax1)


function getFederalTax(num1, code)
{
  var taxRate=0;
  if(code == 0 ) {
    let taxRate = num1 * 0.23;
    return(taxRate);
  } else if (code == 1){
    let taxRate = num1 * 0.21;
    return(taxRate);
  }else if (code == 2){
    let taxRate = num1 * 0.195;
    return(taxRate);
  }else if (code == 3){
    let taxRate = num1 * 0.185;
    return(taxRate);
  }else if (code >= 4){
    let taxRate = num1 * (0.18 - [ code - 4 ] * .005);
    return(taxRate);
  }

   
}
  let num1 = 750;
  let num2 = 0;
  let fedTax = getFederalTax (num1,num2);
  console.log("Person 1 : gross pay " + num1 + " withholding code " + num2);
  console.log("Federal Tax is $" + fedTax);

  num1 = 1550;
  num2 = 2;
  fedTax = getFederalTax (num1,num2);
  console.log("Person 2 : gross pay " + num1 + " withholding code " + num2);
  console.log("Federal Tax is $" + fedTax);
  
  num1 = 1100;
  num2 = 6;
  fedTax = getFederalTax (num1,num2);
  console.log("Person 3 : gross pay " + num1 + " withholding code " + num2)
  console.log("Federal Tax is $" + fedTax);