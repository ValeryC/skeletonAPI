module.exports = (models) => {
  const express = require('express'),
    router = express.Router(),
    Users = require('../controllers/user')(models);

  router.route('/')
    .get(Users.getAll);

  return router;
};