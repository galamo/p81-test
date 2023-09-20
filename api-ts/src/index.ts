import { Request, Response } from "express";
// const { calcCountriesPopulation } = require("./lib");
import { calcCountriesPopulation } from "./lib";

type TypeOfThing = ReturnType<typeof calcCountriesPopulation>;

const express = require("express");
const dotenv = require("dotenv");
// var a: TypeOfThing = null;
dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(calcCountriesPopulation(2));
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
