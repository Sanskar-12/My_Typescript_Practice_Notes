"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addNum(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
function loginUser(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}
addNum(3);
getUpper("sanskar");
signUpUser("s", "s@gmail.com", false);
loginUser("s", "s@gmail.com");
