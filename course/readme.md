# Typescript

### Typescript compiler

#### Quick start

1. Install - `npm install typescript --save-dev`
2. create appropriate script
3. compile the code `tsc`

#### Compiler options

1. Options:

```json
{
  "compilerOptions": {
    "module": "CommonJS",
    "outDir": "./dist",
    "rootDir": "./src",
    "target": "ES6"
  },

  "exclude": ["node_modules"]
}
```

2. compile the code `tsc`
3. use `watch` mode `tsc --watch`

### Types

##### Example_1:

simple types

##### Ex_1:

Create the following variables and assign them values

- vacationLocation
- numberOfDays
- from
- to
- price
  at the end, log all of them in a nice message:

##### Example_2:

- reassign values in Typescript
- using string function and numbers
- inference

##### Example_3:

- Delayed init `Array<string>` let of products

##### Ex_3:

Complete the missing type and let TS throw Error

```javascript
const salaries = [100, 222, 3300, 4400];
const highSalaries = salaries.reduce((sal: any, currentSalary: any) => {
  if (currentSalary > 100) {
    return sal + currentSalary;
  } else return sal;
}, 0);
highSalaries.toLowerCase();
console.log(highSalaries);
```

### Functions

##### Example_1:

- greet + arithmetic function
- run time validation
- default paramters
- void, primitive type
- never ( loop, throw )

##### Ex_1:

- Create a function that receive `productName` string & `print` boolean.
- The function will print the `productName` only if the print value is true
- make the `print` default false
- make `print` optional
- make sure to put

##### Ex_2:

- Write a function called "twoFer" that accepts a person's name
- It should return a string in the format `one for <name>, one for me`
- If no name is provided, it should default to "you"

- twoFer() => "One for you, one for me"
- twoFer("Gal") => "One for Gal, one for me"

##### Ex_3:

Write a isLeapyear() function that accepts a year and returns true/false depending on if the year is a leap year

- isLeapYear(2012) => true
- isLeapYear(2013) => false

`To determine whether a year is a leapyear, use this "formula":
// A YEAR IS A LEAPYEAR IF
// - year is a multiple of 4 AND not a multiple of 100
// OR...
// - year is a multiple of 400
// hint - use modulo`

### Objects

1. function with Object exmaple
2. return type
3. excess properties ignored
4. Type aliases 

### Casting

##### Ex_1:

- Create a function that receive elementId string & return the element value;

## Exercises

1. Queue Class with Generics



// Write the Movie type alias to make the following two variables properly typed
// Make sure that "originalTitle" is optional and "title" is readonly
type Movie = {
  readonly title: string;
  originalTitle?: string;
  director: string;
  releaseYear: number;
  boxOffice: {
    budget: number;
    grossUS: number;
    grossWorldwide: number;
  };
};

const dune: Movie = {
  title: "Dune",
  originalTitle: "Dune Part One",
  director: "Denis Villeneuve",
  releaseYear: 2021,
  boxOffice: {
    budget: 165000000,
    grossUS: 108327830,
    grossWorldwide: 400671789,
  },
};

const cats: Movie = {
  title: "Cats",
  director: "Tom Hooper",
  releaseYear: 2019,
  boxOffice: {
    budget: 95000000,
    grossUS: 27166770,
    grossWorldwide: 73833348,
  },
};

// Write a function called getProfit that accepts a single Movie object
// It should return the movie's worldwide gross minus its budget

// For example...
// getProfit(cats) => -21166652

// function getProfit(movie: Movie): number{
//     return movie.boxOffice.grossWorldwide - movie.boxOffice.budget
// }

// function getProfit(movie: Movie): number {
//   const { grossWorldwide, budget } = movie.boxOffice;
//   return grossWorldwide - budget;
// }

function getProfit({ boxOffice: { grossWorldwide, budget } }: Movie): number {
  return grossWorldwide - budget;
}

console.log(getProfit(dune));
console.log(getProfit(cats));





solution


// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
const ages: number[] = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
const gameBoard: string[][] = [];

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}
type Product = {
  name: string;
  price: number;
};
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices

function getTotal(products: Product[]): number {
  let total = 0;
  for (let product of products) {
    total += product.price;
  }
  return total;
}



https://github.com/typescript-exercises/typescript-exercises/blob/main/src/exercises/4/index.ts



