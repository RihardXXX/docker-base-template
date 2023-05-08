const express = require('express');
const mongoose = require('mongoose');
const app = express();
const axios = require('axios'); // legacy way
const { port, host, dbPath, apiUrl } = require('./config');


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

// get user data
app.get('/user', (req, res) => {
    res.json({
        id: 'xx123',
        name: 'Roman',
        age: 37,
    })
})

// with api data
app.get('/with-api-data', (req, res) => {
    // console.log('apiUrl', apiUrl);
    axios.get(`${apiUrl}/likes`)
        .then(function (response) {
            // handle success
            // console.log(response);
            res.json({
                authAndApi: response.data,
                test: 'xxx'
            });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
});

startMongo(dbPath)
    .then(() => startServer())
    .catch(err => console.log(err.message));