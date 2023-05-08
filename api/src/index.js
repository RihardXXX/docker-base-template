const express = require('express');
const mongoose = require('mongoose');
const app = express();
const axios = require('axios'); // legacy way
const { port, host, dbPath, authUrl } = require('./config');

// test db Mongo

const post = new mongoose.Schema({
    title: String, // String is shorthand for {type: String}
});

const Post = mongoose.model('Blog', post);

// start server and listen port
const startServer = () => {
    app.listen(port, async () => {
        console.log(`start express api on port: ${port} and host: ${host}`);
        console.log(`mongo dbPath: ${dbPath}`);

        // test bd Mongo
        // const post = new Post({ title: 'richard' });
        // await post.save(); 
        const result = await Post.find({});
        console.log('result: ', result);
        console.log('nodemon refresh 123');
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
    return res.send('test route response')
});

// get article if user
app.get('/articles', (req, res) => {
    console.log('authUrl', authUrl);
    axios.get(`${authUrl}/user`)
        .then(function (response) {
            // handle success
            // console.log(response);
            res.json({
                data: 123,
                user: response.data,
            });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
})

// likes
app.get('/likes', (req, res) => {
    res.json({
        likes: 999
    });
});

startMongo(dbPath)
    .then(() => startServer())
    .catch(err => console.log(err.message));