import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import TaskRoutes from './routes/task.routes'

const app = express()

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.get('/', (req, res) => {
    res.json({ message: 'bienvenido' })
})

app.use('/api', TaskRoutes)

export default app;