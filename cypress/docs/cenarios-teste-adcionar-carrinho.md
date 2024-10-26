# Cenários de Teste - Adicionar Produtos ao Carrinho

Este documento descreve os cenários de teste para a funcionalidade de adicionar produtos ao carrinho na aplicação SauceDemo.

## Configuração do Teste

- **URL da Aplicação**: https://www.saucedemo.com/v1/
- **Ferramenta de Teste**: Cypress
- **Estrutura de Automação**: JavaScript com Page Object Model (POM)

## Cenários de Teste

| ID do Cenário de Teste        | Descrição                                                                                           | Passos                                                                                                                         | Resultado Esperado                                                                                                            |
|----------------------|---------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| CT-01                | Verificar que o carrinho está vazio                                                                           | 1. Logar na aplicação <br> 2. Acessar o carrinho sem adicionar itens                                                           | O carrinho deve estar vazio e o contador de itens não deve estar visível                                                     |
| CT-02                | Adicionar um item ao carrinho                                                                                 | 1. Logar na aplicação <br> 2. Adicionar o primeiro item ao carrinho <br> 3. Acessar o carrinho                                 | O carrinho deve exibir o item adicionado com a quantidade correta e o contador deve mostrar "1"                              |
| CT-03                | Adicionar dois itens ao carrinho                                                                              | 1. Logar na aplicação <br> 2. Adicionar o primeiro item <br> 3. Acessar o carrinho <br> 4. Continuar comprando e adicionar o segundo item | O carrinho deve exibir ambos os itens com os preços corretos e o contador deve mostrar "2"                   |

