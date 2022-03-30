const express = require("express");
const {register,login} = require("./controllers/auth.controller");

const app = express();

const userController = require("./controllers/users.controller");

app.use(express.json());

app.post("/register",register);
app.post("/login", login);

app.use("/users",userController);

module.exports = app;