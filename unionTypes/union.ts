let score: number | string = 34;

score = "string";

// Type Union
type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let sanskar: User | Admin = {
  name: "user",
  id: 343,
};

sanskar = {
  username: "s",
  id: 223,
};
