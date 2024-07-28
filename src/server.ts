import express, { ErrorRequestHandler } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const PORT = Number(process.env.PORT)

const app = express()

const errorHandler: ErrorRequestHandler = (err, req, res, _next) => {
    res.status(500).json({
        message: err.message,
        timestamp: Date.now(),
        url: req.url
    })
}

app.get('/', (_req, res, next) => {
    try {
        res.send('Server is online')
    } catch (error) {
        next(error)
    }
})

// ENDPOINT THROWING ERROR
app.get('/err', (_req, _res, next) => {
    next(new Error('Example of an error'))
})

// ERROR HANDLER
app.use(errorHandler)

// NOT FOUND HANDLER
app.use((req, res) => {
    res.send(`Route ${req.url} was not found`)
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
