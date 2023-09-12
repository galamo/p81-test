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
export {};
