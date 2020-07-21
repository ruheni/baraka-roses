import express from 'express'
import {
    forgot_password,
    reset_password,
    user_login,
    user_signup
} from '../controllers/user.controller'

const authRouter = express.Router()

authRouter.post('/signup', user_signup)

authRouter.post('/login', user_login)

authRouter.post('/forgot-password', forgot_password)

authRouter.post('/reset-password', reset_password)

export default authRouter
