// Here Typescript is giving error yet the id is string because the union operator combines the properties of number and string so toLowerCase method does not exist in number Type

// const getData=(id:number | string)=>{
//     id.toLowerCase()
// }

// getData(2)
// getData("s")

// Correct method to check the type
const getData = (id: number | string) => {
  if (typeof id === "string") {
    id.toLowerCase();
  }
  if (typeof id === "number") {
    id + 3;
  }
};

getData(2);
getData("s");

const data1: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];

// combining types in array

// const combinedData:string[] | number[]=[1,2,3,"1","2"] // This is wrong
const combinedData: (string | number)[] = [1, 2, 3, "1", "2"]; // This is correct

// Strict Types
let pi: 3.14 = 3.14;
// pi=44  This will give me error Cannot change the value

// another example
let seatAllot: "aisle" | "window" | "middle";
seatAllot = "aisle";
// seatAllot="crew" // This will give me error
