

describe('Transações', () => {
    it('Cadasrar uma entrada', () => {
        cy.visit("https://devfinance-agilizei.netlify.app/#")
        //Comando puxando da função
        CriarTransacao("Entrada Teste", 500)
        CriarTransacao("Saída Teste", -200)
        //um dos tipos de assert (Afirmar que uma determinada palavra cadastrada ou uma mensagem de confirmação é exibiba em tela)
        cy.get('[data-index="0"] > .description').should("have.text", "Entrada Teste")
    });

    
});

//function (geralmente criado em comandos costumizados) é utilizado para evitar testes com mesmo código e valores diferentes precise ser digitado vária vezes,
//nesse caso é criado uma function passando todos os comandos e eperado que seja informado apenas os valores e vai ser utilizada desta forma 'function CriarTransacao (Teste, 100)'
function CriarTransacao (descricao, valor) {
     cy.get("a[class='button new']").click()
        cy.get('#description').type(descricao)
        cy.get('#amount').type(valor)
        cy.get('#date').type("2025-07-16") //yyy-mm-dd
        cy.contains('button', 'Salvar').click()
    
}