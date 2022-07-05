import express from "express";
import mongoose from 'mongoose';
import data from './information.js'
//const data = require("./information");
import dotenv from 'dotenv'
import seedRouter  from "./seedRoutes.js";
import productRouter from "./productRouter.js";
const app = express();
dotenv.config();
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log('connection successful')
}).catch((err)=>{
        console.log('no connection');
     })
// const DB ='mongodb+srv://ali_123_321:@Sdqwe123@cluster0.qtnes.mongodb.net/ecomerece?retryWrites=true&w=majority'
// console.log('sgja');
// mongoose.connect(DB,{
//     useNewUrlParser:true,
//     useCreateIIndex:true,
//     useUnifiedTopology:true,
//     useFindAndModify:false,


// }
//     ).then(()=>{
//     console.log ('connection successful');
// }).catch((err)=>{
//     console.log('no connection');
// })

app.use('/api/seed/', seedRouter);
app.use('/api/products/', productRouter);
app.get('/api/products', (req, res) => {

   res.send(data.products)
});

app.get('/api/category', (req, res) => {

    res.send(data.category)
 });
 app.get('/api/products/id/:_id', (req, res) => {
const product = data.products.find((x) => x._id===req.params._id);
if(product){
    res.send(product)
}
else{
    res.status(400);
}
  
 });


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
})