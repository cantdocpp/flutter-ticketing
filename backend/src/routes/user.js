const express = require('express')
const router = express.Router()

const UserController = require('../controller/user.controller')
const controller = new UserController

router.get("/login", (req, res) => controller.serveLogin(req, res))
router.get("/register", (req, res) => controller.serveRegister(req, res))

module.exports = router
