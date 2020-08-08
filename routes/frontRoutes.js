const express = require('express');
const router = express.Router();

// Controllers
const IndexController = require('../controllers/IndexController');
const RoomContoller = require('../controllers/RoomController');
const LoginController = require('../controllers/LoginController');

router.get('/', LoginController.index);
router.post('/login', LoginController.login);

router.get('/rooms/:room', RoomContoller.index);
module.exports = router;