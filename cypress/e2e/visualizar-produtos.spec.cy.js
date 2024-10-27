import LoginPage from '../pages/LoginPage';
import ProductPage from '../pages/ProductPage';

describe('Visualização de Produtos', () => {

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
    });
       
    it('CT-007	Visualizar nome de todos os produtos na lista', () => {
        const products = [
            { name: 'Sauce Labs Backpack' },
            { name: 'Sauce Labs Bike Light' },
            { name: 'Sauce Labs Bolt T-Shirt' },
            { name: 'Sauce Labs Fleece Jacket'},
            { name: 'Sauce Labs Onesie' },
            { name: 'Test.allTheThings() T-Shirt (Red)' }
        ];

         // Então todos os produtos devem estar visíveis na lista
        products.forEach(product => {
            ProductPage.checkProductVisible(product.name);
        });
    });

    it('CT-008	Visualizar detalhes do produto Sauce Labs Backpack', () => {
        const product = {
            name: 'Sauce Labs Backpack',
            image: './img/sauce-backpack-1200x1500.jpg',
            price: '29.99',
            desc: 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.'
        };

        // Quando clico no produto "Sauce Labs Backpack"
        // Então devo ver os detalhes do produto com nome, imagem , preço e descrição
        ProductPage.viewProductDetails(product.name, product.image, product.price, product.desc);
    });

    it('CT-009	Visualizar detalhes do produto Sauce Labs Bike Light', () => {
        const product = {
            name: 'Sauce Labs Bike Light',
            image: './img/bike-light-1200x1500.jpg',
            price: '9.99',
            desc: "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included."
        };

        // Quando clico no produto "Sauce Labs Bike Light"
        // Então devo ver os detalhes do produto com nome, imagem , preço e descrição
        ProductPage.viewProductDetails(product.name, product.image, product.price, product.desc);
    });

    it('CT-010	Visualizar detalhes do produto Sauce Labs Bolt T-Shirt', () => {
        const product = {
            name: 'Sauce Labs Bolt T-Shirt',
            image: './img/bolt-shirt-1200x1500.jpg',
            price: '15.99',
            desc: 'Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.'
        };

        // Quando clico no produto "Sauce Labs Bolt T-Shirt"
        // Então devo ver os detalhes do produto com nome, imagem , preço e descrição
        ProductPage.viewProductDetails(product.name, product.image, product.price, product.desc);
    });

    it('CT-011	Visualizar detalhes do produto Sauce Labs Fleece Jacket', () => {
        const product = {
            name: 'Sauce Labs Fleece Jacket',
            image: './img/sauce-pullover-1200x1500.jpg',
            price: '49.99',
            desc: "It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office."
        };

        // Quando clico no produto "Sauce Labs Fleece Jacket"
        // Então devo ver os detalhes do produto com nome, imagem , preço e descrição
        ProductPage.viewProductDetails(product.name, product.image, product.price, product.desc);
    });

    it('CT-012	Visualizar detalhes do produto Sauce Labs Onesie', () => {
        const product = {
            name: 'Sauce Labs Onesie',
            image: './img/red-onesie-1200x1500.jpg',
            price: '7.99',
            desc: "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel."
        };

        // Quando clico no produto "Sauce Labs Onesie"
        // Então devo ver os detalhes do produto com nome, imagem , preço e descrição
        ProductPage.viewProductDetails(product.name, product.image, product.price, product.desc);
    });

    it('CT-013	Visualizar detalhes do produto Test.allTheThings() T-Shirt (Red)', () => {
        const product = {
            name: 'Test.allTheThings() T-Shirt (Red)',
            image: './img/red-tatt-1200x1500.jpg',
            price: '15.99',
            desc: 'This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.'        
         };

        // Quando clico no produto "Test.allTheThings() T-Shirt (Red)"
        // Então devo ver os detalhes do produto com nome, imagem , preço e descrição
        ProductPage.viewProductDetails(product.name, product.image, product.price, product.desc);
    });
});
