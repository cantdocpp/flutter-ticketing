const express = require('express')
const router = express.Router()

const UserController = require('../controller/user.controller')
const controller = new UserController

router.get('/', (req, res) => controller.getAllUser(req, res))
router.post("/login", (req, res) => controller.login(req, res))
router.post("/register", (req, res) => controller.register(req, res))

module.exports = router
