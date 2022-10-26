import express from 'express';
import data from './data.js'
import cors from 'cors'
import * as dotenv from 'dotenv'
dotenv.config()

const app = express();
app.use(cors())

const PORT = 5000
const { products } = data

app.get('/api/products', (req, res) => {
    if (products) {
        res.send(products)
    } else {
         res.status(404).send({ message: 'Products not found'})
    }
})

app.get('/api/products/:id', (req, res) => {
    const { params } = req
    try {
        const product = products.find((p) => p._id === params.id)
        const sendProduct = product ? product : ''
        console.warn('Product', sendProduct)
        res.send(sendProduct)
    } catch (error) {
        res.status(404).send({ message: ` Product not found ${error}`})
    }
})

app.listen(PORT, () => {
    try { console.log(`The api is running at ${PORT} || 5000`);
    } catch (err) {console.error(err)}
})