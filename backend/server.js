const express=require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect('mongodb://localhost:27017/employeedb').then( () => console.log("Connected"));


app.use(cors ({
    origin : '*',
}))



app.use(bodyParser.json())

const PORT = 9000
app.listen(PORT,()=>{
    console.log('Server running on',PORT);
})