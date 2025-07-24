

describe('Transações', () => {

        // hooks -> executar antes ou depois de cada teste ou de todos
        //before - executar um código 'uma vez' antes de cada teste 
        //after - executar um código 'uma vez' depois de cada teste 
        //beforeEach - executar um código 'antes' de cada teste (cada it)
        //afterEach - executar um código 'depois' de cada teste (cada it)
        beforeEach(() => {
        cy.visit("https://devfinance-agilizei.netlify.app/#")    
        });
    it('Cadasrar uma entrada', () => {
        
        //Comando puxando da função
        CriarTransacao("Entrada Teste", 500)
        CriarTransacao("Saída Teste", -200)
        //um dos tipos de assert (Afirmar que uma determinada palavra cadastrada ou uma mensagem de confirmação é exibiba em tela)
        cy.get('[data-index="0"] > .description').should("have.text", "Entrada Teste")
    });
        //Cada it pode ser considerado um fluxo de teste diferente. Ex.: it('Teste 1', () => { }); it('Teste 2', () => { }); it('Teste 3', () => { }); todos agrupados em um describe()
    it('Cadastrar uma Saída', () => {
        //Comando puxando da função
        CriarTransacao("Saída Teste", -200)
        //um dos tipos de assert (Afirmar que uma determinada palavra cadastrada ou uma mensagem de confirmação é exibiba em tela)
        cy.get('[data-index="0"] > .description').should("have.text", "Saída Teste")
        
    });

    it('Excluindo item de uma lista (Excluindo uma Transação', () => {
        CriarTransacao("Entrada Teste", 300)
        CriarTransacao("Entrada Teste 2", 500)
        CriarTransacao("Entrada Teste 3", 100)

        //1 Primeiro utilizar o seletor CSS (inspecionar) para inspecionar o item que deseja exluir e identificar e mapear as referências para chegar nele.
        //2 Utilizando o comando contains informar as referencias Ex.: contains (".description", "Teste") -> que cotenha description e o texto Teste
        //3 Utilizar o comando .parent() -> ele navega para o elemento pai(elemento acima)  com base nas referências passadas
        //4 Utilizar o .find para encontrar dentro das referências passadas um determinado elemento Ex.: .find('img')
        //5 No caso deste teste se trata de um botão, então com base na busca é só dar o comando .click()
        cy.contains(".description", "Entrada Teste") // td (coluna da tabela) referencia
        .parent() //tr (linha da tabela)
        .find('img') // elemento que precisamos
        .click()
        //neste assert está sendo verificado se a quantidade de linhas na tabela é igual a 2. No caso quantos tr tem neste tbody e o esperado é 2.
        cy.get('tbody tr').should("have.length", 2)

        
    });

    
});

        //function (geralmente criado em comandos costumizados) é utilizado para evitar testes com mesmo código e valores diferentes precise ser digitado vária vezes,
        //nesse caso é criado uma function passando todos os comandos e eperado que seja informado apenas os valores e vai ser utilizada desta forma 'function CriarTransacao (Teste, 100)'
function CriarTransacao (descricao, valor) {
     cy.contains("Nova Transação").click()
        cy.get('#description').type(descricao)
        cy.get('#amount').type(valor)
        cy.get('#date').type("2025-07-16") //yyy-mm-dd
        cy.contains('button', 'Salvar').click()
    
}