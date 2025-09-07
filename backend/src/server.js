import express from 'express'
import { ENV } from './config/env.js'
import { connectDB } from './config/db.js'
import { clerkMiddleware } from '@clerk/express'
import { functions, inngest } from './config/inngest.js'
import { serve } from 'inngest/express'
const { PORT } = ENV
const app = express()
app.use(express.json())
app.use(clerkMiddleware())
app.use(express.urlencoded({ extended: true }))
app.use('/api/inngest', serve({ client: inngest, functions }))
app.get('/', (req, res) => {
  console.log(req.auth())
  res.status(200).send(`<h1>Hello1 <br> World</h1>`)
})
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  connectDB()
})

const startServer = async () => {
  try {
    await connectDB()
    if (ENV.NODE_ENV !== 'production') {
      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
      })
    }
  } catch (error) {
    console.error('Failed to start server:', error)
  }
}

startServer()
export default app