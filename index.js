const express= require('express');
const server=express();
const mongoose = require('mongoose');
const { createProduct } = require('./controller/Product');
const productsRouters = require('./routes/Products');
const categoriesRouter = require('./routes/Categories');
const brandsRouter = require('./routes/Brands');
const cors = require('cors')

//middlewares

server.use(cors({
    exposedHeaders:['X-Total-Count']
}))
server.use(express.json());
server.use('/products',productsRouters.router)
server.use('/categories', categoriesRouter.router)
server.use('/brands', brandsRouter.router)

const connectDB= async()=>{
    await mongoose.connect(`mongodb+srv://Nitish:tfs6430reLXhNrqK@cluster0.vdeembr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)

    console.log('db connected')
}

connectDB()

server.get('/',(req,res)=>{
    res.json({status:'success'})
})

server.listen(8080,()=>{
    console.log('server is running on port 8080');
})