'use strict'
import cors from 'cors'
import { routes } from './routes'
import express, { Router, json, urlencoded } from 'express'

const PORT = 3100 | process.env.PORT

const app = express()
const router = Router()

app.use(json())
app.use(urlencoded({ extended: true }))
app.use(cors())
app.use('/api', router)
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
  res.header('Access-Control-Allow-Methods', 'GET')
  res.header('Allow', 'GET')
  next()
})

routes(router)
router.get('/', (req, res) => {
  res.send('Hello from home')
})

app.use(router)

app.listen(PORT, () => {
  console.log(`Server run on port ${PORT}`)
})

export default app
