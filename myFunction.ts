function addTwo(num: number) {
    // return num + 2;
    return "Hello";
}

function signUpUser(name: string, email: string, isPaid: boolean) {
    return 'My name is ' + name + 'and my email is ' + email;
}

function getMyValue(val: number): number {
    return val;
}

// a type for a non return function
function noReturnAnyThingWithNever(errMsg: string): never {
    throw new Error(errMsg);
}

// a type for a non return function
function noReturnAnyThingWithVoid(errMsg: string): void {
    throw new Error(errMsg);
}

let myValue = addTwo(5);

signUpUser("h", "h@h.com", false);

console.log(myValue);
console.log(getMyValue(5));
console.log(noReturnAnyThingWithNever('This is an error message'));
console.log(noReturnAnyThingWithVoid);

export {}