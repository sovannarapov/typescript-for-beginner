type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardNumber?: number;
  readonly properties: String[];
};

let myUser: User = {
  _id: '123',
  name: 'h',
  email: 'h@h.com',
  isActive: false,
  properties: ['house', 'car'],
};

myUser.name = 'a';
myUser.email = 'a@a.com';
// myUser.properties = ['diamond']; // Could not assign value to readonly array
myUser.properties.push('gold'); // Could push value to readonly array

console.log(myUser.properties);

export {};
