const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Replace with your actual MongoDB String in the .env file
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected Successfully"))
  .catch(err => console.error("DB Connection Error:", err));

app.listen(5000, () => console.log("Server running on port 5000"));