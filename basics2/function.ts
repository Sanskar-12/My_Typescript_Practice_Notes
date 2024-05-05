function addNum(num: number): number {
  return num + 2;
  //   return "hello";
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

function loginUser(name: string, email: string, isPaid: boolean = false) {}

let num = addNum(3);
getUpper("sanskar");
signUpUser("s", "s@gmail.com", false);
loginUser("s", "s@gmail.com");

// union operator ---- will study in next video
function getVal(val: number): number | string {
  if (val > 4) {
    return val;
  }
  return "OK";
}

// Using Return Type in Arrow Functions
const getHello = (s: string): string => {
  return "";
};

// Typescript is smart enough which can show the type when I comment or uncomment the following code :)

const heroes = ["Ironman", "Superman", "Spiderman"];
// const heroes=[1,2,3]

heroes.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(err: string): void {
  console.log(err);
}

// Use never type when the function terminates or stops executing
function handleError(err: string): never {
  throw new Error(err);
}

export {};
