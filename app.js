const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('hi this is govardhan deploying code in aws beanstalk'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
