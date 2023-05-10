const express = require('express');
const mongoose = require('mongoose');
const app = express();
const { port, dbPath, login, password } = require('./config');


// start server and listen port
const startServer = () => {
    app.listen(port, async () => {
        console.log(`start express mailer on port: ${port}`);
        console.log(`mongo dbPath: ${dbPath}`);
        console.log('mailer test 123 xxx');
        console.log(`login ${login}`);
        console.log(`password ${password}`);
    });
}

// start mongo db
async function startMongo(dbPath='') {
    if (!dbPath) {
        throw new Error(`dbPath === [${dbPath}] is not path, error startMongo function`);
    }
    await mongoose.connect(dbPath);
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// url paths for express server
app.get('/test', (req, res) => {
    return res.send('mailer test')
});


startMongo(dbPath)
    .then(() => startServer())
    .catch(err => console.log(err.message));