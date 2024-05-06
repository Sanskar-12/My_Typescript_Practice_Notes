function newUser(): { name: string; isPaid: boolean } {
  return { name: "Sanskar", isPaid: false };
}

// bad behaviour of Typescript
function createUser({ name: string, isPaid: boolean }) {}

let user = {
  name: "Sanskar",
  isPaid: false,
  email: "s@gmail.com",
};

createUser(user);

// Type Aliases

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function myUser(user: User): User {
  return user;
}

myUser({ name: "", email: "", isActive: false });

export {};
