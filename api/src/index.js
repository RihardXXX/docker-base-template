const express = require('express');
const mongoose = require('mongoose');
const app = express();
const { port, host, dbPath } = require('./config');

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
        const post = new Post({ title: 'richard' });
        await post.save(); 
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

startMongo(dbPath)
    .then(() => startServer())
    .catch(err => console.log(err.message));