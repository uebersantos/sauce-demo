class LoginPage {
    visit() {
        cy.visit('https://www.saucedemo.com/v1/');
    }

    enterUsername(username) {
        cy.get('#user-name').type(username);
    }

    enterPassword(password) {
        cy.get('#password').type(password, { log: false });
    }

    submitLogin() {
        cy.get('#login-button').click();
    }

    checkErrorMessageVisible() {
        cy.get('[data-test="error"]').should('be.visible');
    }

    checkErrorText(expectedMessage) {
        cy.get('[data-test="error"]').should('be.visible').and('contain', expectedMessage);
    }

    checkLoginSuccessful() {
        cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');
    }
}

export default new LoginPage();
