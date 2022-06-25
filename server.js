const express = require("express");
const colors  = require('colors')

const dotenv = require("dotenv"); 
const connectDB = require ('./config/db')

dotenv.config({ path: "./config/config.env" });



const bootcamp = require ('./routes/routes')

connectDB()

const app = express();
app.use(express.json())
app.use('/api/v1/bootcamp', bootcamp)

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `server is up and runnning in  ${process.env.NODE_ENV} mode on port${PORT} `.yellow.bold
  )
);
