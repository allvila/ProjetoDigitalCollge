<<<<<<< HEAD
🚀 Sobre o Projeto

O projeto está dividido em duas partes principais:

BackEnd: Uma API RESTful robusta construída com Spring Boot.

FrontEnd: Uma interface de usuário moderna e reativa construída com React.

🛠️ Tecnologias Utilizadas
Esta é a stack de tecnologias usada na construção do projeto:

Backend

Frontend

Banco de Dados

☕ Java 17

⚛️ React 18

🗄️ MySQL 8.0

🍃 Spring Boot 3

🌐 React Router

🔒 Spring Security

🎨 CSS Puro

🗃️ Spring Data JPA (Hibernate)

🔑 JSON Web Token (JWT)

📦 Gradle


Exportar para as Planilhas
📋 Pré-requisitos
Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

JDK (Java Development Kit) - v17 ou superior

Node.js - v18 ou superior (inclui o npm)

MySQL Server - v8.0 ou superior

Um cliente de banco de dados, como MySQL Workbench ou DBeaver.

⚙️ Configuração do Ambiente
Siga estes passos para preparar seu ambiente local.

1. Backend (Java)
Crie o Banco de Dados:
No seu MySQL Workbench, execute o seguinte comando para criar o schema da aplicação:

SQL

CREATE DATABASE digital_store;
Configure as Credenciais:
Abra o arquivo BackEnd/src/main/resources/application.properties e atualize as credenciais do seu banco de dados, se necessário.

⚠️ Importante: Altere spring.datasource.username e spring.datasource.password para corresponder à sua configuração local do MySQL.

2. Frontend (React)
Instale as Dependências:
Navegue até a pasta do frontend e instale os pacotes necessários.

Bash

cd FrontEnd
npm install
▶️ Executando o Projeto
Para rodar a aplicação, você precisará de dois terminais abertos: um para o backend e outro para o frontend.

1. Iniciar o Backend
No primeiro terminal, navegue até a pasta do backend e execute:

Bash

# Navegue até a pasta do backend
cd BackEnd

# Inicie o servidor Spring Boot
./gradlew bootRun
✅ O backend estará rodando em http://localhost:8080.

2. Iniciar o Frontend
No segundo terminal, navegue até a pasta do frontend e execute:

Bash

# Navegue até a pasta do frontend (se não estiver nela)
cd FrontEnd

# Inicie o servidor de desenvolvimento do React
npm start
✅ A aplicação estará disponível no seu navegador em http://localhost:3000.

🔌 Endpoints da API
A API de autenticação oferece os seguintes endpoints públicos:

POST /api/auth/register
Cria uma nova conta de usuário.

Corpo da Requisição:

JSON

{
  "email": "teste@exemplo.com",
  "password": "senha123"
}
Resposta de Sucesso (200 OK):

JSON

"Usuário registrado com sucesso!"
POST /api/auth/login
Autentica um usuário e retorna um token JWT.

Corpo da Requisição:

JSON

{
  "email": "teste@exemplo.com",
  "password": "senha123"
}
Resposta de Sucesso (200 OK):

JSON

{
  "accessToken": "eyJhbGciOiJIUzUxMiJ9...",
  "tokenType": "Bearer"
}
📂 Estrutura de Pastas
digital-store/
├── 📁 BackEnd/      # Código-fonte do projeto Spring Boot
└── 📁 FrontEnd/     # Código-fonte do projeto React
└── 📄 README.md     # Este arquivo

Feito com ❤️ 
=======


