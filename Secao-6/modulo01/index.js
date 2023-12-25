const express = require('express')

const server = express();

server.use(express.json());
// Query params = ?nome=NodeJS
// Route Params = /curso/2
// Request Body = { nome: 'NodeJS', tipo: 'Backend' }

// localhost:3000/cursos

const cursos = ['Node JS', 'JavaScript', 'React Native'];

//Middleware Global
server.use((req, res, next) => {
    console.log(`URL CHAMADA: ${req.url}`);
    
    return next();
});

function checkCurso(req, res, next) {
    if(!req.body.nome) {
        return res.status(400).json({ error: "Nome do curso é obrigatório!"});
    }
    
    return next();
}

function checkIndexCurso(req, res, next) {
    const curso = cursos[req.params.index];

    if(!curso) {
        return res.status(400).json({ error: "Curso não encontrado!"});
    }

    req.curso = curso;
    
    return next();
}

server.get('/cursos', (req, res) => {
    return res.json(cursos);
    
});

server.get('/cursos/:index', checkIndexCurso, (req, res) => {

    return res.json(req.curso);
})

server.post('/cursos', checkCurso, (req, res) => {
    const { nome } = req.body;
    cursos.push(nome);

    return res.json(cursos);
});

server.put('/cursos/:index', checkCurso, checkIndexCurso, (req, res) => { 
    const { index } = req.params;
    const { nome } = req.body;
    
    cursos[index] = nome;
    
    return res.json(cursos);
});

server.delete('/cursos/:index', checkIndexCurso, (req, res) => {
    const { index } = req.params;
    
    cursos.splice(index, 1);
    
    return res.json({message: "Curso deletado com sucesso!"});
});

server.listen(3000);
