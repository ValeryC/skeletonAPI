const express = require('express');
const mainRouter = express.Router();

const userRouter = require("./user");

mainRouter.get("/", (request, response) => {
  response.status(200).json('Hello World!');
})

// mainRouter.use(userRouter);

module.exports = mainRouter;