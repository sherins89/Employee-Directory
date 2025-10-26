import express from "express";
import employees from "./db/employees.js";
const app = express();

// GET / sends the string "Hello employees!"//
// request, response //
app.get("/", (req, res) => {
  res.send("Hello employees!");
});

// GET all employees - sends the array of employees //
app.get("/employees", (req, res) => {
  res.status(200).json(employees);
});

// GET Random Employee // Tells you to initiate random before ALL employees //
app.get("/employees/random", (req, res) => {
  const randomidx = Math.floor(Math.random() * employees.length);
  const randomemp = employees[randomidx];
  res.status(200).json(randomemp);
});

// Employee by id //
app.get("/employees/:id", (req, res) => {
  console.log(typeof req.params.id);
  const id = Number(req.params.id);
  const foundemployee = employees.find((emp) => emp.id === id);
  if (!foundemployee) {
    return res.status(404).send("Employee Not Found");
  }
  res.status(200).json(foundemployee);
});

export default app;
