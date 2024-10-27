import AddToCartPage from '../pages/AddToCartPage';
import LoginPage from '../pages/LoginPage';

describe('Adicionar produtos ao carrinho', () => {

    beforeEach(() => {
        // Dado que estou na página de login
        // Quando insiro o usuário e a senha válidos
        cy.session('login', () => {
            LoginPage.visit();
            LoginPage.enterUsername('standard_user', { log: false });
            LoginPage.enterPassword('secret_sauce', { log: false });
            LoginPage.submitLogin();
            LoginPage.checkLoginSuccessful();
        });

        // E sou redirecionado para a página de inventário
        cy.visit('https://www.saucedemo.com/v1/inventory.html');
    });

    it('CT-014	Verificar que o carrinho está vazio', () => {
        
        // Quando acesso o carrinho sem adicionar itens
        AddToCartPage.openCart();
    
        // E o carrinho estiver vazio
        cy.get('.cart_item').should('not.exist');
    
        // Então o contador do carrinho não deve estar visível
        cy.get('.shopping_cart_badge').should('not.exist');
    
    });


    it('CT-015	Adicionar um item ao carrinho', () => {
        // Quando adiciono o primeiro item ao carrinho
        AddToCartPage.addItemToCart(0);

        // E o contador do carrinho deve mostrar "1"
        AddToCartPage.verifyCartBadge('1');

        // Então o item deve estar presente no carrinho
        AddToCartPage.openCart();
        AddToCartPage.verifyItemQuantity('1');
        AddToCartPage.verifyItemInCart('Sauce Labs Backpack', '29.99');
    });

    it('CT-016	Adicionar dois itens ao carrinho', () => {
        // Quando adiciono o primeiro item ao carrinho
        AddToCartPage.addItemToCart(0);
        AddToCartPage.verifyCartBadge('1');

        // E adiciono o segundo item ao carrinho após continuar compra
        AddToCartPage.openCart();
        AddToCartPage.continueShopping();
        AddToCartPage.addItemToCart(1);
        AddToCartPage.verifyCartBadge('2');

        // Então os itens devem estar presentes no carrinho com as quantidades
        AddToCartPage.openCart();
        AddToCartPage.verifyItemInCart('Sauce Labs Backpack', '29.99');
        AddToCartPage.verifyItemInCart('Sauce Labs Bike Light', '9.99');
    });
});
