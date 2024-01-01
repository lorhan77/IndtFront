# Documentação Técnica do Frontend

## Introdução

Esta documentação fornece informações detalhadas sobre o Frontend da aplicação de gerenciamento de usuários. Foi desenvolvida com React.js e permite a realização de operações CRUD (Create, Read, Update, Delete) relacionadas aos usuários.

### Execução Local

Para executar localmente, siga os passos abaixo:


1. Abra o arquivo `Front`.
2. Abra um terminal
3. Digite o seguinte comando no terminal `npm i ` para instalar as dependências do projeto com o próprio React, Axios e Tailwind.
4. Execute o comando `npm start`.
5. Acesse a aplicação em [http://localhost:3000].

## Endpoints

### 1. Listar Todos os Usuários

- **Método HTTP:** GET
- **Rota:** `/usuarios`
- **Descrição:** Retorna a lista de todos os usuários.
- **Resposta de Exemplo:**
```json
[
  {
    "Id": 1,
    "Nome": "John",
    "Sobrenome": "Doe",
    "Email": "john.doe@example.com",
    "Senha": "hashed_password",
    "NivelDeAcesso": administrador | comum
  },
  // ...
]
```

### 2. Obter Usuário por ID

- **Método HTTP:** GET
- **Rota:** `/usuarios/{id}`
- **Descrição:** Retorna os detalhes de um usuário específico.
- **Resposta de Exemplo:**
```json
{
  "Id": 1,
  "Nome": "John",
  "Sobrenome": "Doe",
  "Email": "john.doe@example.com",
  "Senha": "hashed_password",
  "NivelDeAcesso": administrador | comum
}
```

### 3. Criar Usuário

- **Método HTTP:** POST
- **Rota:** `/usuarios`
- **Descrição:** Cria um novo usuário.
- **Corpo da Requisição (Exemplo):**
```json
{
  "Nome": "Jane",
  "Sobrenome": "Doe",
  "Email": "jane.doe@example.com",
  "Senha": "hashed_password",
  "NivelDeAcesso": administrador | comum
}
```
- **Resposta de Exemplo:**
```json
{
  "Id": 2,
  "Nome": "Jane",
  "Sobrenome": "Doe",
  "Email": "jane.doe@example.com",
  "Senha": "hashed_password",
  "NivelDeAcesso": administrador | comum
}
```

### 4. Atualizar Usuário por ID

- **Método HTTP:** PUT
- **Rota:** `/usuarios/{id}`
- **Descrição:** Atualiza os detalhes de um usuário existente.
- **Corpo da Requisição (Exemplo):**
```json
{
  "Nome": "Updated",
  "Sobrenome": "User",
  "Email": "updated.user@example.com",
  "Senha": "new_hashed_password",
  "NivelDeAcesso": administrador | comum
}
```
- **Resposta de Sucesso:** 204 No Content

### 5. Excluir Usuário por ID

- **Método HTTP:** DELETE
- **Rota:** `/usuarios/{id}`
- **Descrição:** Exclui um usuário por ID.
- **Resposta de Sucesso:**
```json
{
  "Id": 2,
  "Nome": "Jane",
  "Sobrenome": "Doe",
  "Email": "jane.doe@example.com",
  "Senha": "hashed_password",
  "NivelDeAcesso": administrador | comum
}
```

## Exemplos de Uso

A seguir estão alguns exemplos de como utilizar os endpoints da API.

### Listar Todos os Usuários

```bash
curl https://localhost:3000/usuarios
```

### Obter Usuário por ID

```bash
curl https://localhost:3000/usuarios/1
```

### Criar Usuário

```bash
curl -X POST -H "Content-Type: application/json" -d '{"Nome": "Jane", "Sobrenome": "Doe", "Email": "jane.doe@example.com", "Senha": "hashed_password", "NivelDeAcesso": administrador | comum}' https://localhost:3000/usuarios
```

### Atualizar Usuário por ID

```bash
curl -X PUT -H "Content-Type: application/json" -d '{"Nome": "Updated", "Sobrenome": "User", "Email": "updated.user@example.com", "Senha": "new_hashed_password", "NivelDeAcesso": administrador | comum}' https://localhost:3000/usuarios/2
```

### Excluir Usuário por ID

```bash
curl -X DELETE https://localhost:3000/usuarios/2
```

## Referências

- [.NET Core Documentation](https://docs.microsoft.com/en-us/dotnet/)
- [Microsoft.AspNetCore.Mvc Namespace](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc)
