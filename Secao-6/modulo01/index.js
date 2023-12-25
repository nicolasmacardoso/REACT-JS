const express = require('express')

const server = express();

server.use(express.json());
// Query params = ?nome=NodeJS
// Route Params = /curso/2
// Request Body = { nome: 'NodeJS', tipo: 'Backend' }

// localhost:3000/cursos

const cursos = ['Node JS', 'JavaScript', 'React Native'];

server.get('/cursos', (req, res) => {
    return res.json(cursos);
});

server.get('/cursos/:index', (req, res) => {
    const { index } = req.params;

    return res.json(cursos[index]);
})

server.post('/cursos', (req, res) => {
    const { nome } = req.body;

    cursos.push(nome);

    return res.json(cursos);
});

server.put('/cursos/:index', (req, res) => { 
    const { index } = req.params;
    const { nome } = req.body;
    
    cursos[index] = nome;
    
    return res.json(cursos);
});

server.delete('/cursos/:index', (req, res) => {
    const { index } = req.params;
    
    cursos.splice(index, 1);
    
    return res.json({message: "Curso deletado com sucesso!"});
});

server.listen(3000);
