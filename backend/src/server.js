import express from 'express'
import { ENV } from './config/env.js'
import { connectDB } from './config/db.js'
import { clerkMiddleware } from '@clerk/express'
import { functions, inngest } from './config/inngest.js'
import { serve } from 'inngest/express'
import chatRoutes from './routes/chat.route.js'
import '../instrument.js'
import * as Sentry from '@sentry/node'
const { PORT } = ENV
const app = express()

app.use(express.json())
app.use(clerkMiddleware())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
 
  res.status(200).send(`<h1>Chidume Kenechukwu</h1>`)
})
app.get('/debug-sentry', (req, res) => {
  throw new Error('My first Sentry error!')
})
app.use('/api/inngest', serve({ client: inngest, functions }))
app.use('/api/chat', chatRoutes)

Sentry.setupExpressErrorHandler(app)
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