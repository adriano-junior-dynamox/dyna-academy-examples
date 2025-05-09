# Guia de Boas Práticas com Windsurf e Assistente de Código

Este documento serve como referência para utilizar o Windsurf em conjunto com o assistente de IA durante apresentações, demonstrações e no dia a dia do desenvolvimento. Aqui você encontrará exemplos de prompts, regras para escrita, dicas para rodar comandos no terminal e como obter o máximo de auxílio do assistente.

---

## 1. Introdução ao Windsurf e ao Assistente

O Windsurf é uma plataforma que integra comandos de terminal, automação de builds, execução de requests e integração com assistentes inteligentes. O assistente de IA pode:
- Sugerir, rodar e depurar comandos
- Auxiliar na escrita de prompts
- Explicar erros de build, requests ou execução
- Sugerir boas práticas e refatorações
- Gerar documentação
- Ajudar na escrita de testes automatizados

---

## 2. Como Escrever Prompts Eficazes

### Estrutura Básica de um Prompt
- Seja claro e objetivo
- Especifique o contexto (arquivo, função, objetivo)
- Informe o resultado esperado
- Se possível, forneça exemplos
- Indique restrições ou requisitos especiais

### Exemplos de Prompts

| Situação                | Bom Prompt                                                                                      | Ruim Prompt           |
|------------------------|------------------------------------------------------------------------------------------------|-----------------------|
| Adição de função       | "Adicione uma função `calcular_media` em `utils.py` que recebe lista de números e retorna média."| "Faz uma função aí."  |
| Rodar comando          | "Rode `pytest tests/` e explique qualquer erro encontrado."                                     | "Roda o teste."      |
| Refatoração            | "Refatore `processar_dados` para usar list comprehension e explique a mudança."                | "Melhora o código."  |
| Análise de logs        | "Analise o log de erro abaixo e sugira solução: ..."                                           | "Deu erro, arruma."  |
| Debug                  | "O comando `npm run build` falhou com erro X. Pode explicar e sugerir correção?"               | "Build quebrou."     |
| Documentação           | "Gere um README.md para o projeto explicando dependências e uso."                              | "Faz doc."           |

### Exemplos Avançados de Prompts
- "Preciso de um workflow CI/CD que rode testes, faça lint e envie deploy apenas se tudo passar. Gere o arquivo de configuração."
- "Analise o seguinte trecho de código e sugira melhorias de performance, mantendo a compatibilidade com Python 3.8."
- "Crie um script bash para automatizar o backup da pasta `data/` diariamente às 2h."
- "Explique por que o comando `docker-compose up` está travando e como posso depurar o problema."
- "Liste possíveis causas para o erro 'ModuleNotFoundError' ao rodar `python app.py`."

### Checklist de Revisão de Prompt
- [ ] Especifiquei o contexto (arquivo, função, comando)?
- [ ] Fui claro sobre o resultado esperado?
- [ ] Incluí exemplos ou restrições?
- [ ] Perguntei por explicações se necessário?
- [ ] O prompt é objetivo e direto?

---

## 3. Regras Globais e Locais para Prompts

### Global Rules (Regras Globais)
- Sempre especifique o contexto (arquivo, função, objetivo)
- Seja educado e direto
- Peça explicações se não entender a resposta
- Solicite exemplos práticos sempre que possível
- Prefira prompts detalhados para respostas melhores
- Revise sugestões antes de aplicar em produção

### Exemplos de Global Rules
- "Sempre explique o motivo das alterações sugeridas."
- "Nunca rode comandos destrutivos sem permissão explícita."
- "Priorize a clareza e a segurança nas respostas."

### Local Rules (Regras Locais)
- Para comandos de terminal, informe o diretório e o comando completo
- Para debugging, forneça a mensagem de erro completa
- Para refatorações, explique o objetivo da mudança
- Para automação, detalhe o fluxo desejado

### Exemplos de Local Rules
- "No arquivo `api.py`, use apenas bibliotecas padrão."
- "No diretório `scripts/`, scripts devem ser compatíveis com Linux e Windows."
- "No README, explique como rodar o projeto em ambiente local."

---

## 4. Rodando Comandos no Terminal via Windsurf

### Como Pedir para Rodar Comandos
- Especifique o comando completo (ex: `pytest tests/`)
- Informe o diretório se não for o padrão
- Peça para analisar o resultado, se desejar

**Exemplo:**
> Rode o comando `pip install -r requirements.txt` e me avise se houver algum erro.

### O que Fazer em Caso de Erro
- Solicite explicação do erro
- Peça sugestões de correção
- Se necessário, peça para rodar novamente após corrigir

**Exemplo:**
> O comando retornou erro. Pode explicar e sugerir como corrigir?

### Como Receber Contexto e Sugestões
- Sempre peça explicações detalhadas
- Solicite logs ou trechos relevantes do erro
- Peça sugestões de comandos alternativos

### Dicas para Aproveitar Logs e Outputs
- Copie e cole mensagens de erro completas
- Solicite análise linha a linha, se necessário
- Peça para gerar comandos de troubleshooting

---

## 5. Workflows Complexos e Automação

### Exemplos de Solicitações para Workflows
- "Configure um pipeline CI/CD usando GitHub Actions que execute testes, lint e deploy."
- "Crie um Makefile com targets para build, test e deploy."
- "Automatize a geração de documentação sempre que houver push na branch main."

### Como Estruturar um Prompt para Workflow
1. Descreva o objetivo geral
2. Liste as etapas desejadas
3. Especifique restrições (ex: só deploy se testes passarem)
4. Informe ferramentas e arquivos envolvidos

---

## 6. Troubleshooting: Resolução de Problemas Comuns

### Problemas Frequentes
- Erros de dependência: "ModuleNotFoundError", "package not found"
- Falhas de build: erros de sintaxe, incompatibilidade de versão
- Comandos travando ou sem saída
- Falhas em requests HTTP (timeout, 404, 500)

### Como Solicitar Ajuda
- Informe o comando/ação executada
- Cole a mensagem de erro completa
- Descreva o ambiente (SO, versão, etc)
- Pergunte por possíveis causas e soluções

**Exemplo:**
> O comando `python app.py` retorna `ModuleNotFoundError: No module named 'requests'`. Como corrigir?

---

## 7. Glossário de Termos

- **Prompt**: Instrução ou pergunta enviada ao assistente
- **Build**: Processo de compilação ou preparação do projeto para execução
- **Debug**: Processo de identificar e corrigir erros
- **CI/CD**: Integração e entrega contínua
- **Lint**: Ferramenta para análise estática de código
- **Refatoração**: Melhorar o código sem alterar seu comportamento externo
- **Workflow**: Sequência de etapas automatizadas

---

## 8. Perguntas Frequentes (FAQ)

**1. O assistente pode rodar comandos destrutivos?**
> Não, comandos como `rm -rf` ou que alteram dados críticos só são executados com permissão explícita.

**2. Como garantir que o prompt será bem interpretado?**
> Seja detalhado, forneça contexto e explique o objetivo.

**3. Posso pedir para corrigir código de terceiros?**
> Sim, mas forneça o trecho de código e explique o que espera da correção.

**4. O assistente pode sugerir melhorias de performance?**
> Sim, basta solicitar análise de performance ou otimização.

**5. Como receber explicações detalhadas?**
> Peça explicitamente por explicações passo a passo ou detalhadas.

---

## 9. Limitações e Boas Práticas

- O assistente não executa comandos destrutivos sem permissão
- Sempre revise sugestões antes de aplicar em produção
- Prefira prompts detalhados para melhores respostas
- Informe sempre o contexto e o objetivo
- Use logs e mensagens de erro completas para facilitar o diagnóstico

---

## 10. Referências e Links Úteis

- [Documentação oficial do Windsurf](https://windsurf.dev/)
- [Guia de prompts para IA](https://www.promptingguide.ai/)
- [Guia de boas práticas para README](https://readme.so/)
- [Exemplo de workflows CI/CD](https://docs.github.com/pt/actions/guides)

---

**Este documento pode ser atualizado conforme novas necessidades ou dúvidas surgirem.**

- "Roda o teste."
- "Melhora o código."

---

## 3. Regras Globais e Locais para Prompts

### Global Rules (Regras Globais)
- Sempre especifique o contexto (arquivo, função, objetivo)
- Seja educado e direto
- Peça explicações se não entender a resposta
- Solicite exemplos práticos sempre que possível

### Local Rules (Regras Locais)
- Para comandos de terminal, informe o diretório e o comando completo
- Para debugging, forneça a mensagem de erro completa
- Para refatorações, explique o objetivo da mudança

---

## 4. Rodando Comandos no Terminal via Windsurf

### Como Pedir para Rodar Comandos
- Especifique o comando completo (ex: `pytest tests/`)
- Informe o diretório se não for o padrão
- Peça para analisar o resultado, se desejar

**Exemplo:**
> Rode o comando `pip install -r requirements.txt` e me avise se houver algum erro.

### O que Fazer em Caso de Erro
- Solicite explicação do erro
- Peça sugestões de correção
- Se necessário, peça para rodar novamente após corrigir

**Exemplo:**
> O comando retornou erro. Pode explicar e sugerir como corrigir?

### Como Receber Contexto e Sugestões
- Sempre peça explicações detalhadas
- Solicite logs ou trechos relevantes do erro

---

## 5. Como o Assistente Pode Ajudar

- Explicando mensagens de erro
- Sugerindo comandos alternativos
- Refatorando código para boas práticas
- Gerando exemplos de uso
- Criando arquivos de documentação
- Ajudando na escrita de testes

**Exemplo de auxílio:**
> O build falhou com erro X. Pode explicar e sugerir uma solução?

---

## 6. Dicas para Apresentação

- Mostre exemplos práticos de prompts bons e ruins
- Demonstre o ciclo: prompt → execução → análise do resultado → correção
- Destaque como o assistente sugere boas práticas e corrige comandos
- Use a documentação como guia para dúvidas rápidas

---

## 7. Limitações e Boas Práticas

- O assistente não executa comandos destrutivos sem permissão
- Sempre revise sugestões antes de aplicar em produção
- Prefira prompts detalhados para melhores respostas

---
