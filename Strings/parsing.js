

function parseAndDisplayName(name) {

  let pos = name.indexOf(" ");
  let first = name.slice(0,pos);
  let last = name.slice(pos);
  console.log("Name : " + name);
  console.log("First name : " + first);
  console.log("Last name : " + last);
}

parseAndDisplayName("Brenda Kaye")
parseAndDisplayName("Ian Auston")
parseAndDisplayName("Siddalee Grace")




