class ProductPage {
    checkProductVisible(productName) {
        // Verifica se o nome do produto está visível na lista
        cy.contains('.inventory_item_name', productName).should('be.visible');
    }

    viewProductDetails(productName, productImage, productPrice, productDesc ) {
        // Clica no produto para visualizar os detalhes
        cy.contains('.inventory_item_name', productName).click();

        // Verifica se a imagem de detalhes do produto está visível e com o atributo correto
        cy.get('.inventory_details_img')
            .should('have.attr', 'src', productImage)
            .and('be.visible');

        // Verifica o nome, preço e descrição do produto nos detalhes
        cy.contains('.inventory_details_name', productName).should('be.visible');
        cy.contains('.inventory_details_price', productPrice).should('be.visible');
        cy.get('.inventory_details_desc').should('include.text', productDesc);
    }
}

export default new ProductPage();