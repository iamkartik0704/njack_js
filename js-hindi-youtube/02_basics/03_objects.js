// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "kartik",
    "full name": "kartik chawla",
    [mySym]: "mykey1",
    age: 19,
    location: "bihta",
    email: "iamkartik0704@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "kartik@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "kartik@yahoo.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());