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

export {};
