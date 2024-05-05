const express=require('express')
const mongoose = require('mongoose')
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');

const app = express();



const employeeRoutes = require('./routes/EmplooyeeRoutes')
//const adminRoutes = require('./routes/AdminRoutes')


app.use(cors());



app.use(bodyParser.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api',employeeRoutes);
//app.use('/api',adminRoutes);


mongoose.connect(process.env.MONGODB_URI)
.then( () => console.log("Connected"))
.catch((err) => console.log(err));


app.listen(process.env.PORT,()=>{
    console.log('Server running on',process.env.PORT);
})