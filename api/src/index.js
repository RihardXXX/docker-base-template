const express = require('express');
const app = express();

app.get('/test', (req, res) => {
    return res.send('test route response')
});

app.listen(3000, () => {
    console.log('start express api')
});