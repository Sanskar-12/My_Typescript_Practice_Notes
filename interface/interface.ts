interface User {
  readonly dbId: string;
  email: string;
  userId: number;
  googleId?: string;
  startTrial: () => string;
  getCoupon: (couponname: string) => number;
}

const user: User = {
  dbId: "sdfsdf",
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

export {};
