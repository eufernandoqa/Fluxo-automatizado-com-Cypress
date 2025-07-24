import {faker} from '@faker-js/faker'

describe('Novas transações', () => {
    context('Cadastrar e excluir transações em uma lista', () => {
    
       
        it('Cadastrar Transação 1 e 2 e excluir a 1', () => {

            const valor = faker.finance.accountNumber(4)
            
            cy.new_transacao(faker.name.firstName(), valor)
            cy.new_transacao("Transação2", 300)
            cy.get('[data-index="1"] > .description').should("have.text", "Transação2")
            cy.contains(".description", "Transação2").parent().find('img').click()
            cy.get('tbody tr').should("have.length", 1)
            
           
            
            
        });
        
        it('Cadastrar transação ', () => {
            cy.new_transacao("Transação2", 300)
            cy.get('.description').should("have.text", "Transação2")
            
        });


    });

    context('Cadastrar uma trasação TESTE 2', () => {
        it('Testando Xpath', () => {
            cy.visit("https://devfinance-agilizei.netlify.app/#")  
            cy.get("a[class='button new']") //*[@id="transaction"]/a

        });
    });
    
});

function CadastroTransacao(descricao, valor) {
    cy.contains("Nova").click()
    cy.get('#description').type(descricao)
    cy.get('#amount').type(valor)
    cy.get('#date').type("2025-07-18")
    cy.get('button').click()
    
}