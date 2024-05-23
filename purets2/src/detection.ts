// // Narrowing using typeof

// const getData = (val: string | number) => {
//   if (typeof val === "string") {
//     return val.toLowerCase();
//   }

//   return val + 3;
// };

// const getData2 = (val: string | null) => {
//   if (!val) {
//     console.log("Provide val!!!");
//     return;
//   }

//   return val;
// };

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

const isAdminAccount = (account: User | Admin) => {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
};
