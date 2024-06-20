# Cadastro e Listagem de Produtos

Este projeto é uma aplicação web simples para o cadastro e listagem de produtos. A aplicação permite adicionar produtos com nome, descrição, valor e disponibilidade para venda. Os produtos são listados em uma tabela ordenada pelo valor, do menor para o maior.

## Funcionalidades

- Cadastro de produtos com os seguintes campos:
  - Nome do Produto
  - Descrição do Produto
  - Valor do Produto
  - Disponível para Venda (Sim/Não)
- Listagem de produtos mostrando:
  - Nome
  - Descrição
  - Valor
  - Disponível
- Ordenação dos produtos por valor (do menor para o maior)
- Alternância entre a visualização do formulário de cadastro e a listagem de produtos
- Botão para cadastrar um novo produto a partir da listagem

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript

## Estrutura do Projeto
├── index.html
├── style.css
└── script.js

### index.html

Este arquivo contém a estrutura básica da página, incluindo o formulário de cadastro e a tabela de listagem de produtos.

### style.css

Este arquivo contém a estilização da página, tornando a interface mais amigável e organizada.

### script.js

Este arquivo contém a lógica da aplicação, incluindo:

- Captura dos dados do formulário
- Armazenamento dos produtos em um array
- Ordenação dos produtos por valor
- Exibição dos produtos na tabela
- Alternância entre a visualização do formulário e da listagem

## Detalhes de Implementação

### HTML

O `index.html` define a estrutura da aplicação com duas seções principais: o formulário de cadastro e a tabela de listagem de produtos. O botão "Cadastrar Novo Produto" permite alternar entre essas seções.

### CSS

O `style.css` fornece a estilização básica para o layout da aplicação, incluindo estilos para o formulário, a tabela e os botões.

### JavaScript

O `script.js` gerencia a lógica da aplicação:
- Ao enviar o formulário, os dados do produto são capturados e adicionados a um array.
- A função `displayProducts` ordena os produtos por valor e os exibe na tabela.
- A função `toggleView` alterna entre a visualização do formulário e a listagem de produtos.

---

Feito com ❤️ por [Eduardo Dillenburg]

Link do repositório do projeto: https://github.com/EduDillen/Desafio-Oak