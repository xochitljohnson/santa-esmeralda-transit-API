// App initialization
const PORT = 3000;
const express = require('express');
const app = express();

// Import and init routes
const transit_routes = require('./transit_routes_router/index')

app.use('/routes', transit_routes)

// Serve landing page
app.get('/', (req, res) => res.render('index', {}))

app.listen(PORT)

// Obligatory console log
console.log(`Listening on port: ${PORT}`)