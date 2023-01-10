const mongoose = require('mongoose')

const connectToDb = (connectionString) => {
    mongoose.set('strictQuery', false)
    mongoose.connect(connectionString)
}

module.exports = connectToDb