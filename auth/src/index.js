const express = require('express');
const mongoose = require('mongoose');
const app = express();
const { port, host, dbPath } = require('./config');


// start server and listen port
const startServer = () => {
    app.listen(port, async () => {
        console.log(`start express auth on port: ${port} and host: ${host}`);
        console.log(`mongo dbPath: ${dbPath}`);
        console.log('auth test');
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
    return res.send('test route response service auth')
});

startMongo(dbPath)
    .then(() => startServer())
    .catch(err => console.log(err.message));