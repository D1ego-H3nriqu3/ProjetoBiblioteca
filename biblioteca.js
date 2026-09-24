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
            attStatus()
            break
        case("4"):
            removerLivro()
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

    function attStatus(){
        if(livros.length === 0){
            console.log("\nNão há nenhum livro para ter o status atualizado;")
        }else{
            console.log("\n--Atualização de Status--\n")
            let numLivro = Number(prompt("Qual o número do livro em questão? "))
            if(isNaN(numLivro) || numLivro <= 0 || numLivro > livros.length){
                console.log("\nLivro não encontrado;")
                attStatus()
            }else{
                let livroAtual = livros[numLivro - 1]
                let novoStatus = (prompt("Informe o novo status do livro - (quero ler/lendo/lido): ")).trim().toLowerCase()
                livroAtual.status = novoStatus
                verificacaoStatus(novoStatus)
            }
        }
    }

    function verificacaoStatus(novoStatus){
        let status = ["quero ler", "lendo", "lido"]
        if(status.includes(novoStatus)){
            console.log("\nStatus atualizado com sucesso!")
        }else{
            console.log("\nStatus inválido. Use 'quero ler', 'lendo' ou 'lido'.")
            attStatus()
        }
    }

    function removerLivro(){
        if(livros.length === 0){
            console.log("\nNão há nenhum livro para ser removido;")
        }else{
            console.log("\n--Remoção de livro--\n")
            let numLivro = Number(prompt("Qual o número do livro que gostaria de remover? "))
            if(isNaN(numLivro) || numLivro <= 0 || numLivro > livros.length){
                console.log("\nLivro não encontrado;")
                removerLivro()
            }else{
                let livroAtual = livros[numLivro - 1]
                livros.splice(livroAtual,1)
                console.log("\nLivro removido com sucesso!")
            }
        }
    }

    function sairSistema(){
        console.log("\n...Saindo do sistema...\n")
        indice = false
    }