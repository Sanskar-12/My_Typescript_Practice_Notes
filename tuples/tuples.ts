// So First of all Tuples is array of fixed length only but the elements are arranged in the same order as of their Types

// let user:[string,number,boolean]=["s",false,34] // this will give me error because the elements are not arranged with their Types
let user: [string, number, boolean] = ["s", 34, false];

// Use case of tuples
// another example I want ki the rgb should have only three values not more than or less than that
let rgb: [number, number, number] = [233, 23, 3];

// Something is wrong about Tuples
type User = [number, string];

let newUser: User = [23, "dfd"];

newUser.push("sdfsdf"); // As Tuple is of fixed length then also i can push the string into the array, Why???
