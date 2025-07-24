import ButtonsSystem from "../support/Pages/Buttons";
import Transacition from "../support/Pages/NewTransaction";
import Validations from "../support/Pages/Validações";


var Nova = new Transacition()
var btn = new ButtonsSystem()
var val = new Validations()

describe('Novas transações', () => {
    context('Cadastrar e excluir transações em uma lista', () => {
        
        beforeEach(() => {
            cy.visit("https://devfinance-agilizei.netlify.app/#")  
        });
        it('Cadastrar Transação 1 e 2 e excluir a 1', () => {
            
            CadastroTransacao("Transação1", 500)
            CadastroTransacao("Transação2", 300)
            cy.get('[data-index="1"] > .description').should("have.text", "Transação2")
            cy.contains(".description", "Transação2").parent().find('img').click()
            cy.get('tbody tr').should("have.length", 1)
            
           
            
            
        });
        
        it('Cadastrar transação ', () => {
            CadastroTransacao("Transação2", 300)
            cy.get('.description').should("have.text", "Transação2")
            
        });


    });

    context('Cadastrar uma trasação TESTE 2', () => {
        it('Visitar o site', () => {
            Nova.NewTrans('Transação2', 500)
            btn.ButtonSave()
            val.Validation1('Transação2')
   
        });


        it.only('Testando Xpath', () => {
            cy.visit("https://devfinance-agilizei.netlify.app/#")  
            cy.get('[@id="transaction"]/a')

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