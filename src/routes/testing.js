import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.send('Hello World!!!')
})

router.get('/:name', (req, res) => {
    return res.send('Hello ' + req.params.name + '!')
})

router.get('/asyncRoute', (req, res, next) => {
    // Perform asynchronous operations
    next()
    // Continue normal flow
    return res.send('Hello from async route!')
})

export default router