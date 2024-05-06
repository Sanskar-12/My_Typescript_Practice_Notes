// here is the catch
// We can modify the array while its readonly because here we are not changing the reference of the array but we are only modifying the array so we can edit the array if its readonly
type User = {
  readonly _id: number[];
};

const myUser: User = {
  _id: [1, 2, 3, 4],
};

myUser._id.push(23);

console.log(myUser._id);

// optional element
type Details = {
  credCardDetails?: number;
};

// combining the multiple Types
type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

type card = cardNumber &
  cardDate & {
    cvv: number;
  };

export {};
