function displayMailingLabel(name ,address ,city , state ,zip){
  
  console.log(name);
  console.log(address);
  console.log(city , state , zip);
}
displayMailingLabel("Tenzing", "85 Broad street" ,"NewYork" , "NY", "11101");

function addNumbers(num1,num2){
  let someNumber = num1 + num2;
  let message = num1 + "+" + num2 + "=" + someNumber
  console.log(message);
}
addNumbers(5,100);

function displayreceipt(totalDue, amountpaid){
  let message1 = "Total due : $" + totalDue;
  let message2 = "Amount Paid : $" + amountpaid;
  
  console.log(message1)
  console.log(message2)

 if( amountpaid < totalDue){
  let amt =totalDue - amountpaid;
  let message="You nede to pay $" + amt + " more";
  console.log(message)
 }
 else if(amountpaid > totalDue) {
  let changeDue = amountpaid - totalDue;
  let message3 = "Change Due : $" + changeDue;
  console.log(message3)
 }

}
displayreceipt(800, 100 );

displayMailingLabel("Tenzing", "85 Broad street" ,"NewYork" , "NY", "11101");
displayMailingLabel("Sam", "66 lock street" , "LA" , "CA" , "72004");

addNumbers( 200 , 150);
addNumbers( 200 , 500);

displayreceipt(80, 100 );
displayreceipt(80, 80 );
displayreceipt(800, 100 );

