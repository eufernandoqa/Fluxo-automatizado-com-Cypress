import {faker} from '@faker-js/faker'

describe('Cadastrar novas transações', () => {
    
    context('Cadastrar transação positiva', () => {

        it('Acessar site', () => {
            cy.login2()
            
        });



         it('Transação valor positivo', () => {      

        const valor = faker.finance.accountNumber(4)   

        cy.new_transacao(faker.name.firstName(), valor)
        
        //cy.visit("https://devfinance-agilizei.netlify.app/#")
        //cy.contains("Nova Transação").click()
        //cy.get('#description').type("Entrada Teste")
        //cy.get('#amount').type("500")
        //cy.get('#date').type("2025-07-16") //yyy-mm-dd
        //cy.contains('button', 'Salvar').click()
        //cy.contains("Nova Transação").click()
        //cy.get('#description').type("Saída Teste")
        //cy.get('#amount').type("-200")
        //cy.get('#date').type("2025-07-16") //yyyy-mm-dd
        //cy.contains('button', 'Salvar').click()
        //um dos tipos de assert (Afirmar que uma determinada palavra cadastrada ou uma mensagem de confirmação é exibiba em tela)
        //cy.get('[data-index="0"] > .description').should("have.text", "Entrada Teste")
    });
   
    });

    
});