

describe('Transações', () => {
    it('Cadasrar uma entrada', () => {
        cy.visit("https://devfinance-agilizei.netlify.app/#")
        cy.contains("Nova Transação").click()
        cy.get('#description').type("Entrada Teste")
        cy.get('#amount').type("500")
        cy.get('#date').type("2025-07-16") //yyy-mm-dd
        cy.contains('button', 'Salvar').click()
        cy.contains("Nova Transação").click()
        cy.get('#description').type("Saída Teste")
        cy.get('#amount').type("-200")
        cy.get('#date').type("2025-07-16") //yyyy-mm-dd
        cy.contains('button', 'Salvar').click()
        //um dos tipos de assert (Afirmar que uma determinada palavra cadastrada ou uma mensagem de confirmação é exibiba em tela)
        cy.get('[data-index="0"] > .description').should("have.text", "Entrada Teste")
    });
    //Cada it pode ser considerado um fluxo de teste diferente. Ex.: it('Teste 1', () => { }); it('Teste 2', () => { }); it('Teste 3', () => { }); todos agrupados em um describe()
    it('Cadastrar uma Saída', () => {
        cy.visit("https://devfinance-agilizei.netlify.app/#")
        cy.contains("Nova Transação").click()
        cy.get('#description').type("Saída Teste")
        cy.get('#amount').type("-200")
        cy.get('#date').type("2025-07-16") //yyyy-mm-dd
        cy.contains('button', 'Salvar').click()
        //um dos tipos de assert (Afirmar que uma determinada palavra cadastrada ou uma mensagem de confirmação é exibiba em tela)
        cy.get('[data-index="0"] > .description').should("have.text", "Saída Teste")

        
    });


});