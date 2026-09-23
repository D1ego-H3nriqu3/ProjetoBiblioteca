import PromptSync from "prompt-sync";
const prompt = PromptSync()

let livros = []

let indice = true

do{
    console.log(`\n=== Biblioteca Pessoal ===
1. Cadastrar livro
2. Listar livros
3. Atualizar status de leitura
4. Remover livro
0. Sair`)
    let resposta = (prompt("Escolha uma opção: ")).trim()

    switch(resposta){
        case("1"):
            cadastrarLivro()
            break
        case("2"):

            break
        case("3"):

            break
        case("4"):

            break
        case("0"):

            break
        default:
            console.log("\nEscolha uma opção correspondente;")
    }

}while(indice === true)

    function cadastrarLivro(){
        console.log("\n--Cadastro--\n")
        let titulo = (prompt("Informe o título do livro: ")).trim()
        let autor = (prompt("Agora, informe o autor do livro: ")).trim()
        let genero = (prompt("Por último, informe o gênero do livro: ")).trim()

        if(titulo === "" || autor === "" || genero === ""){
            console.log("\nAlguma informação foi preenchida incorretamente!")
            cadastrarLivro()
        }else{
            console.log("\nLivro cadastrado com sucesso!")
            let livro = {
                titulo: titulo,
                autor: autor,
                genero: genero
            }
            livros.push(livro)
        }
    }