// Modelo de servidor generado con express
const express = require('express');
const app = express();

const port = 3000;

// Motor de Plantillas EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) =>{
    res.render('index', { titulo: "Mi titulo dinámico..."})
});

app.get('/servicios', (req, res) => {
    res.render('servicios', { tituloServicios: "Mi nombre del Servicio dinámico"  })
});

app.use((req, res, next) => {
    res.status(404).render('404', {
		titulo: "404",
		description: "Descripcion de 404"
	})
});

app.listen(port, () => {
    console.log('servidor ejecutándose en el puerto', port)
});