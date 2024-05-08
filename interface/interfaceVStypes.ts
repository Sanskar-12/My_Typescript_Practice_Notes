// There are two differences between Types and Interface
// 1.You can reopen the interface meaning you can define further more properties or methods in previously defined interface, Eg is given below

interface User {
  readonly dbId: string;
  email: string;
  userId: number;
  googleId?: string;
  startTrial: () => string;
  getCoupon: (couponname: string) => number;
}

// Here I have added the new Property which is githubId
interface User {
  githubId?: string;
}

const user: User = {
  dbId: "sdfsdf",
  githubId: "github",
  email: "s@gmail.com",
  userId: 23,
  googleId: "sdfsdf",
  startTrial: () => {
    return "sanskar";
  },
  getCoupon: (couponname = "sdsd") => {
    return 10;
  },
};

// 2. We can inherit the properties of previously defined interface into a new one, Eg is given below
// we have inherit the properties of User interface into Admin interface

interface Admin extends User {
  role: string;
}

// we have added the role property and it has all the properties defined in User interface
const admin: Admin = {
  dbId: "sdfsdf",
  githubId: "github",
  email: "s@gmail.com",
  userId: 23,
  googleId: "sdfsdf",
  role: "admin",
  startTrial: () => {
    return "sanskar";
  },
  getCoupon: (couponname = "sdsd") => {
    return 10;
  },
};

export {};
