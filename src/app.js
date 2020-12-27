import express from 'express'
import TaskRoutes from './routes/task.routes'

const app = express()

// Settings
app.set('port', process.env.PORT || 3000);

app.use(express.json());

// Routes
app.get('/', (req,res) => {
    res.json({message:'bienvenido'})
})

app.use('/api', TaskRoutes)

export default app;