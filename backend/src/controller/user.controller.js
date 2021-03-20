const userModel = require('../model/user')

const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')

class User {
    constructor() {}

    async getAllUser(req, res) {
        try {
            const users = await userModel.find()
            console.log(users)
        } catch(err) {
            res.status(500).json({
                'message': 'internal server error'
            })
        }
    }

    async getUserData(req, res) {
        const token = req.params.token
        const tokenData = await jwt.decode(token)
        res.status(200).json(tokenData)
    }

    async register(req, res) {
        const password = req.body.password
        const saltRound = 10
        const hashedPassword = await bcrypt.hash(password, saltRound, '')
        req.body.password = hashedPassword
        try {
            await userModel.create(req.body)
            res.status(200).json({
                'success': true
            })
        }
        catch(err) {
            console.log(err)
            res.status(500).json({
                'message': 'internal server error'
            })
        }
    }

    async login(req, res) {
        const email = req.body.email
        const password = req.body.password
        try {
            const getUser = await userModel.find({
                email: email
            })
            if (!getUser) return res.redirect('/user/sign-in')
            const hashedPassword = getUser[0].password
            const match = await bcrypt.compare(password, hashedPassword)
            if (match) {
                const accessToken = await jwt.sign(getUser[0].toJSON(), 'secret')
                res.cookie('access_token', accessToken)
                return res.redirect('/')
            } else {
                res.redirect('/user/sign-in')
            }
        } catch(err) {
            console.log(err)
        }
    }
}

module.exports = User
