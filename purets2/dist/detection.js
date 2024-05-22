"use strict";
// Narrowing using typeof
const getData = (val) => {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
};
const getData2 = (val) => {
    if (!val) {
        console.log("Provide val!!!");
        return;
    }
    return val;
};
