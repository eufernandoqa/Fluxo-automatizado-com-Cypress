//Este é um arquivo de seletotes catalogados, abaixo a estrutura do código em formato json.
//Sempre que precisar chamar estes seletores, deve apenas referencia-los no código de teste
//Dica: 1 -Nunca esquecer da virgula(,) no final de cada elemento catalogado
//Dica: 2 - Primeiro você da um nome a esse seletor, e depois informa ele Ex.: teste: "input[id='teste']"

module.exports = {
    nome: "[data-testid='nome']",
    email: "[data-testid='email']",
    senha: "[data-testid='password']",
    checbox: "[data-testid='checkbox']",
    cadastrar: "[data-testid='cadastrarUsuario']"
}