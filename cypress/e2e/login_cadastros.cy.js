import {faker} from '@faker-js/faker'
describe('Realizar cadastros', () => {

    //Sempre que for referenciar seletores do arquivo json fixtures(valores fixos que sempre serão os mesmos Ex.:Login e senha), deve se criar uma variavel (let exemplo;) e chamar o comando before(rodar antes)
    //para isto você deve apontar o arquivo json Ex.: abaixo(cy.fixture('example')) e chamar o método .then Ex.: abaixo (.then((tData)) para processar
    //Os comandos  cy.log(data.email) e cy.log(data.senha) servem para mostrar em tela os logs dos dados que estão logando, neste caso vai mostrar o login e a senha.
    let data;

    before(() => {
        cy.fixture('example').then((tData) => {
            data = tData;
            cy.log(data.email)
            cy.log(data.senha)
        });
    });
    context('Cadastros de usuários', () => {
        it('Realizar login', () => {

            cy.login(data.email, data.senha)
        });
        
        it('Realizar cadastro de novo usuário', () => {

            //Esta const está fazendo a senha ter apenas 8 digitos. Ela referencia o valor senha na linha de código new_user, que cadastra um novo usuário
            //O faker é um recurso que é preciso ser instalado e que cria dados fakes para testes, como nome, email, endereço etc. Para usalo primeiro deve importar ele com comando import {faker} from '@faker-js/faker' e chama-lo usando o comando faker.internet.email() - este cria email.
            const senha = faker.internet.password(8)

            cy.login(data.email, data.senha)
            cy.new_user(faker.name.firstName(), faker.internet.email(), senha)

        });
        
    });
    
});