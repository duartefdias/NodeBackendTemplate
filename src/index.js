// Import environment variable and sensitive data from ../.env
// Import this before other files for them to access these variables
import 'dotenv/config'
// Allow cross-origin request
import cors from 'cors'
// Other imports
import express from 'express'
import routes from './routes'
import { connectDB } from './models'
import bodyParser from 'body-parser';
import passport from 'passport'

const app = express()

// Use the passport Middleware
app.use(passport.initialize());
// Bring in the Passport Strategy
require('./config/passport.js')(passport);

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/testing', routes.testing)
app.use('/items', routes.items)
app.use('/users', routes.users)


connectDB().then(async () => {
    console.log("Connected to Database")
    app.listen(process.env.PORT, () =>
        console.log('App running on port ' + process.env.PORT)
    )
})