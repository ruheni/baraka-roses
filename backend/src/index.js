require('dotenv').config({ path: './.env' });
import bodyParser from 'body-parser';
import express from 'express';
import logger from 'morgan';
import authRouter from './routes/auth.route';
import customersRouter from './routes/customer.route';
import ordersRouter from './routes/order.route';
import productsRouter from './routes/product.route';
import usersRouter from './routes/user.route';
import { connectDB } from './util/db';


const app = express();
const PORT = process.env.PORT || 3001;

// connect to db
connectDB()

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(logger('dev'))

app.use('/api/users', usersRouter)
app.use('/api/customers', customersRouter)
app.use('/api/auth', authRouter)
app.use('/api/orders', ordersRouter)
app.use('/api/products', productsRouter)


app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);
