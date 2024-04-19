import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import morgan from 'morgan'
import userRoutes from './routes/userRoutes.js'
import votingRoutes from './routes/votingRoutes.js'

dotenv.config()
connectDB()

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.use('/api/users', userRoutes);
app.use('/api/voting', votingRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})