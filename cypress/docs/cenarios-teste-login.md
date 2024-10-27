# Cenários de Teste - Login

Este documento descreve os cenários de teste para a funcionalidade de login na aplicação SauceDemo.

## Configuração do Teste

- **URL da Aplicação**: https://www.saucedemo.com/v1/
- **Ferramenta de Teste**: Cypress
- **Estrutura de Automação**: JavaScript com Page Object Model (POM)

## Cenários de Teste

| ID do Cenário de Teste | Descrição                                      | Passos                                                                                           | Resultado Esperado |
|------------------------|------------------------------------------------|--------------------------------------------------------------------------------------------------|---------------------|
| CT-001            | Login com credenciais válidas                  | 1. Inserir usuário válido <br> 2. Inserir senha válida <br> 3. Clicar no botão de login          | Redirecionamento para a página de inventário |
| CT-002            | Login com usuário válido e senha inválida      | 1. Inserir usuário válido <br> 2. Inserir senha inválida <br> 3. Clicar no botão de login        | Mensagem de erro "Username and password do not match any user" |
| CT-003            | Login com usuário inválido e senha válida      | 1. Inserir usuário inválido <br> 2. Inserir senha válida <br> 3. Clicar no botão de login        | Mensagem de erro "Username and password do not match any user" |
| CT-004            | Login com usuário e senha inválidos            | 1. Inserir usuário inválido <br> 2. Inserir senha inválida <br> 3. Clicar no botão de login      | Mensagem de erro "Username and password do not match any user" |
| CT-005            | Tentativa de login sem preencher as credenciais| 1. Deixar os campos de usuário e senha em branco <br> 2. Clicar no botão de login               | Mensagem de erro "Username is required" |
| CT-006            | Tentativa de login com usuário bloqueado       | 1. Inserir usuário bloqueado <br> 2. Inserir senha válida <br> 3. Clicar no botão de login | Mensagem de erro "Sorry, this user has been locked out." |

