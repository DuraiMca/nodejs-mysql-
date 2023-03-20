const express = require("express");
const app = express();
const router = express.Router();
createUser=require("./controller/userController")


router.post('/register', createUser.createUser);
router.get('/getuser', createUser.getUsers);
router.post('/login', createUser.loginUser);

module.exports = router;
