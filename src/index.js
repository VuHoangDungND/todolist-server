const express = require('express');
const app = express();
const cors = require('cors');
const route = require('./routes');
require('dotenv').config();
const port = 5000;

app.use(cors());
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
