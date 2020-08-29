const http = require('http');

const server = http.createServer((req,res) => {
	res.end("Respuesta a la solicitud v2.0...")
});


const puerto = 3000;

server.listen(puerto, () => {
	console.log('escuchando las solicitudes integrado con nodemon...')
});	

