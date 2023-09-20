import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CountryTemplate from "./countryTemplate.json";
console.log(CountryTemplate);
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* <CountryComponent country={{ name: { common: "ISR!!" } }} /> */}
    </>
  );
}
// ex component with country card

type ServerResponseCountry = typeof CountryTemplate;
type CountryName = {
  name: Pick<typeof CountryTemplate.name, "official" | "common">;
};
function CountryComponent(props: {
  country: Partial<Omit<ServerResponseCountry, "name"> & CountryName>;
}) {
  return <div>{<h1>{props.country.name?.common}</h1>}</div>;
}

interface carDetails {
  price: number;
  model: string;
}

type carMan = "Tesla" | "bmw" | "lexus";

const caerrs: Record<Uppercase<carMan>, carDetails> = {
  TESLA: { price: 10, model: "Persian" },
  BMW: { price: 5, model: "Maine Coon" },
  LEXUS: { price: 16, model: "British Shorthair" },
};
console.log(caerrs);

export default App;

export function createPerson(firstName: string, lastName: string) {
  return {
    firstName,
    lastName,
  };
}

type r = ReturnType<typeof createPerson>;

function logPerson(person: ReturnType<typeof createPerson>) {
  console.log("Person:", person.firstName, person.lastName);
}
