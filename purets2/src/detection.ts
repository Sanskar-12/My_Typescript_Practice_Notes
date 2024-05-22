// Narrowing using typeof

const getData = (val: string | number) => {
  if (typeof val === "string") {
    return val.toLowerCase();
  }

  return val + 3;
};

const getData2 = (val: string | null) => {
  if (!val) {
    console.log("Provide val!!!");
    return;
  }

  return val;
};
