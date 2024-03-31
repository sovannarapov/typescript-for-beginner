"use strict";
exports.__esModule = true;
function addTwo(num) {
    // return num + 2;
    return "Hello";
}
function signUpUser(name, email, isPaid) {
    return 'My name is ' + name + 'and my email is ' + email;
}
function getMyValue(val) {
    return val;
}
// a type for a non return function
function noReturnAnyThingWithNever(errMsg) {
    throw new Error(errMsg);
}
// a type for a non return function
function noReturnAnyThingWithVoid(errMsg) {
    throw new Error(errMsg);
}
var myValue = addTwo(5);
signUpUser("h", "h@h.com", false);
console.log(myValue);
console.log(getMyValue(5));
console.log(noReturnAnyThingWithNever('This is an error message'));
console.log(noReturnAnyThingWithVoid);
