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

// Employee by id //
app.get("/employees/:id", (res, req) => {
  const empid = Number(req.params.id);
  const foundemployee = employees.find((emp) => emp.id === empid);
  if (!foundemployee) {
    return res.status(404).send("No employee found with that ID");
  }
});

// GET Random Employee //
app.get("/employees/random", (req, res) => {
  const randomidx = Math.floor(Math.random() * employees.length);
  const randomemp = employees[randomidx];
  res.status(200).json(randomemp);
});

export default app;
