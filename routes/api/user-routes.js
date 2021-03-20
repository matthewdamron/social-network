const router = require('express').Router();
const {
  getAllUsers,
  createUser
} = require('../../controllers/user-controller');

// /api/users
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

// /api/users/:id
router
  .route('/:id')

module.exports = router;
