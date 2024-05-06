"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function newUser() {
    return { name: "Sanskar", isPaid: false };
}
// bad behaviour of Typescript
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var user = {
    name: "Sanskar",
    isPaid: false,
    email: "s@gmail.com",
};
createUser(user);
function myUser(user) {
    return user;
}
myUser({ name: "", email: "", isActive: false });
