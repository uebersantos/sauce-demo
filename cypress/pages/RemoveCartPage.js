class RemoveCartPage {
    // Abre a página do carrinho
    openCart() {
        cy.get('#shopping_cart_container').click();
    }

    // Remove um item do carrinho
    removeItemCart(itemName) {
        cy.get('.cart_item').each(($el) => {
            cy.wrap($el).within(() => {
                cy.get('.inventory_item_name').then(($name) => {
                    if ($name.text().includes(itemName)) {
                        // Clica no botão "REMOVE" se o nome do item for o esperado
                        cy.contains('REMOVE').click();
                    }
                });
            });
        });
    }

    // Verifica se o item foi removido do carrinho
    verifyItemRemoved(itemName) {
        cy.contains('.inventory_item_name', itemName).should('not.exist');
    }
}

export default new RemoveCartPage();
