# Cenários de Teste - Finalização de Compra na SauceDemo

Este documento descreve os cenários de teste para a funcionalidade de checkout na aplicação SauceDemo.

## Configuração do Teste

- **URL da Aplicação**: https://www.saucedemo.com/v1/
- **Ferramenta de Teste**: Cypress
- **Estrutura de Automação**: JavaScript com Page Object Model (POM)

## Cenários de Teste

| ID do Cenário de Teste        | Descrição                                                                           | Passos                                                                                                          | Resultado Esperado                                                                                         |
|----------------------|---------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| CT-01                | Exibir erro "First Name is required" ao tentar finalizar compra sem preencher o nome              | 1. Logar na aplicação <br> 2. Adicionar item ao carrinho <br> 3. Iniciar checkout <br> 4. Continuar sem nome   | A mensagem de erro "First Name is required" deve ser exibida                                              |
| CT-02                | Exibir erro "Last Name is required" ao tentar finalizar compra sem preencher o sobrenome          | 1. Logar na aplicação <br> 2. Adicionar item ao carrinho <br> 3. Iniciar checkout <br> 4. Continuar sem sobrenome | A mensagem de erro "Last Name is required" deve ser exibida                                               |
| CT-03                | Exibir erro "Postal Code is required" ao tentar finalizar compra sem preencher o código postal    | 1. Logar na aplicação <br> 2. Adicionar item ao carrinho <br> 3. Iniciar checkout <br> 4. Continuar sem código postal | A mensagem de erro "Postal Code is required" deve ser exibida                                             |
| CT-04                | Finalizar compra com sucesso                                                                      | 1. Logar na aplicação <br> 2. Adicionar item ao carrinho <br> 3. Iniciar checkout <br> 4. Preencher dados e concluir | A mensagem "THANK YOU FOR YOUR ORDER" deve ser exibida após a finalização da compra                        |
