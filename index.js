const express=require("express")
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const vendorRoutes=require('./routes/vendorRoutes')
const bodyParser=require('body-parser')
const firmRoutes=require('./routes/firmRoutes')
const productRoutes=require('./routes/productRoutes')

const app=express();

const PORT=process.env.PORT || 4000;
dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("mongodb is connected successfully")
}).catch((error)=>{
    console.log(error)
})
app.use(bodyParser.json())
app.use('/vendor',vendorRoutes);
app.use('/firm',firmRoutes)
app.use('/product',productRoutes);
app.use('/uploads',express.static('uploads'))
app.listen(PORT,()=>{
    console.log("port is running on port 4000");
})

app.use('/',(req,res)=>{
    res.send("<h1>hi Venkatesh</h1>")
    res.send("<h1>welcome to SUBY </h1>")
})