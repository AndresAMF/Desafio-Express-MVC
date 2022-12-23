const express = require('express');
const app = express();

const indexRoutes = require('./routes/indexRoutes');

app.use(express.static(__dirname + './public'));
app.use(express.json())

app.use('/', indexRoutes); 

app.use('*', function(req, res) {
    res.send("Error. Intente nuevamente con otra ruta.");
});

app.listen(3000, console.log("¡Servidor encendido!"))
