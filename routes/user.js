const express = require('express');
const router = express.Router();
const {
    registerUser,
    getAllUsers,
    editUser,
    deleteUser
} = require('../controllers/user');

// User routes
router.post('/register', registerUser);
router.get('/users', getAllUsers);
router.put('/users/:id', editUser);
router.delete('/users/:id', deleteUser);

module.exports = router;
