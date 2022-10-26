function getSupplierCode (code){
  let pos = code.indexOf(":");
  let supplier = code.slice(0, pos);
  return supplier;
}

function getProductNumber(code){
  let pos = code.indexOf(":");
  let dash =  code.indexOf("-");
  let productNumber = code.slice(pos+ 1, dash);
  return productNumber;
}

function getProductSize(code){
  let dash =  code.indexOf("-");
  let size = code.slice(dash + 1);
  return size;
}

let code = "ACME:123-L";
let supplier = getSupplierCode(code);
console.log(supplier);

let productNumber = getProductNumber(code);
console.log(productNumber);

let productSize = getProductSize(code);
console.log(productSize);


code = "DI:12345-M";
supplier = getSupplierCode(code);
console.log(supplier);

 productNumber = getProductNumber(code);
console.log(productNumber);

productSize = getProductSize(code);
console.log(productSize);


code = "ACE:1-12";
supplier = getSupplierCode(code);
console.log(supplier);

productNumber = getProductNumber(code);
console.log(productNumber);

productSize = getProductSize(code);
console.log(productSize);