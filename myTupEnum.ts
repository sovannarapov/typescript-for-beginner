let tUser: [string, number, boolean];

tUser = ["sovannara", 25, true];

let rgb: [number, number, number] = [255, 123, 222];

type User = [ number, string ];

// we couldn't do let user1: User = ["hello world", 123];
// because it is tuple
let user1: User = [123, "hello world"];

export {}