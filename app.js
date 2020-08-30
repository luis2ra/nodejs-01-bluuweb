// Modelo de servidor generado con express
const express = require('express');
const app = express();

const port = 3000;

// La posición de esta línea prevalece sobre
// las setencias que le siguen
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) =>{
    res.send('Respuesta ejecutada desde express.js')
});

// Definiendo otra ruta para el servidor
app.get('/servicios', (req, res) => {
    res.send('se invova la página de servicios')
});

// app.use(express.static(__dirname + '/public'));

// Según, se define un middleware para cualquier solicitud de ruta
// que no esté definida en el proyecto
app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + '/public/404.html')
});

app.listen(port, () => {
    console.log('servidor ejecutándose en el puerto', port)
});