type User = {
    readonly _id: string;
    name: string;
    email: string;
}

type Admin = {
    readonly _id: string;
    name: string;
    email: string;
}

let sovannara: User | Admin = {
    _id: "123",
    name: "katoo",
    email: "katoo@gmail.com"
}

const data: number[] = [1, 2, 3]; // Array of number
const data2: string[] = ["1", "2", "3"]; // Array of string
const data3: (number | string | boolean)[] = [1, 2, "3", true]; // Array of number, string, and boolean