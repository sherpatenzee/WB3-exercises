

function parseAndDisplayName(fullname){


console.log(`.........................`)
console.log(`Display results for input : ${fullname}`);

let indexOfFirstSpace = fullname.indexOf(" ");
let oneSpace = (indexOfFirstSpace != -1);
let arefirstAndLastIndexOfSpaceIdentical =(fullname.indexOf(" ") == fullname.lastIndexOf(" "));

if(!oneSpace){
  console.log(`Only Name : ${fullname}`);

}else if(arefirstAndLastIndexOfSpaceIdentical){

   let firstName= fullname.substring(0 , indexOfFirstSpace);
    console.log(`First Name :  ${firstName}`);

    let lastName = fullname.substring(indexOfFirstSpace + 1);
    console.log(`Last Name :  ${lastName}`);

}else{

    let indexOfLastSpace = fullname.lastIndexOf(" ");

    let firstName = fullname.substring(0 , indexOfFirstSpace);
    console.log(`First Name : ${firstName}`);

    let middleName = fullname.substring(indexOfFirstSpace + 1, indexOfLastSpace + 1)
    console.log(`middle Name : ${middleName}`);

    let lastName= fullname.substring(indexOfLastSpace + 1)
    console.log(`Last Name : ${lastName}`);

 }
}
parseAndDisplayName("Cher");
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Dana Lynn Wyatt");