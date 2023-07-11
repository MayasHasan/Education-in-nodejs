const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const {getMe,registerUser,loginUser} = require('../controllers/userController');

router.use(express.json());
router.get('/me',auth,getMe);
router.post('/register',registerUser);
router.post('/login',loginUser);
module.exports = router