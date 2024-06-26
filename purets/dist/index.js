"use strict";
// tsc --init ---> for generating the tsconfig.json
// change the rootDir and outDir in tsconfig.json file
// write the code in ts file
// tsc -w to continuosly watch and compile the ts file
// Starting with Ts
// console.log("Chai aur code");
// Classes in Ts
// class User {
//   name: string;
//   email: string;
//   city:string=""
//   constructor(name: string, email: string) {
//     this.name = name;
//     this.email = email;
//   }
// }
// const user = new User("sanskar", "s@g.com");
// user.city="Mumbai"
// Private keyword in Ts
// Private keywords can be accessed within the class not outside it
// class User {
//   name: string;
//   email: string;
//   private city:string=""
//   constructor(name: string, email: string) {
//     this.name = name;
//     this.email = email;
//     this.city=this.city //This will not give me error
//   }
// }
// const user = new User("sanskar", "s@g.com");
// user.city="Mumbai"  ---> This will give me error because i am accessing it outside the User class
// Public keyword in Ts
// Public keywords can be accessed within the class or outside it
// class User {
//   name: string;
//   email: string;
//   public city: string = "";
//   constructor(name: string, email: string) {
//     this.name = name;
//     this.email = email;
//     this.city = this.city; // Public
//   }
// }
// const user = new User("sanskar", "s@g.com");
// user.city = "Mumbai"; // Public
// Getter Functions is used to get the private variables outside the class and Setter Functions are used to set the values for private varaibles
class User {
    constructor(courseId) {
        this.courseId = courseId;
    }
    get getCourseId() {
        return this.courseId;
    }
    set setCourseCount(courseNum) {
        this.courseId = courseNum;
    }
}
const myObject = new User(3434);
myObject.getCourseId;
