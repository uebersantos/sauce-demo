# Cenários de Teste - Remoção de produto do carrinho

Este documento descreve os cenários de teste para a funcionalidade de remover produto do carrinho na aplicação SauceDemo.

## Estrutura de Testes

### Configuração Geral

- **URL da Aplicação**: https://www.saucedemo.com/v1/
- **Ferramenta de Teste**: Cypress
- **Estrutura de Automação**: JavaScript com Page Object Model (POM)

## Cenários de Teste

| ID do Cenário de Teste        | Descrição                                                                              | Passos                                                                                                          | Resultado Esperado                                                                                         |
|----------------------|---------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| CT-01                | Remover um item do carrinho                                                                       | 1. Logar na aplicação <br> 2. Adicionar um item ao carrinho <br> 3. Remover o item <br> 4. Verificar o carrinho | O item removido não deve mais aparecer no carrinho e o contador não deve estar visível          |