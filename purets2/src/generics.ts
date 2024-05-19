//  Generics can be used to make reusable components, its like any but any can accept any type of val and return any type of value but Generics only return one Type

function identityOne(val: number | boolean): number | boolean {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  type: string;
}

// You can pass on your own Types in Generics

const objbottle: Bottle = {
  brand: "sdf",
  type: "sdf",
};

identityThree<Bottle>(objbottle);
