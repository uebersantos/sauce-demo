import LoginPage from '../pages/LoginPage';

describe('Funcionalidade de Login na SauceDemo', () => {

    beforeEach(() => {
        // Dado que estou na página de login
        LoginPage.visit();
    });

    it('Deve permitir login com credenciais válidas', () => {
        // Quando insiro o usuário e a senha válidos
        LoginPage.enterUsername('standard_user');
        LoginPage.enterPassword('secret_sauce');
        LoginPage.submitLogin();

        // Então devo ser redirecionado para a página de inventário
        LoginPage.checkLoginSuccessful();
    });

    it('Deve exibir mensagem de erro ao tentar login com senha inválida', () => {
        // Quando insiro o usuário correto e uma senha inválida
        LoginPage.enterUsername('standard_user');
        LoginPage.enterPassword('senhaInvalida');
        LoginPage.submitLogin();
        LoginPage.checkErrorText("Epic sadface: Username and password do not match any user in this service");


        // Então uma mensagem de erro deve ser exibida
        LoginPage.checkErrorMessageVisible();
    });

    it('Deve exibir mensagem de erro ao tentar login com usuário inválido', () => {
        // Quando insiro um usuário inválido e uma senha válida
        LoginPage.enterUsername('usuarioInvalido');
        LoginPage.enterPassword('secret_sauce');
        LoginPage.submitLogin();
        LoginPage.checkErrorText("Epic sadface: Username and password do not match any user in this service");


        // Então uma mensagem de erro deve ser exibida
        LoginPage.checkErrorMessageVisible();
    });

    it('Deve exibir mensagem de erro ao tentar login com credenciais inválidas', () => {
        // Quando insiro usuário e senha inválidos
        LoginPage.enterUsername('usuarioInvalido');
        LoginPage.enterPassword('senhaInvalida');
        LoginPage.submitLogin();
        LoginPage.checkErrorText("Epic sadface: Username and password do not match any user in this service");


        // Então uma mensagem de erro deve ser exibida
        LoginPage.checkErrorMessageVisible();
    });

    it('Deve exibir mensagem de erro ao tentar login sem preencher credenciais', () => {
        // Quando deixo os campos de usuário e senha em branco
        LoginPage.submitLogin();
        LoginPage.checkErrorText("Epic sadface: Username is required");


        // Então uma mensagem de erro deve ser exibida
        LoginPage.checkErrorMessageVisible();
    });

    it('Deve exibir mensagem de erro ao tentar login com usuário bloqueado', () => {
        // Quando insiro um usuário bloqueado e uma senha válida
        LoginPage.enterUsername('locked_out_user');
        LoginPage.enterPassword('secret_sauce');
        LoginPage.submitLogin();
        LoginPage.checkErrorText("Epic sadface: Sorry, this user has been locked out.");


        // Então uma mensagem de erro deve ser exibida
        LoginPage.checkErrorMessageVisible();
    });
});
