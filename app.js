const express = require('express')
const logger = require('morgan')
const cors = require('cors');
const { herbicidesRouter, fungicidesRouter, desiccantsRouter, adjuvantsRouter, insecticidesRouter, retardantsRouter, rodenticidesRouter, stainRemoversRouter } = require('./routes/api/plantsProtect');
const authRouter = require('./routes/api/auth/auth')
const basketProductsRouter = require('./routes/api/basketsProduct/basketProducts')
require("dotenv").config();
const app = express()
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use("/api/plantsProtect/herbicides", herbicidesRouter);
app.use("/api/plantsProtect/fungicides", fungicidesRouter);
app.use("/api/plantsProtect/desiccants", desiccantsRouter);
app.use("/api/plantsProtect/adjuvants", adjuvantsRouter);
app.use("/api/plantsProtect/insecticides", insecticidesRouter);
app.use("/api/plantsProtect/retardants", retardantsRouter);
app.use("/api/plantsProtect/rodenticides", rodenticidesRouter);
app.use("/api/plantsProtect/stainRemovers", stainRemoversRouter);

app.use("/api/basketProducts", basketProductsRouter)


app.use("/api/auth", authRouter)
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
