import express from 'express';
import morgan from 'morgan';
import connectToDatabase from './db/db.js';
import userRoutes from './routes/user.routes.js';
import cookieParser from 'cookie-parser';

const app = express();

// Middleware
app.use(express.json()); // for parsing json data ( application/json )
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded ( form data  )
app.use(morgan('dev')); // HTTP request logger middleware
app.use(cookieParser()); // for parsing cookies
app.use('/users', userRoutes);

// Database Connection
connectToDatabase();

// Basic Route Setup
app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;