const { createUser, deleteUser, getUsers, updateUser} = require('./user.controller');
const router = require('express').Router();

router.post('/', createUser);
router.get('/', getUsers);
router.patch('/', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
