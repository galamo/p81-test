// If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type? For example if we have Promise<ExampleType> how to get ExampleType?
// Take a look at below code. Write an utility type Transform which will take a generic type argument, and if it is a Promise it will evaluate to the type inside it.
// import { a } from "./a.js";
// import Main from "../src/types/index";
// Main();
export type ServerApiResponse = Promise<string>;
// console.log(a);
type User = {
  id: number;
  kind: string;
};

function makeCustomer<T extends User>(u: T): T {
  // Below error, why?
  return {
    ...u,
    id: u.id,
    kind: "customer",
  };
}

type Admin = User & {
  kind: "admin";
};

type IsAdminAUser = Admin extends User ? true : false; // evaluates to true

const admin = makeCustomer({ id: 1, kind: "customer" });
console.log(admin);
/**
 * @deprecated Use the new Main function called MainNew
 */
function main() {
  console.log("this is working ");
}

function sum(a: number, b: number) {}
console.log("teeeeteteteete");
console.log("teeeeteteteete");
console.log("teeeeteteteete");
console.log("teeeeteteteete");
main();

const value1 = document.getElementById("root")?.innerHTML;
console.log(document.body.innerHTML);
const value2 = (document.getElementById("inputName") as HTMLInputElement)
  ?.value;
console.log(typeof value2);

function print(person: { first: string; last: string }) {
  console.log(person.first);
}

print({ first: "Gal", last: "amouyal", age: 34 });
const person = { first: "Gal", last: "amouyal", age: 34 };
print(person);
