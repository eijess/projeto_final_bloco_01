import readlineSync from 'readline-sync';
import { ProdutoController } from "./src/controller/ProdutoController";
import { Perfume } from "./src/model/Perfume";
import { Maquiagem } from "./src/model/Maquiagem";

export function menu() {
    let opcao: number;
    const produtoController: ProdutoController = new ProdutoController();
    
    while (true) {
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                PERFUMARIA BOTICARO                  ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("          1 - CRIAR PRODUTO                          ");
        console.log("          2 - LISTAR TODOS OS PRODUTOS               ");
        console.log("          3 - CONSULTAR PRODUTO POR ID               ");
        console.log("          4 - ATUALIZAR PRODUTO                      ");
        console.log("          5 - DELETAR PRODUTO                        ");
        console.log("          0 - SAIR                                   ");
        console.log("                                                     ");
        console.log("*****************************************************");

        console.log("Entre com a opção desejada: ");
        opcao = readlineSync.questionInt("");

        if (opcao == 0) {
            console.log("Obrigada por escolher a Boticaro!");
            console.log("\nPERFUMARIA BOTICARO");
            about();
            process.exit(0)
        }

        switch (opcao) {
            case 1:
                console.log("\nCRIAR PRODUTO");
                const nome = readlineSync.question("Digite o nome do produto: ");
                const tipo = readlineSync.keyInSelect(['Perfume', 'Maquiagem'], 'Selecione o tipo de produto: ');
                const preco = readlineSync.questionFloat("Digite o preço do produto: ");
                switch (tipo) {
                    case 0:
                        const marcaPerfume = readlineSync.question("Digite a marca do perfume: ");
                        produtoController.cadastrar(new Perfume(produtoController.gerarId(), nome, tipo + 1, preco, marcaPerfume));
                        break;
                    case 1:
                        const marcaMaquiagem = readlineSync.question("Digite a marca da maquiagem: ");
                        produtoController.cadastrar(new Maquiagem(produtoController.gerarId(), nome, tipo + 1, preco, marcaMaquiagem));
                        break;
                }
                keyPress();
                break;
            case 2:
                console.log("\nLISTAR TODOS OS PRODUTOS");
                produtoController.listar();
                keyPress();
                break;
            case 3:
                console.log("\nCONSULTAR PRODUTO POR ID");
                const idConsultar = readlineSync.questionInt("Digite o ID do produto: ");
                produtoController.procurarPorId(idConsultar);
                keyPress();
                break;
            case 4:
                console.log("\nATUALIZAR PRODUTO");
                const idAtualizar = readlineSync.questionInt("Digite o ID do produto: ");
                const nomeAtualizar = readlineSync.question("Digite o novo nome do produto: ");
                const tipoAtualizar = readlineSync.keyInSelect(['Perfume', 'Maquiagem'], 'Selecione o novo tipo de produto: ');
                const precoAtualizar = readlineSync.questionFloat("Digite o novo preço do produto: ");
                switch (tipoAtualizar) {
                    case 0:
                        const marcaPerfumeAtualizar = readlineSync.question("Digite a nova marca do perfume: ");
                        produtoController.atualizar(new Perfume(idAtualizar, nomeAtualizar, tipoAtualizar + 1, precoAtualizar, marcaPerfumeAtualizar));
                        break;
                    case 1:
                        const marcaMaquiagemAtualizar = readlineSync.question("Digite a nova marca da maquiagem: ");
                        produtoController.atualizar(new Maquiagem(idAtualizar, nomeAtualizar, tipoAtualizar + 1, precoAtualizar, marcaMaquiagemAtualizar));
                        break;
                }
                keyPress();
                break;
            case 5:
                console.log("\nDELETAR PRODUTO");
                const idDeletar = readlineSync.questionInt("Digite o ID do produto a ser deletado: ");
                produtoController.deletar(idDeletar);
                keyPress();
                break;
            default:
                console.log("\nOPÇÃO INVÁLIDA!");
                keyPress();
                break;
        }
    }
}

function keyPress(): void {
    console.log("\nPressione enter para prosseguir");
}

function about(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Jessica Ignácio");
    console.log("Generation Brasil - jessica_costaignacio@hotmail.com");
    console.log("github.com/eijess");
    console.log("*****************************************************");
}

menu();
