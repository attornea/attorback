const env = require("dotenv").config();
const express = require("express");
const fs = require("fs");
const app = express();
const http = require("https");
const mongoose = require('mongoose');
const { v4: uuidv4 } = require("uuid");
const AccessToken = require("twilio").jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;
const session = require('express-session');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const config = require('./config')
// const server = http.createServer
const morgan = require("morgan");
const bodyParser = require("body-parser");
// const https = require('https');
// const fs = require('fs');
// const app = require('./app');

//Required Routes
const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");
const lawyerRoutes = require('./routes/lawyerRoutes');
const productRoutes = require('./routes/productRoutes');
const blawgRoutes = require("./routes/blawgRoutes");
const imageRoutes = require("./routes/Image");
const appointmentRoutes = require("./routes/appointmentRoutes");
const messageRoutes = require('./routes/messageRoutes');
const facebookRoutes = require('./routes/LoginWithFacebookRoutes')
const options = {
    key: fs.existsSync(process.env.SSL_KEY) ? fs.readFileSync(process.env.SSL_KEY) : null,
    cert: fs.existsSync(process.env.SSL_CRT) ? fs.readFileSync(process.env.SSL_CRT) : null,
};

const server = process.env.MODE == "DEV" ? https.createServer(app) : http.createServer(options, app);
// const server = process.env.MODE == "DEV" ? https.createServer(app) : https.createServer(options, app);

// const url = 'mongodb+srv://nikita:Restart987@test.yxvwr.mongodb.net/test';
const url = 'mongodb+srv://zeeshan:Attornea@attornea.1s7ub.mongodb.net/test';


// const url = "mongodb://localhost:27017/attor";
mongoose.connect(url, { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('Connection Successful');
    } else {
        console.log('Connection not successful', err);
    }
});
mongoose.Promise = global.Promise;
//

app.set('view engine', 'ejs');
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: '2082bb9df8a7634366193bcb56a24d22'
}));


// Middlewears 
app.use(express.json());
app.use(express.static("public"));

// app.use('/peerjs', peer);
app.use(morgan("dev"));
app.use('/Uploads', express.static('Uploads'));
app.use('/Assets', express.static('Assets'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization, Content-Type, Signature"
    );

    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});
app.use("/admin", adminRoutes);
app.use("/user", userRoutes);
app.use("/lawyer", lawyerRoutes)
app.use("/products", productRoutes);
app.use("/blawgs", blawgRoutes);
app.use("/image", imageRoutes);
// app.use('/appointment', appointmentRoutes)
app.use('/message', messageRoutes);
app.use('/facebook', facebookRoutes)

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});
// app.use(passport.initialize());
// app.use(passport.session());

// passport.serializeUser(function (user, cb) {
//     cb(null, user);
// });

// passport.deserializeUser(function (obj, cb) {
//     cb(null, obj);
// });

// passport.use(new FacebookStrategy({
//     clientID: config.facebookAuth.clientID,
//     clientSecret: config.facebookAuth.clientSecret,
//     callbackURL: config.facebookAuth.callbackURL
// }, function (accessToken, refreshToken, profile, done) {
//     console.log(profile);
//     return done(null, profile);
// }
// ));


app.listen(process.env.PORT || 3000);
module.exports = app;