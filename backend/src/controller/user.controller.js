const userModel = require('../model/user')

const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')

class User {
    constructor() {}

    testUser(req, res) {
        res.status(200).json({
            message: 'pong'
        })
    }

    async getAllUser(req, res) {
        try {
            const users = await userModel.find()
            res.status(200).json({
                'users': users
            })
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
        if (!req.body.email || !req.body.password || !req.body.phone) {
            res.status(422).json({
                'message': 'Email, password, or phone number cannot be blank'
            })
            return
        }
        const password = await req.body.password
        const salt = await bcrypt.genSaltSync(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        req.body.password = hashedPassword
        try {
            const emailExist = await userModel.findOne({
                'email': req.body.email
            }).exec()
            if (emailExist) {
                res.status(409).json({
                    'message': 'User already exist'
                })
                return
            }
            userModel.create(req.body)
                .then(response => {
                    const token = jwt.sign(response.toJSON(), 'secret')
                    res.status(200).json({
                        'message': 'user created',
                        'token': token
                    })
                })
                .catch(error => {
                    console.log(error)
                    res.status(500).json({
                        'message': 'internal server error',
                        'track': error
                    })
                    return
                })
        }
        catch(err) {
            res.status(500).json({
                'message': 'internal server error',
                'track': err
            })
        }
    }

    async login(req, res) {
        const email = req.body.email
        const password = req.body.password
        if (!email || !password) {
            res.status(422).json({
                'message': 'Email or password cannot be blank'
            })
            return
        }
        try {
            const getUser = await userModel.findOne({
                email: email
            })
            if (!getUser) {
                res.status(401).json({
                    'message': 'User not found'
                })
                return
            }
            const hashedPassword = getUser.password
            const match = await bcrypt.compare(password, hashedPassword)
            if (match) {
                const accessToken = await jwt.sign(getUser.toJSON(), 'secret')
                res.status(200).json({
                    'message': 'User authenticated',
                    'token': accessToken
                })
                return
            } else {
                res.status(401).json({
                    'message': 'Email or password wrong'
                })
                return
            }
        } catch(err) {
            res.status(500).json({
                'message': 'internal server error',
                'track': err
            })
        }
    }
}

module.exports = User
