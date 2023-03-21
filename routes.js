const express = require("express");
const router = express.Router();
createUser=require("./controller/AuthController")
requireToken=require("./middleware/routesmiddleware")


router.post('/register', createUser.createUser);
router.get('/getuser',requireToken, createUser.getUsers);
router.post('/login',createUser.loginUser);

module.exports = router;
