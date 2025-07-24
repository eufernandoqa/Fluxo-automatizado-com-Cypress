// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


//Sempre que catalogar os elementos de paginas, eles devem ser importados para este arquivo conforme feito abaixo.
import Urls from './Urls-Serverrest/Urls'
import selLoginServerest from './Selectors-Serverest/sel.Login.Serverest'
import selUsersServerest from './Selectors-Serverest/sel.Users.Serverest'


// Essas são as funções, código base que é executado nos testes. Abaixo estão suas estruturas, cada comando, cada elemento que sera sencibilizado.
// Os elementos que estão sendo passados vem dos arquivos json de elementos catalogados, dessa forma apenas referenciamos eles
// Sempre que criar um novo arquivo commands, deve importar na pasta e2e.js. se não irá dar erro is not a function
Cypress.Commands.add('login', (email, senha) => {
    cy.visit(Urls.login)
    cy.get(selLoginServerest.email).type(email)
    cy.get(selLoginServerest.senha).type(senha)
    cy.get(selLoginServerest.entrar).click()
    cy.get('h1').should("have.text", 'Bem Vindo  Fulano da Silva') 
})

Cypress.Commands.add('new_user', (nome, email, senha) => {
    cy.visit(Urls.users)
    cy.get(selUsersServerest.nome).type(nome)
    cy.get(selUsersServerest.email).type(email)
    cy.get(selUsersServerest.senha).type(senha)
    cy.get(selUsersServerest.checbox).click()
    cy.get(selUsersServerest.cadastrar).click()
    
})

