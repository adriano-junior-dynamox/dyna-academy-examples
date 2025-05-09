#### PROMPT DE NOVA ROTA NO SERVIÇO DE EXEMPLO

```markdown
Quero gerar uma nova versão da rota de produtos para esta codebase, seguindo boas práticas de arquitetura e organização. Por favor, considere os seguintes pontos ao gerar o código:

- Utilize o padrão RESTful para as rotas (GET, POST, PUT, DELETE).
- Mantenha a separação de responsabilidades: rotas, repositórios e entidades devem estar em arquivos separados, assim como está atualmente.
- O repositório de produtos utiliza um arquivo JSON (products-db.json) para persistência dos dados, implementado na classe JsonFileProductRepository (em adapters/database-repository-jsonfile.ts). As operações de CRUD devem interagir com esse repositório.
- Considere que a entidade Product está definida em core/entity.ts.
- Os casos de uso (use-cases) ficam em core/use-cases/. Se necessário, crie ou atualize use-cases para manter a lógica de negócio desacoplada das rotas.
- Assegure tratamento adequado de erros, retornando status HTTP apropriados e mensagens informativas.
- Mantenha o código compatível com TypeScript, usando tipagem explícita para parâmetros e retornos.
- Os endpoints devem ser implementados em adapters/routes/product-routes.ts.
```
#### Para testar a rota de /users

```markdown
Gere testes automatizados para os endpoints da rota de usuários (/users), cobrindo casos de sucesso, falhas de validação e erros de servidor. Utilize o framework Jest com Supertest e siga a estrutura dos testes já utilizados para a rota de products.
```

🧠 ChatGPT: Documentação, Explicações Técnicas e Exemplos
1. Gerar documentação técnica de um código:

```markdown
Atue como um redator técnico experiente. Analise o seguinte código [insira o código aqui] e produza uma documentação clara e concisa, incluindo uma visão geral, explicação das funções principais e exemplos de uso.
```

1. Explicar uma tecnologia ou conceito:

```markdown
Explique o conceito de [nome da tecnologia] para alguém com conhecimento básico em desenvolvimento de software. Utilize analogias simples e destaque casos de uso comuns.
```

3. Criar exemplos práticos de uso:

```markdown
Forneça três exemplos práticos de como implementar [função ou biblioteca] em um projeto real, incluindo trechos de código e explicações passo a passo.
```

4. Gerar perguntas frequentes (FAQ) sobre uma funcionalidade:

```markdown
Crie uma seção de perguntas frequentes sobre a funcionalidade [nome da funcionalidade], abordando dúvidas comuns e fornecendo respostas claras e objetivas.
```

💻 Windsurf (Codeium): Criação e Testes de Endpoints
1. Criar uma nova versão de um endpoint seguindo padrões existentes:

```markdown
Crie uma nova versão do endpoint /api/usuarios seguindo os padrões de nomenclatura e estrutura utilizados na codebase atual. Certifique-se de incluir validações e tratamento de erros conforme as práticas estabelecidas.
```

2. Gerar testes automatizados para um endpoint:

```markdown
Gere testes automatizados para o endpoint /api/usuarios utilizando [framework de testes], cobrindo casos de sucesso, falhas de validação e erros de servidor.
```

3. Executar build e identificar erros:

```markdown
Execute o processo de build do projeto. Caso ocorram erros, identifique as causas e sugira correções para garantir que o build seja concluído com sucesso.
```

4. Realizar requisição para verificar funcionamento de endpoint:

```markdown
Realize uma requisição para o endpoint /api/usuarios e verifique se a resposta está conforme o esperado. Caso contrário, identifique o erro e proponha uma solução.
```

🗂️ Windsurf: Configurações de Contexto Global e Local
Contexto Global (aplicável a todos os projetos):

```json
{
  "linguagem": "TypeScript",
  "framework": "NestJS",
  "padrõesDeCódigo": "Utilizar arquitetura limpa, injeção de dependência e tratamento centralizado de erros.",
  "convenções": "Nomenclatura camelCase para variáveis e PascalCase para classes."
}
```
Contexto Local (específico de um projeto):

```json
{
  "módulos": ["Autenticação", "Gerenciamento de Usuários", "Relatórios"],
  "dependências": ["TypeORM", "JWT", "Swagger"],
  "configuraçõesEspecíficas": "Endpoints devem seguir o padrão RESTful e incluir versionamento na URL."
}
```
🎧 NotebookLM: Criação de Modelos de Áudio
1. Gerar resumo em formato de podcast:

```markdown
Crie um resumo em formato de podcast sobre o documento '[nome do documento]'. Destaque os principais pontos abordados e apresente de forma envolvente.
```

2. Simular discussão entre especialistas:

```markdown
Simule uma conversa entre dois especialistas discutindo os tópicos abordados no documento '[nome do documento]'. Inclua diferentes perspectivas e insights.
```

3. Criar áudio explicativo para iniciantes:

```markdown
Gere um áudio explicativo sobre '[tema]' direcionado a iniciantes, utilizando linguagem simples e exemplos práticos.
```

🎨 UX Pilot: Design de Interfaces com Foco no Usuário
Contexto Geral:

```markdown
Estamos desenvolvendo uma área do parceiro para nossa empresa, onde representantes terão acesso a informações sobre produtos e materiais de apoio. O design deve ser moderno, intuitivo e responsivo, utilizando a paleta de cores da marca: azul (#0057A0), branco (#FFFFFF) e cinza claro (#F5F5F5).
```

1. Landing Page:

```markdown
Crie uma landing page para a área do parceiro, destacando os principais benefícios, com chamadas para ação claras e design alinhado à identidade visual da empresa.
```

2. Tela de Login:

```markdown
Desenvolva uma tela de login simples e segura para a área do parceiro, incluindo campos para e-mail e senha, opção de recuperação de senha e botão de acesso.
```

3. Dashboard Inicial:

```markdown
Projete o dashboard inicial da área do parceiro, exibindo os posts mais recentes do blog, acesso rápido a arquivos de apoio e notificações importantes.
```

4. Página de Post do Blog:

```markdown
Crie a página de visualização de um post do blog, com destaque para o título, conteúdo formatado, imagens ilustrativas e links para arquivos relacionados.
```

5. Tela de Arquivos de Apoio:

```markdown
Desenvolva a tela de arquivos de apoio, permitindo que os parceiros filtrem e acessem materiais por categoria, com visualização em lista e opção de download.
```
