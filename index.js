import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './router/book.router.js';
import courserouter from './router/course.router.js';
import cors from 'cors';
import userrouter from './router/user.router.js';
import { userrouter1 } from './router/user.router.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const URI = process.env.MONGOURI;

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/Book")
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));
  app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Adjust methods if needed
    allowedHeaders: ['Content-Type'], // Adjust headers if needed
  }));
// Middleware
app.use(express.json()); // To parse JSON bodies
app.use('/book', router);
app.use('/course',courserouter);
app.use('/user',userrouter);
app.use('/login',userrouter1);
// Example route
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
