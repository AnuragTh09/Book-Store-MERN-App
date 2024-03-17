import express from 'express';
import bookRoute  from './routes/book.routes.js'

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false}))

//routes

app.use("/api/books", bookRoute )
app.get('/', (req, res) => {
    res.send("Welcome to MERN Book Store!");
})

export default app