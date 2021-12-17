import mongoose from 'mongoose'

import User from './User'
import Item from './itemSchema'

const dbURL = require('../config/keys').mongoURI

const connectDB = () => {
    console.log("Database url: " + dbURL.slice(10, 20) + '...')
    return mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
}

const models = { User, Item }

export { connectDB }

export default models