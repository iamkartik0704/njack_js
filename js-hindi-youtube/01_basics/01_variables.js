const accountId = 144553
let accountEmail = "njack@gmail.com"
var accountPassword = "12345"
accountCity = "chandigarh"
let accountState;

// accountId = 2 // not allowed


accountEmail = "st@kc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of following issues
*/
// issue number 1
if (true) {
  var a = 10;
  let b = 20;
}
console.log(a); // 10 (leaked out)
console.log(b); // Error (stays inside the block, which is what you want)

// issue number 2
var name = "Kartik";
var name = "Pi"; // no error
let age = 20;
// let age = 21; // Error, which warns you of the mistake


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])