const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Configurar middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar conexão com o banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'senai508', // Ajuste conforme necessário
    database: 'music',
});

// Conectar ao banco de dados
db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        process.exit(1);
    } else {
        console.log('Conexão com o banco de dados bem-sucedida.');
    }
});

// Endpoint para listar músicas
app.get('/api/musicas', (req, res) => {
    const search = req.query.search || '';
    const query = `SELECT * FROM lista WHERE nome LIKE ? ORDER BY dataadd DESC`;
    db.query(query, [`%${search}%`], (err, results) => {
        if (err) {
            console.error('Erro ao buscar músicas:', err);
            res.status(500).json({ error: 'Erro ao buscar músicas no banco de dados.' });
        } else {
            res.json(results);
        }
    });
});

// Endpoint para adicionar música
app.post('/api/musicas', (req, res) => {
    const { nome, ano, genero, cantor } = req.body;

    if (!nome || !ano || !genero || !cantor) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    const query = 'INSERT INTO lista (nome, ano, genero, cantor) VALUES (?, ?, ?, ?)';
    db.query(query, [nome, ano, genero, cantor], (err) => {
        if (err) {
            console.error('Erro ao inserir música:', err);
            res.status(500).json({ error: 'Erro ao inserir música no banco de dados.' });
        } else {
            res.status(201).json({ message: 'Música cadastrada com sucesso!' });
        }
    });
});

// Endpoint para atualizar música
app.put('/api/musicas/:id', (req, res) => {
    const { id } = req.params;
    const { nome, ano, genero, cantor } = req.body;

    if (!nome || !ano || !genero || !cantor) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    const query = 'UPDATE lista SET nome = ?, ano = ?, genero = ?, cantor = ? WHERE id = ?';
    db.query(query, [nome, ano, genero, cantor, id], (err) => {
        if (err) {
            console.error('Erro ao atualizar música:', err);
            res.status(500).json({ error: 'Erro ao atualizar música no banco de dados.' });
        } else {
            res.json({ message: 'Música atualizada com sucesso!' });
        }
    });
});

// Endpoint para excluir música
app.delete('/api/musicas/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM lista WHERE id = ?';
    db.query(query, [id], (err) => {
        if (err) {
            console.error('Erro ao excluir música:', err);
            res.status(500).json({ error: 'Erro ao excluir música do banco de dados.' });
        } else {
            res.json({ message: 'Música excluída com sucesso!' });
        }
    });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
