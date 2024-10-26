# Cenários de Teste - Visualização de Produtos na SauceDemo

Este documento descreve os cenários de teste para a funcionalidade de visualização de produtos na aplicação SauceDemo.

## Configuração do Teste

- **URL da Aplicação**: https://www.saucedemo.com/v1/
- **Ferramenta de Teste**: Cypress
- **Estrutura de Automação**: JavaScript com Page Object Model (POM)

## Cenários de Teste

| ID do Cenário        | Descrição                                                                                           | Passos                                                                                                                         | Resultado Esperado                                                                                                            |
|----------------------|---------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| CT-01                | Visualizar nome de todos os produtos na lista                                                                 | 1. Logar na aplicação <br> 2. Navegar para a página de inventário <br> 3. Visualizar a lista de produtos                        | Todos os produtos devem estar visíveis com seus respectivos nomes                                                            |
| CT-02                | Visualizar detalhes do produto **Sauce Labs Backpack**                                                        | 1. Clicar no produto "Sauce Labs Backpack"                                                                                     | Nome, imagem, preço e descrição devem ser exibidos                                                                  |
| CT-03                | Visualizar detalhes do produto **Sauce Labs Bike Light**                                                      | 1. Clicar no produto "Sauce Labs Bike Light"                                                                                   | Nome, imagem, preço e descrição devem ser exibidos                                                                  |
| CT-04                | Visualizar detalhes do produto **Sauce Labs Bolt T-Shirt**                                                    | 1. Clicar no produto "Sauce Labs Bolt T-Shirt"                                                                                 | Nome, imagem, preço e descrição devem ser exibidos                                                                  |
| CT-05                | Visualizar detalhes do produto **Sauce Labs Fleece Jacket**                                                   | 1. Clicar no produto "Sauce Labs Fleece Jacket"                                                                                | Nome, imagem, preço e descrição devem ser exibidos                                                                  |
| CT-06                | Visualizar detalhes do produto **Sauce Labs Onesie**                                                          | 1. Clicar no produto "Sauce Labs Onesie"                                                                                       | Nome, imagem, preço e descrição devem ser exibidos                                                                  |
| CT-07                | Visualizar detalhes do produto **Test.allTheThings() T-Shirt (Red)**                                         | 1. Clicar no produto "Test.allTheThings() T-Shirt (Red)"                                                                       | Nome, imagem, preço e descrição devem ser exibidos                                                                  |




