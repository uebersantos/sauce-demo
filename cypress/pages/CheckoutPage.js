class CheckoutPage {
    // Inicia o processo de checkout a partir do carrinho
    startCheckout() {
        cy.contains('CHECKOUT').click();
    }

    // Preenche as informações de checkout
    fillCheckoutInfo(firstName = '', lastName = '', postalCode = '') {
        if (firstName) cy.get('[data-test="firstName"]').type(firstName);
        if (lastName) cy.get('[data-test="lastName"]').type(lastName);
        if (postalCode) cy.get('[data-test="postalCode"]').type(postalCode);
    }

    // Submete o checkout
    submitCheckout() {
        cy.contains('CONTINUE').click();
    }

    // Verifica se o erro está visível e contém a mensagem correta
    verifyErrorVisible(expectedMessage) {
        cy.get('[data-test="error"]').should('be.visible');
        cy.get('[data-test="error"]').should('contain.text', expectedMessage);
    }

    // Finaliza a compra
    finishCheckout() {
        cy.contains('FINISH').click();
    }

    // Verifica se o pedido foi concluído com sucesso
    verifyOrderSuccess() {
        cy.contains('THANK YOU FOR YOUR ORDER').should('exist');
    }

    // Verifica que estamos na página de resumo de compra
    verifyOverviewPage() {
        cy.contains('Overview').should('exist');
    }
}

export default new CheckoutPage();
