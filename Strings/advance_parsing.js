

function parseAndDisplayName(name) {

  let pos = name.indexOf(" ");
  let onlyName = name.slice(0);

  console.log("Name : " + name);
  console.log("Only name : " + onlyName);

}

function displayName(name) {

  let pos = name.indexOf(" ");
  let first = name.slice(0,pos);
  let last = name.slice(pos);
  console.log("Name : " + name);
  console.log("First name : " + first);
  console.log("Last name : " + last);
}

function parseName(name) {

  let pos = name.indexOf(" ");
  let first = name.slice(0,pos);
  let middle = name.slice(pos,9);
  let last = name.slice(10);
  console.log("Name : " + name);
  console.log("First name : " + first);
  console.log("Middle name : " + middle);
  console.log("Last name : " + last);
}

parseAndDisplayName("Cher")
displayName("Brenda Kaye")
parseName("Dana Lynn Wyatt")
