import AddToCartPage from '../pages/AddToCartPage';
import RemoveCartPage from '../pages/RemoveCartPage';
import LoginPage from '../pages/LoginPage';

describe('Remover do Carrinho', () => {

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

        // Então sou redirecionado para a página de inventário
        cy.visit('https://www.saucedemo.com/v1/inventory.html');
    });

    it('CT-017	Remover um item do carrinho', () => {
        // Quando adiciono o primeiro item ao carrinho
        AddToCartPage.addItemToCart(0);

        // E o contador do carrinho deve mostrar "1"
        AddToCartPage.verifyCartBadge('1');

        // E abro o carrinho e verifico se o item foi adicionado
        RemoveCartPage.openCart();
        AddToCartPage.verifyItemQuantity('1');
        AddToCartPage.verifyItemInCart('Sauce Labs Backpack', '29.99');

        // E removo o item do carrinho
        RemoveCartPage.removeItemCart('Sauce Labs Backpack');

        // Emtão o item não deve estar mais no carrinho
        RemoveCartPage.verifyItemRemoved('Sauce Labs Backpack');
    });
});
