# Dynacademy Clean Architecture Example

Este repositório demonstra uma arquitetura limpa (Clean Architecture) em Node.js com TypeScript, Express e exemplos de domínio para usuários e produtos. O projeto é focado em boas práticas de separação de camadas, testes de payloads e simulação de operações CRUD completas.

---

## Sumário
- [Visão Geral](#visão-geral)
- [Arquitetura e Organização](#arquitetura-e-organização)
- [Funcionalidades](#funcionalidades)
- [Como rodar o projeto](#como-rodar-o-projeto)
- [APIs e exemplos de uso](#apis-e-exemplos-de-uso)
- [Testes de payloads e erros](#testes-de-payloads-e-erros)
- [Domínios implementados](#domínios-implementados)
- [Extensões e melhorias](#extensões-e-melhorias)

---

## Visão Geral

- Projeto de exemplo para estudo de Clean Architecture.
- Implementação de CRUD completo para Usuários e Produtos.
- Simulação de múltiplos repositórios (em memória, arquivo JSON, MongoDB - stub).
- Testes de payloads válidos e inválidos via arquivo `.http`.

## Arquitetura e Organização

- `src/`
  - `app.ts` e `server.ts`: bootstrap da aplicação Express.
  - `domains/`
    - `user-v1/`: domínio de usuários (camadas adapters e core)
    - `product-v1/`: domínio de produtos (camadas adapters e core)
- Separação de camadas:
  - **Adapters:** controladores, rotas, repositórios de dados
  - **Core:** entidades, casos de uso, interfaces
- Arquitetura extensível: fácil adicionar novos domínios ou trocar persistência

## Funcionalidades

- CRUD completo de Usuários:
  - Listar, buscar por ID, criar, atualizar, deletar
  - Validação de payloads e regras de negócio
  - Suporte a múltiplos repositórios (arquivo, memória, MongoDB stub)
- CRUD de Produtos (exemplo simplificado)
- Testes de todos os fluxos via arquivo `requests/user.http`

## Como rodar o projeto

```bash
# Instale as dependências
npm install

# Rode em modo desenvolvimento (TypeScript direto)
npm run dev

# Para buildar e rodar em produção:
npm run build
npm start
```

A API estará disponível em: http://localhost:3000

## APIs e exemplos de uso

### Usuários
- **Listar todos:**
  ```http
  GET http://localhost:3000/v1/users
  ```
- **Buscar por ID:**
  ```http
  GET http://localhost:3000/v1/users/{userId}
  ```
- **Criar usuário:**
  ```http
  POST http://localhost:3000/v1/users
  Content-Type: application/json
  {
    "creatorRole": "admin",
    "userData": {
      "name": "Usuário Teste",
      "email": "teste@exemplo.com"
    }
  }
  ```
- **Atualizar usuário:**
  ```http
  PUT http://localhost:3000/v1/users/{userId}
  Content-Type: application/json
  {
    "creatorRole": "admin",
    "userData": {
      "name": "Usuário Atualizado",
      "email": "atualizado@exemplo.com"
    }
  }
  ```
- **Deletar usuário:**
  ```http
  DELETE http://localhost:3000/v1/users/{userId}
  ```

### Produtos
- **Listar produtos:**
  ```http
  GET http://localhost:3000/v1/products
  ```
- **Criar produto:**
  ```http
  POST http://localhost:3000/v1/products
  Content-Type: application/json
  {
    "name": "Produto Teste",
    "description": "Descrição do produto",
    "price": 99.99
  }
  ```

## Testes de payloads e erros

Utilize o arquivo [`requests/user.http`](./requests/user.http) para testar todos os cenários de sucesso e erro das APIs de usuário, incluindo:
- Payloads inválidos (sem campos obrigatórios, creatorRole errado, etc)
- Operações com IDs inexistentes ou malformados
- Testes de validação e segurança

## Domínios implementados

### Usuários (`user-v1`)
- Entidade: `UserV1Entity` (camada core)
- Casos de uso: criação, busca, update, delete
- Repositórios:
  - `JsonFileUsersV1DatabaseRepository` (persistência em arquivo)
  - `InMemoryUsersV1DatabaseRepository` (persistência em memória)
  - `MongoDbUsersV1DatabaseRepository` (stub para extensão futura)
- Controller: `V1UsersController` (rotas REST)
- Validações:
  - `creatorRole` obrigatório e deve ser `admin` para criar/alterar
  - Campos obrigatórios: `name`, `email`

### Produtos (`product-v1`)
- Entidade: `Product`
- CRUD simplificado com repositório em memória
- Rotas REST para listar e criar produtos

## Extensões e melhorias possíveis
- Implementar persistência real em MongoDB
- Adicionar autenticação e autorização
- Adicionar testes automatizados
- Melhorar tratamento de erros e mensagens
- Adicionar documentação OpenAPI/Swagger

---

## Contato
Projeto de exemplo para estudos. Para dúvidas ou sugestões, abra uma issue ou envie um PR!
