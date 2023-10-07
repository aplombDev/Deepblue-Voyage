const express = require('express')
const router = express.Router()
const leaderboardController = require('./../controllers/score.js')

router
    .get('/', leaderboardController.findAllScoresDesc)
    .post('/', leaderboardController.updateLeaderboard)

exports.router = router