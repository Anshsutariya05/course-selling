const express = require("express");
const mongoose = require("monogoose");
const dotenv = require("dotenv");


const app = express();

app.use(express.json());




app.listen(3000);