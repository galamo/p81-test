function f<T extends string | number>(a: T, b: T) {
  if (typeof a === "string") {
    return a + ":" + b;
  } else {
    return (a as number) + (b as number); // assertion
  }
}

function f2<
  T extends string | number,
  R extends T extends string ? string : number
>(a: T, b: T): R {
  if (typeof a === "string") {
    return (a + ":" + b) as R;
  } else {
    return ((a as number) + (b as number)) as R;
  }
}
