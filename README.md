# Sauce Demo teste

Projeto desenvolvido realização de teste automatizado na Sauce Demo.

## Pré-requisitos

É necessário ter o **Node.js** e **npm** instalados para executar este projeto.

Eu usei as versões **Node.js** `v20.9.0` e **npm** `10.1.0`.

## Instalação

Execute 'npm install' (ou 'npm i' para a versão curta) para instalar as dependências de desenvolvimento.

## Documentação

Toda a documentação dos cenários de teste está organizada na pasta [`docs`](./cypress/docs).

- **Documentos Individuais**: Cada funcionalidade possui um arquivo específico com cenários de teste detalhados.
- **Plano de Testes**: O arquivo [`plano-de-testes.md`](./cypress/docs/plano-de-testes.md) fornece uma visão geral de todos os cenários de teste organizados por funcionalidade, permitindo uma navegação rápida entre os testes.

## Testes

Execute 'npm test' (ou 'npm 't para a versão curta) para rodar os testes no modo **headless**.

Ou, execute 'npm run cy:open' para abrir o **Cypress** no modo **interativo**.

## Integração Contínua (CI/CD)

Foi configurada uma **pipeline de integração contínua** que executa automaticamente todos os testes do projeto nas seguintes situações:

- Quando um **push** é feito na branch `main`.
- Quando um **pull request** é aberto.

Para verificar a execução dos jobs, acesse a seção **Actions** do projeto no GitHub.

## Estrutura do Projeto

Abaixo, uma breve explicação da estrutura das pastas principais do projeto:

- **cypress/e2e**: Contém os arquivos de especificação de teste (cada funcionalidade tem um arquivo específico).
- **cypress/pages**: Contém as páginas organizadas no padrão **POM** (Page Object Model) para facilitar o reuso e manutenção dos elementos.
- **cypress/docs**: Diretório onde estão os arquivos de documentação dos cenários de teste.

___

Este projeto foi desenvolvido por [Ueber](https://br.linkedin.com/in/uebersyemmer).
