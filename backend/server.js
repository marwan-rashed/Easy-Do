import express from 'express';
import Mongoose from 'mongoose';
import { PORT, databaseURL } from './config.js'

const app = express()

app.use(express.json());

app.get(
    '/',
    (req, res) => {
        res.json('Server running peacefully on port ' + PORT + ' ...');
    }
);

Mongoose
    .connect(databaseURL + '/easy-do')
    .then(() => console.log('Connected to MongoDB Successfully.'))
    .catch((err) => console.log(err));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT} ...`);
});

export default app;