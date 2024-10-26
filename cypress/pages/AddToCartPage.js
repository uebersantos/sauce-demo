class AddToCartPage {
    // Verifica se a URL atual corresponde a página de inventário
    verifyInventoryPage() {
        cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');
    }

    // Adiciona um item ao carrinho com base no índice do item
    addItemToCart(itemIndex) {
        cy.get('.btn_primary.btn_inventory').eq(itemIndex).click();
    }

    // Verifica se o contador do carrinho exibe a quantidade itens
    verifyCartBadge(quantity) {
        cy.get('.shopping_cart_badge').should('have.text', quantity);
    }

    // Abre a página do carrinho
    openCart() {
        cy.get('#shopping_cart_container').click();
    }

    // Verifica se o item está no carrinho com o preço correto
    verifyItemInCart(itemName, itemPrice) {
        cy.get('.cart_item').each(($el) => {
            cy.wrap($el).within(() => {
                cy.get('.inventory_item_name').then(($name) => {
                    if ($name.text().includes(itemName)) {
                        // Se o nome do item estiver correto, verifica o preço
                        cy.get('.inventory_item_price').should('contain', itemPrice);
                    }
                });
            });
        });
    }

    // Verifica a quantidade de um item no carrinho
    verifyItemQuantity(quantity) {
        cy.get('.cart_quantity').should('have.text', quantity);
    }

    // Clica no botão "Continue Shopping" para voltar para página de produtos
    continueShopping() {
        cy.contains('Continue Shopping').click();
    }
}

export default new AddToCartPage();
