import express from 'express';
import bookRoute  from './routes/book.routes.js'
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false}))

// Middleware for handling CORS POLICY
// method 1:- allow all origins with default of cors(*)
app.use(cors())

//method 2:- allow custom origins

cors({
    origin: 'http://localhost:5000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
})

//routes

app.use("/api/books", bookRoute )
app.get('/', (req, res) => {
    res.send("Welcome to MERN Book Store!");
})

export default app