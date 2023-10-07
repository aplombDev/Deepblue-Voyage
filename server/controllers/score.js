const Score = require('../models/Score')

/* CREATE */
exports.updateLeaderboard = async (req, res) => {
    try {
        const { name, score } = req.body

        const newScore = new Score({
            name: name,
            score: score,
        })

        await newScore.save()
        res.status(201).json({ newScore ,message: 'Leaderboard Updated' })
    }
    catch(err) {
        res.status(500).json({ message: err.message })
    }
}

/* READ */
exports.findAllScoresDesc = async (req, res) => {
    try {
        const scores = await Score.find().sort({ score: -1 }).exec()
        res.status(200).json({ scores })
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}
