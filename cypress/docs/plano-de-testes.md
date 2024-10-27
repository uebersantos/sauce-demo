# Plano de Testes

Este documento serve como plano de testes e índice dos cenários de teste para cada funcionalidade da aplicação SauceDemo. Cada link abaixo leva ao arquivo Markdown correspondente, que contém a lista detalhada dos cenários de teste para a funcionalidade especificada.

## Índice de Documentos de Teste

1. [Cenários de Teste de Login](./cenarios-teste-login.md)
   - **CT-001**: Login com credenciais válidas
   - **CT-002**: Login com usuário válido e senha inválida
   - **CT-003**: Login com usuário inválido e senha válida
   - **CT-004**: Login com usuário e senha inválidos
   - **CT-005**: Tentativa de login sem preencher as credenciais
   - **CT-006**: Tentativa de login com usuário bloqueado

2. [Cenários de Teste de Visualização de Produtos](./cenarios-teste-visualizar-produtos.md)
   - **CT-007**: Visualizar nome de todos os produtos na lista
   - **CT-008**: Visualizar detalhes do produto Sauce Labs Backpack
   - **CT-009**: Visualizar detalhes do produto Sauce Labs Bike Light
   - **CT-010**: Visualizar detalhes do produto Sauce Labs Bolt T-Shirt
   - **CT-011**: Visualizar detalhes do produto Sauce Labs Fleece Jacket
   - **CT-012**: Visualizar detalhes do produto Sauce Labs Onesie
   - **CT-013**: Visualizar detalhes do produto Test.allTheThings() T-Shirt (Red)

3. [Cenários de Teste de Adicionar ao Carrinho](./cenarios-teste-adicionar-carrinho.md)
   - **CT-014**: Verificar que o carrinho está vazio
   - **CT-015**: Adicionar um item ao carrinho
   - **CT-016**: Adicionar dois itens ao carrinho

4. [Cenários de Teste de Remover do Carrinho](./cenarios-teste-remover-carrinho.md)
   - **CT-017**: Remover um item do carrinho

5. [Cenários de Teste de Finalizar Compra](./cenarios-finalizar-compra.md)
   - **CT-018**: Exibir erro "First Name is required" ao tentar finalizar compra sem preencher o nome
   - **CT-019**: Exibir erro "Last Name is required" ao tentar finalizar compra sem preencher o sobrenome
   - **CT-020**: Exibir erro "Postal Code is required" ao tentar finalizar compra sem preencher o código postal
   - **CT-021**: Finalizar compra com sucesso

