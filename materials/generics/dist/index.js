var _a, _b;
function makeCustomer(u) {
    // Below error, why?
    return Object.assign(Object.assign({}, u), { id: u.id, kind: "customer" });
}
const admin = makeCustomer({ id: 1, kind: "customer" });
console.log(admin);
/**
 * @deprecated Use the new Main function called MainNew
 */
function main() {
    console.log("this is working ");
}
function sum(a, b) { }
console.log("teeeeteteteete");
console.log("teeeeteteteete");
console.log("teeeeteteteete");
console.log("teeeeteteteete");
main();
const value1 = (_a = document.getElementById("root")) === null || _a === void 0 ? void 0 : _a.innerHTML;
console.log(document.body.innerHTML);
const value2 = (_b = document.getElementById("inputName")) === null || _b === void 0 ? void 0 : _b.value;
console.log(typeof value2);
function print(person) {
    console.log(person.first);
}
print({ first: "Gal", last: "amouyal", age: 34 });
const person = { first: "Gal", last: "amouyal", age: 34 };
print(person);
export {};
