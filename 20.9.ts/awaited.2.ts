async function getCountries<T>(): Promise<T> {
  const a = await fetch("https://restcountries.com/v3.1/all");
  const b: T = await a.json();
  return b;
}

async function init2() {
  const result: Awaited<Promise<any>> = await getCountries<{
    area: number;
  }>();
  console.log(result[0].area);
}

init2();
