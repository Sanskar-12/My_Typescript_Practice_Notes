"use strict";
// tsc --init ---> for generating the tsconfig.json
// change the rootDir and outDir in tsconfig.json file
// write the code in ts file
// tsc -w to continuosly watch and compile the ts file
// console.log("Chai aur code");
class User {
    constructor(name, email) {
        this.city = "";
        this.name = name;
        this.email = email;
    }
}
const user = new User("sanskar", "s@g.com");
user.city = "Mumbai";
