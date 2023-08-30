const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const DB = 'mongodb+srv://saurabhS:saurabhS@cluster0.gbotrrm.mongodb.net/jwtauth?retryWrites=true&w=majority'

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => { console.log('connection successful') }).catch((err) => { console.log(err) });

app.get('/', (req, res) => { res.send('Hello World!') });

app.listen(port, () => { console.log(`Example app listening at http://localhost:${port}`) });