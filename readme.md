Starter:

https://itjet.io/blog/what-is-typescript

https://github.com/basarat/typescript-for-professionals/blob/master/01%20intro/src/index.ts

https://github.com/galamo/trusteer-node/blob/master/playground/typescript/package.json

https://dev.to/macsikora/advanced-typescript-exercises-answer-5-2178

https://dev.to/macsikora/advanced-typescript-exercises-answer-3-akp

OMIT
https://refine.dev/blog/typescript-omit-utility-type/#typescript-omit-with-interface
types

PARTIAL REQUIRED
https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype


ZOD
https://blog.logrocket.com/schema-validation-typescript-zod/
https://medium.com/ssense-tech/kneel-before-zod-improving-validation-for-your-typescript-projects-4b74b8e12b13


NEW TS 5
https://blog.logrocket.com/exploring-typescript-5-features-smaller-simpler-faster/#const-type-parameters


UNION ENUMS
enum Color { Red, Blue, Green, Yellow }
type Colors = Color
type Colors2 = Color.Red | Color.Blue | Color.Green | Color.Yellow

// In this case Color, Colors, and Colors2 are the same type


react example with useTransistion

https://blog.openreplay.com/usetransition-vs-usedeferredvalue-in-react-18/

let isPresent: boolean = false;
let magic: number = 66.6;
let hello: string = 'world';

let notDefined: undefined = undefined;
let notPresent: null = null;

let penta: symbol = Symbol('star');
let biggy: bigint = 24n;




https://dev.to/macsikora/advanced-typescript-exercises-answer-3-akp

https://www.typescriptlang.org/docs/handbook/enums.html



KEYOF 
https://www.typescriptlang.org/docs/handbook/2/types-from-types.html
https://www.typescriptlang.org/docs/handbook/2/keyof-types.html


RETURN TYPE
export function createPerson(firstName: string, lastName: string) {
  return {
    firstName,
    lastName,
  };
}

function logPerson(person: ReturnType<typeof createPerson>) {
  console.log(
    'Person:',
    person.firstName,
    person.lastName,
  );
}
