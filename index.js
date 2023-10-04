// Importando o módulo 'express' para criar a aplicação do servidor web.
const express = require('express');
// Criando uma instância do servidor Express.
const server = express();
// Definindo a porta em que o servidor irá escutar.
const port = 3000;

// Habilitando o middleware 'express.json()' para analisar JSON no corpo das solicitações.
server.use(express.json());

// Lista de cursos como exemplo de dados por numeração: 0 - FullStack Master, 1 - Desenvolvimento de Games, 2 - Front-End VueJS
const cursos = ['FullStack Master', 'Desenvolvimento de Games', 'Front-End VueJS'];

// Definindo uma rota para retornar um curso com base em seu índice na lista.
server.get('/cursos/:index', (req, res) => {
    const { index } = req.params;

    // Verificando se o índice está dentro dos limites da lista de cursos.
    if (index >= 0 && index < cursos.length) {
        // Se o índice for válido, retornar o curso correspondente em formato JSON.
        return res.json(cursos[index]);
    } else {
        // Se o índice estiver fora dos limites, retornar uma resposta de erro 404 com uma mensagem.
        return res.status(404).json({ message: 'Curso não encontrado' });
    }
});

// Definindo uma rota para retornar todos os cursos.
server.get('/cursos', (req, res) => {
    // Retornando a lista completa de cursos em formato JSON.
    return res.json(cursos);
});

// Definindo uma rota para criar um novo curso usando uma solicitação POST.
server.post('/cursos', (req, res) => {
    const { name } = req.body;

    // Verificando se o campo 'name' no corpo da solicitação está presente e não é vazio.
    if (name) {
        // Se o nome for válido, adicionar o novo curso à lista de cursos.
        cursos.push(name);
        // Retornando a lista atualizada de cursos em formato JSON e um código de status 201 (Created).
        return res.status(201).json(cursos);
    } else {
        // Se o nome não for válido, retornar uma resposta de erro 400 (Bad Request) com uma mensagem.
        return res.status(400).json({ message: 'Nome do curso é obrigatório' });
    }
});

// Definindo uma rota para atualizar um curso com base em seu índice na lista usando uma solicitação PUT.
server.put('/cursos/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    // Verificando se o índice é válido e se um novo nome foi fornecido.
    if (index >= 0 && index < cursos.length && name) {
        // Se os dados forem válidos, atualizar o curso correspondente na lista de cursos.
        cursos[index] = name;
        // Retornando a lista atualizada de cursos em formato JSON.
        return res.json(cursos);
    } else {
        // Se os dados não forem válidos, retornar uma resposta de erro 400 (Bad Request) com uma mensagem.
        return res.status(400).json({ message: 'Índice ou nome do curso inválidos' });
    }
});

// Definindo uma rota para excluir um curso com base em seu índice na lista usando uma solicitação DELETE.
server.delete('/cursos/:index', (req, res) => {
    const { index } = req.params;

    // Verificando se o índice é válido.
    if (index >= 0 && index < cursos.length) {
        // Se o índice for válido, excluir o curso correspondente da lista de cursos.
        cursos.splice(index, 1);
        // Retornando uma mensagem de sucesso em formato JSON.
        return res.json({ message: 'O curso foi deletado com sucesso!' });
    } else {
        // Se o índice não for válido, retornar uma resposta de erro 404 (Not Found) com uma mensagem.
        return res.status(404).json({ message: 'Curso não encontrado' });
    }
});

// Iniciando o servidor na porta especificada e exibindo uma mensagem de confirmação no console.
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
