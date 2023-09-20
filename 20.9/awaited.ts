// type A = Awaited<Promise<string>>;

// type A = string

// type B = Awaited<Promise<Promise<number>>>;

// type B = number

// type C = Awaited<boolean | Promise<number>>;

// type C = number | boolean
async function getData() {
  return new Promise((res, red) => {
    globalThis.setTimeout(() => {
      res();
    }, 3000);
  });
}
