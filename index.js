// App initialization
require('dotenv').config({path:'./config.env'})
const path = require('path');
const express = require('express');
const app = express();

const db = require('./database');

db();

// Import and init routes
const transit_routes = require('./transit_routes_router/index');

app.use(express.static(path.join(__dirname,'/public')))

app.use('/api/v1/transit-routes', transit_routes)

// Serve landing page
app.get('/', (req, res) => res.render('index'))

app.listen(process.env.PORT)

// Obligatory console log
console.log(`Listening on port: ${process.env.PORT}`)