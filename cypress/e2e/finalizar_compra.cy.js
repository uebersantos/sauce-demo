import LoginPage from '../pages/LoginPage';
import AddToCartPage from '../pages/AddToCartPage';
import CheckoutPage from '../pages/CheckoutPage';

describe('Finalizar compra', () => {

    beforeEach(() => {
        // Dado que estou na página de login
        // Quando insiro o usuário e a senha válidos
        cy.session('login', () => {
            LoginPage.visit();
            LoginPage.enterUsername('standard_user');
            LoginPage.enterPassword('secret_sauce');
            LoginPage.submitLogin();
            LoginPage.checkLoginSuccessful();
        });

        // E sou redirecionado para a página de inventário
        cy.visit('https://www.saucedemo.com/v1/inventory.html');
    
        // E adiciono o primeiro item ao carrinho
        AddToCartPage.addItemToCart(0);
        AddToCartPage.verifyCartBadge('1');

        // Então incio chekout
        AddToCartPage.openCart();
    });

    it('Deve exibir erro "First Name is required" ao tentar finalizar compra sem preencher nome', () => {
        // Quando inicio o checkout
        CheckoutPage.startCheckout();

        // E tento continuar sem preencher as informações
        CheckoutPage.submitCheckout();

        // Então a mensagem de erro "First Name is required" deve ser exibida
        CheckoutPage.verifyErrorVisible("First Name is required");
    });

    it('Deve exibir erro "Last Name is required" ao tentar finalizar compra sem preencher sobrenome', () => {
        // Quando inicio o checkout
        CheckoutPage.startCheckout();

        // E preencho o nome, mas deixo o sobrenome vazio
        CheckoutPage.fillCheckoutInfo('Ueber');
        CheckoutPage.submitCheckout();

        // Então a mensagem de erro "Last Name is required" deve ser exibida
        CheckoutPage.verifyErrorVisible("Last Name is required");
    });

    it('Deve exibir erro "Postal Code is required" ao tentar finalizar compra sem preencher código postal', () => {
        // Quando inicio o checkout
        CheckoutPage.startCheckout();

        // E preencho o nome e sobrenome, mas deixo o código postal vazio
        CheckoutPage.fillCheckoutInfo('Ueber', 'Santos');
        CheckoutPage.submitCheckout();

        // Então a mensagem de erro "Postal Code is required" deve ser exibida
        CheckoutPage.verifyErrorVisible("Postal Code is required");
    });

    it('Deve finalizar compra com sucesso', () => {
        // Quando inicio o checkout
        CheckoutPage.startCheckout();

        // E preencho todas as informações necessárias
        CheckoutPage.fillCheckoutInfo('Ueber', 'Santos', '12345678');
        CheckoutPage.submitCheckout();

        // E estou estar na página de resumo do pedido
        CheckoutPage.verifyOverviewPage();

        // E verifico o item e o preço
        cy.contains('Sauce Labs Backpack').should('exist');
        cy.contains('29.99').should('exist');

        // E finalizo a compra
        CheckoutPage.finishCheckout();

        // Então a mensagem de sucesso deve ser exibida
        CheckoutPage.verifyOrderSuccess();
    });
});
