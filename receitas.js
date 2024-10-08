// Vetor de receitas no formato JSON
const receitas = [
    {
        titulo: "Bolo de Cenoura",
        imagem: "C:\\Users\\User\\Documents\\Programação\\Estacio\\Exemplojs\\Imagens\\365326-original.jpg", // Certifique-se de ter a imagem correspondente
        preparo: "Misture os ingredientes e asse por 40 minutos.",
        ingredientes: ["3 cenouras", "2 xícaras de açúcar", "3 ovos", "2 xícaras de farinha de trigo", "1 colher de fermento em pó"]
    },
    {
        titulo: "Pão de Queijo",
        imagem: "images/pao-queijo.png", // Certifique-se de ter a imagem correspondente
        preparo: "Misture os ingredientes e asse por 25 minutos.",
        ingredientes: ["1 xícara de leite", "3 xícaras de polvilho", "1 xícara de queijo ralado", "2 ovos"]
    },
    {
        titulo: "Brigadeiro",
        imagem: "images/brigadeiro.png", // Certifique-se de ter a imagem correspondente
        preparo: "Misture todos os ingredientes e cozinhe até engrossar.",
        ingredientes: ["1 lata de leite condensado", "2 colheres de achocolatado", "1 colher de manteiga", "Chocolate granulado para decorar"]
    }
];

// Função para gerar a lista de ingredientes
function getListaIngredientes(receita) {
    // Inicia a lista com a tag <ul>
    let lista = "<ul>";
    
    // Adiciona cada ingrediente como um item <li> usando map e reduce
    lista += receita.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).reduce((acc, item) => acc + item, "");

    // Fecha a lista e retorna o HTML
    lista += "</ul>";
    return lista;
}

// Função para gerar o card da receita
function getCard(receita) {
    return `
        <div class="card">
            <img src="${receita.imagem}" class="card-img-top" alt="${receita.titulo}">
            <div class="card-body">
                <h5 class="card-title">${receita.titulo}</h5>
                <div class="card-text">
                    ${getListaIngredientes(receita)} <!-- Lista de ingredientes -->
                    <hr>
                    <p>${receita.preparo}</p> <!-- Instruções de preparo -->
                </div>
            </div>
        </div>
    `;
}

// Função para preencher o catálogo com os cards de receitas
function preencheCatalogo() {
    const pnlCatalogo = document.getElementById('pnlCatalogo'); // Captura a div pnlCatalogo

    // Gera os cards das receitas usando map e join
    pnlCatalogo.innerHTML = receitas.map(getCard).reduce((acc, card) => acc + card, "");
}
