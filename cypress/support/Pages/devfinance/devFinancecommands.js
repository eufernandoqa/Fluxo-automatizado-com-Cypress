

 import Urls from "./Urls-devfinance/Urls"
 import seldevfinance from "./selectors-devfinance/seldevfinance"

 Cypress.Commands.add('login2', () => {
        cy.visit(Urls.Url)
})
 
Cypress.Commands.add('new_transacao', (descriçao, valor) => {
        cy.visit(Urls.Url)
        cy.get(seldevfinance.novaTransção).click()
        cy.get(seldevfinance.descrição).type(descriçao)
        cy.get(seldevfinance.valor).type(valor)
        cy.get(seldevfinance.data).type("2025-05-25")
        cy.get(seldevfinance.salvar).click()
})    



Cypress.Commands.add ('Validation1', (descrição) => {

        cy.get(seldevfinance.valDescrição).should("have.text", descrição)

        })
        
        