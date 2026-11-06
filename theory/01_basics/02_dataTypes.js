"use strict"; // treat all JS code as newer version

console.log("njack")


let name = "kartik"
let age = 19
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique

// undefined and null

// undefined means “no value has been given yet.” JavaScript sets it for you:
let a;
console.log(a);           // undefined (declared, never assigned)

const obj = {};
console.log(obj.name);    // undefined (property doesn't exist)

function f() {}
console.log(f());         // undefined (function returns nothing)

// null means “intentionally empty.” You set it yourself to say “there is no value here, on purpose”:
let user = null; // no user logged in yet




typeof undefined; // "undefined"
typeof null;      // "object" (a famous old JavaScript bug)

null == undefined;  // true  (loosely equal)
null === undefined; // false (different types)