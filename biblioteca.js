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
            listarLivros()
            break
        case("3"):
            
            break
        case("4"):

            break
        case("0"):
            sairSistema()
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
                genero: genero,
                status: "quero ler"
            }
            livros.push(livro)
        }
    }

    function listarLivros(){
        if(livros.length === 0){
            console.log("\nNão há nenhum livro para listar;")
        }else{
            console.log("\n--Listagem de livros--\n")
            for(let i = 0; i < livros.length; i++){
                let livroAtual = livros[i]
                console.log(`${i + 1}. [${livroAtual.status}] ${livroAtual.titulo} - ${livroAtual.genero} - ${livroAtual.autor}`)
            }
        }
    }

    function sairSistema(){
        console.log("\n...Saindo do sistema...\n")
        indice = false
    }