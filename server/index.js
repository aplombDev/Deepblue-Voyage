require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const leaderboardRouter = require('./routes/score.js')

/* EXPRESS SERVER  */
const server = express()

/* DB CONNECTION TO MONGO ATLAS */
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Database Connected')
  })
  .catch((err) => {
    console.log(err)
  })

/* BODY PARSERS */
server.use(express.json())

/* ROUTES */
server.use(cors())
server.use('/leaderboard', leaderboardRouter.router)

/* SERVER LISTEN */
server.listen(process.env.SERVER_PORT, () => {
  console.log('Server Started')
})
