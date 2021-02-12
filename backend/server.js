import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import orderRouter from './routers/orderRouter.js';

dotenv.config()
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNesUrlParser: true,
            useCreateIndex: true
        })
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}
connectDB()


app.use('/api/users', userRouter);
app.use('/api/products', productRouter)
app.get('/api/config/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb')
})
app.use('/api/orders', orderRouter)



app.get('/', (req, res) => {
    res.send('Server is ready')
})

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message })
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server at http://localhost:${port}`)
})