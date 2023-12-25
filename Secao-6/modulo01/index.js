const express = require('express')

const server = express();

// Query params = ?nome=NodeJS
// Route Params = /curso/2
// Request Body = { nome: 'NodeJS', tipo: 'Backend' }

// localhost:3000/curso
server.get('/curso/:id', (req, res) => {
/*     const nome = req.query.nome; */    
const id = req.params.id;


    return res.json({curso: /* `Aprendendo ${nome}` */` Curso ${id}`});
})

server.listen(3000);
