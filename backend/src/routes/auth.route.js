import express from 'express'

const authRouter = express.Router()

authRouter.post('/signup', (req, res) => {
    const { firstName, lastName, email, password, role } = req.body

    res.json({
        message: 'signup requested',
        userInfo: {
            firstName, lastName, email, password, role
        }
    })
})

authRouter.post('/login', (req, res) => {
    res.json({ message: 'login requested' })
})

authRouter.post('/forgot-password', (req, res) => {
    res.json({ message: 'forgot-password requested' })
})

authRouter.post('/reset-password', (req, res) => {
    res.json({ message: 'reset password requested' })
})

export default authRouter
