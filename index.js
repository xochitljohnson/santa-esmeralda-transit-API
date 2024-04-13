// App initialization
const express = require('express');
const app = express();

const transit_routes = require('./transit_routes_router/index')

const PORT = 3000;

app.use('/routes', transit_routes)

app.get('/', (req, res) => res.send('Hello world')).listen(PORT)

console.log(`Listening on port: ${PORT}`)