"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myUser = {
    _id: '123',
    name: 'h',
    email: 'h@h.com',
    isActive: false,
    properties: ['house', 'car'],
};
myUser.name = 'a';
myUser.email = 'a@a.com';
myUser.properties.push('gold');
console.log(myUser.properties);
