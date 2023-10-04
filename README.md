# CRUD em Node.js com Express

Este é um projeto de exemplo de um aplicativo CRUD (Create, Read, Update, Delete) em Node.js com Express. Ele permite criar, listar, atualizar e excluir cursos em uma lista.

## Funcionalidades

- **Listar Cursos:** Use a rota `/cursos` para listar todos os cursos existentes.
- **Visualizar Curso por Índice:** Use a rota `/cursos/:index` para visualizar um curso específico com base no índice.
- **Criar Curso:** Use a rota `/cursos` com uma solicitação POST para criar um novo curso.
- **Atualizar Curso:** Use a rota `/cursos/:index` com uma solicitação PUT para atualizar um curso existente.
- **Excluir Curso:** Use a rota `/cursos/:index` com uma solicitação DELETE para excluir um curso.

## Insomnia

[Insomnia](https://insomnia.rest/) é um framework open source para desenvolvimento e teste de API Clients. Você pode usar o Insomnia para testar as rotas deste projeto.

### Configurando o Insomnia:

1. Instale o Insomnia em [https://insomnia.rest/](https://insomnia.rest/).
2. Crie um novo ambiente ou workspace.
3. Crie solicitações GET para `/cursos` e `/cursos/:index`.
4. Crie solicitações POST, PUT e DELETE para `/cursos`.

### URL para Usar no Insomnia:

- URL Base: `http://localhost:3000`

## Créditos

Este código foi desenvolvido com base no tutorial "CRUD com NodeJS - Aprenda NodeJS na Prática" do canal "Danki Code".

## Como Executar

Para executar este projeto, siga estas etapas:

1. Instale o Node.js em [https://nodejs.org/](https://nodejs.org/).
2. Abra o terminal e navegue até o diretório do projeto.
3. Execute `npm init` para iniciar e instalar o package.json.
4. Execute `npm install` ou `npm install express` para instalar as dependências.
5. Execute `node index.js` para iniciar o servidor.

Agora você pode usar o Insomnia para testar as rotas API em `http://localhost:3000/cursos`.

Divirta-se explorando este projeto de CRUD em Node.js e Express!
