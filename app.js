const express = require('express')
const app = express()
const userRoutes = require('./routes/users/user')
const { logger, dummyUserApiAuthentication } = require('./middlewares/logger')

// Middlewares
// Middleware to use in whole app
app.use(logger)

// Routes
// using dummyUserApiAuthentication middleware just for /api/users routes.
app.use('/api/users', dummyUserApiAuthentication, userRoutes)

// inline middleware
app.use('/hello', (req, res, next) => {
    console.log("INLINE MIDDLEWAREEEEEEE --------------------")
    next()
}, (req, res) => {
    res.status(200).json({message: "Hello Worlds!"})
})

module.exports = app