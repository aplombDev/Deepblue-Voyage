const mongoose = require('mongoose')
const { Schema } = mongoose

const scoreSchema = new Schema({
    name:{
        type: String, 
        required: true,
    },
    score: {
        type: Number,
        required: true,
        default: 0,
    },
},
    { timestamps: true },
)

const Score = mongoose.model('Score', scoreSchema)


module.exports = Score