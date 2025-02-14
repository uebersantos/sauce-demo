import LoginPage from '../pages/LoginPage';

describe('Login', () => {

    beforeEach(() => {
        // Dado que estou na página de login
        LoginPage.visit();
    });

    it('CT-001	Login com credenciais válidas', () => {
        // Quando insiro o usuário e a senha válidos
        LoginPage.enterUsername('standard_user');
        LoginPage.enterPassword('secret_sauce', { log: false });
        LoginPage.submitLogin();

        // Então devo ser redirecionado para a página de inventário
        LoginPage.checkLoginSuccessful();
    });

    it('CT-002	Login com usuário válido e senha inválida', () => {
        // Quando insiro o usuário correto e uma senha inválida
        LoginPage.enterUsername('standard_user');
        LoginPage.enterPassword('senhaInvalida');
        LoginPage.submitLogin();
        LoginPage.checkErrorText("Epic sadface: Username and password do not match any user in this service");


        // Então uma mensagem de erro deve ser exibida
        LoginPage.checkErrorMessageVisible();
    });

    it('CT-003	Login com usuário inválido e senha válida', () => {
        // Quando insiro um usuário inválido e uma senha válida
        LoginPage.enterUsername('usuarioInvalido');
        LoginPage.enterPassword('secret_sauce');
        LoginPage.submitLogin();
        LoginPage.checkErrorText("Epic sadface: Username and password do not match any user in this service");


        // Então uma mensagem de erro deve ser exibida
        LoginPage.checkErrorMessageVisible();
    });

    it('CT-004	Login com usuário e senha inválidos', () => {
        // Quando insiro usuário e senha inválidos
        LoginPage.enterUsername('usuarioInvalido');
        LoginPage.enterPassword('senhaInvalida');
        LoginPage.submitLogin();
        LoginPage.checkErrorText("Epic sadface: Username and password do not match any user in this service");


        // Então uma mensagem de erro deve ser exibida
        LoginPage.checkErrorMessageVisible();
    });

    it('CT-005	Tentativa de login sem preencher as credenciais', () => {
        // Quando deixo os campos de usuário e senha em branco
        LoginPage.submitLogin();
        LoginPage.checkErrorText("Epic sadface: Username is required");


        // Então uma mensagem de erro deve ser exibida
        LoginPage.checkErrorMessageVisible();
    });

    it('CT-006	Tentativa de login com usuário bloqueado', () => {
        // Quando insiro um usuário bloqueado e uma senha válida
        LoginPage.enterUsername('locked_out_user');
        LoginPage.enterPassword('secret_sauce');
        LoginPage.submitLogin();
        LoginPage.checkErrorText("Epic sadface: Sorry, this user has been locked out.");


        // Então uma mensagem de erro deve ser exibida
        LoginPage.checkErrorMessageVisible();
    });
});
