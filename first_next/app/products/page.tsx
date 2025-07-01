import React from "react";

type person = {
  name: string;
  age: number;
  isStudent: boolean;
};
let person1: person = {
  name: "Neyton",
  age: 19,
  isStudent: false,
};
let person2: person = {
  name: "Maria",
  age: 19,
  isStudent: true,
};

const page = () => {
  return <h1>This is the prodcucts page</h1>;
};

export default page;
