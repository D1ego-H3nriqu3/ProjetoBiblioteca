import PromptSync from "prompt-sync";
const prompt = PromptSync()

let livro = []

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