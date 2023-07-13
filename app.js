const express = require('express')
const logger = require('morgan')
const cors = require('cors')
require("dotenv").config();
const herbicidesRouter = require('./routes/api/plantsProtect/herbicides')
const fungicidesRouter = require('./routes/api/plantsProtect/fungicides')
const app = express()
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use("/api/plantsProtect/herbicides", herbicidesRouter);
app.use("/api/plantsProtect/fungicides", fungicidesRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

// Це фунція обробник помилок
app.use((err, req, res, next) => {
  const {status = 500, message = 'server error'} = err
  res.status(status).json({ message });
})

module.exports = app
// nd1LNGczRYqdbMZq
