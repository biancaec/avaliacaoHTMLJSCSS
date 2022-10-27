let produtos = [{ nome: "milho", segmento: "alimento", estoque: 10, preco: 2.0 },
{ nome: "feijao", segmento: "alimento", estoque: 15, preco: 2.0 },
{ nome: "pao", segmento: "alimento", estoque: 10, preco: 2.0 },
{ nome: "aveia", segmento: "alimento", estoque: 10, preco: 2.0 },
{ nome: "farinha de trigo", segmento: "alimento", estoque: 10, preco: 2.0 },
{ nome: "farinha de aveia", segmento: "alimento", estoque: 10, preco: 2.0 },
{ nome: "leite", segmento: "alimento", estoque: 10, preco: 2.0 },
{ nome: "bolacha", segmento: "alimento", estoque: 10, preco: 2.0 },
{ nome: "molho de tomate", segmento: "alimento", estoque: 10, preco: 2.0 },
{ nome: "massa para lasanha", segmento: "alimento", estoque: 10, preco: 2.0 },
{ nome: "caderno", segmento: "escolar", estoque: 10, preco: 2.0 },
{ nome: "agenda", segmento: "escolar", estoque: 10, preco: 2.0 },
{ nome: "caneta", segmento: "escolar", estoque: 10, preco: 2.0 },
{ nome: "lapis", segmento: "escolar", estoque: 10, preco: 2.0 },
{ nome: "borracha", segmento: "escolar", estoque: 10, preco: 2.0 },
{ nome: "lapis de cor", segmento: "escolar", estoque: 10, preco: 2.0 },
{ nome: "regua", segmento: "escolar", estoque: 10, preco: 2.0 },
{ nome: "marcador de texto", segmento: "escolar", estoque: 10, preco: 2.0 },
{ nome: "cola", segmento: "escolar", estoque: 10, preco: 2.0 },
{ nome: "cartolina", segmento: "escolar", estoque: 10, preco: 2.0 },
{ nome: "begonia rex", segmento: "planta", estoque: 10, preco: 2.0 },
{ nome: "begonia maculata", segmento: "planta", estoque: 10, preco: 2.0 },
{ nome: "flor de maio", segmento: "planta", estoque: 10, preco: 2.0 },
{ nome: "samambaia", segmento: "planta", estoque: 10, preco: 2.0 },
{ nome: "violeta africana", segmento: "planta", estoque: 10, preco: 2.0 },
{ nome: "flor camarao", segmento: "planta", estoque: 10, preco: 2.0 },
{ nome: "petunia", segmento: "planta", estoque: 10, preco: 2.0 },
{ nome: "peperomia melancia", segmento: "planta", estoque: 10, preco: 2.0 },
{ nome: "orquidea mariposa", segmento: "planta", estoque: 10, preco: 2.0 },
{ nome: "columeia peixinho", segmento: "planta", estoque: 10, preco: 2.0 }]

let carrinho = []
atualizarCarrinho()

function sortProducts() {
    let numberOfProducts = produtos.length
    let sorteados = []
    let number
    do {
        number = Math.floor(Math.random() * numberOfProducts)
        if (sorteados.indexOf(number) == -1) {
            sorteados.push(number)
        }
    } while (sorteados.length < 12)

    return sorteados
}

function showProducts() {
    vitrine = sortProducts()

    let divVitrine = document.getElementById("vitrine")
    for (let i = 0; i < vitrine.length; i++) {
        montarDivProduto(vitrine[i], divVitrine)
    }
}

showProducts()

function segmentoClick(id) {
    let divSegmento = document.getElementById("segmento")
    let divVitrine = document.getElementById("vitrine")
    divVitrine.style.display = "none"
    if (divSegmento.hasAttribute("style")) {
        divSegmento.removeAttribute("style")
    } else {
        let childrenToHide = document.querySelectorAll("#segmento > *")
        for (let i = 0; i < childrenToHide.length; i++) {
            childrenToHide[i].style.display = "none"
        }
    }
    let divCarrinho = document.getElementById("carrinho")

    if (!divCarrinho.hasAttribute("style")) {
        divCarrinho.style.display = "none"
        let childrenToHide = document.querySelectorAll("#carrinho > *")
        for (let i = 0; i < childrenToHide.length; i++) {
            childrenToHide[i].style.display = "none"
        }
    }

    if (id == "alimentos") {
        for (let i = 0; i < produtos.length; i++) {
            if (produtos[i].segmento == "alimento") {
                montarDivProduto(i, divSegmento)
            }
        }
    } else if (id == "escolar") {
        for (let i = 0; i < produtos.length; i++) {
            if (produtos[i].segmento == "escolar") {
                montarDivProduto(i, divSegmento)
            }
        }
    } else if (id == "plantas") {
        for (let i = 0; i < produtos.length; i++) {
            if (produtos[i].segmento == "planta") {
                montarDivProduto(i, divSegmento)
            }
        }
    }
}

function homeClick() {
    let divSegmento = document.getElementById("segmento")
    if (!divSegmento.hasAttribute("style")) {
        divSegmento.style.display = "none"
        let childrenToHide = document.querySelectorAll("#segmento > *")
        for (let i = 0; i < childrenToHide.length; i++) {
            childrenToHide[i].style.display = "none"
        }
    }
    let divCarrinho = document.getElementById("carrinho")

    if (!divCarrinho.hasAttribute("style")) {
        divCarrinho.style.display = "none"
        let childrenToHide = document.querySelectorAll("#carrinho > *")
        for (let i = 0; i < childrenToHide.length; i++) {
            childrenToHide[i].style.display = "none"
        }
    }
    let divVitrine = document.getElementById("vitrine")
    if (divVitrine.hasAttribute("style")) {
        divVitrine.removeAttribute("style")
        let childrenToShow = document.querySelectorAll("#vitrine > *")
        for (let i = 0; i < childrenToHide.length; i++) {
            childrenToShow[i].removeAttribute("style")
        }
    }

}

function montarDivProduto(i, div) {
    let divProduto = document.createElement("div")
    divProduto.setAttribute("id", "produto")
    let pNome = document.createElement("p")
    let pPreco = document.createElement("p")
    let bComprar = document.createElement("button")
    bComprar.innerHTML = "Comprar"
    bComprar.setAttribute("id", `${i}`)
    bComprar.setAttribute("onclick", "comprarClick(this.id)")
    pNome.innerHTML = produtos[i].nome
    pPreco.innerHTML = `R$ ${produtos[i].preco.toFixed(2)}`
    divProduto.append(pNome)
    divProduto.append(pPreco)
    divProduto.append(bComprar)
    div.append(divProduto)
}

function comprarClick(index) {
    let achou = false
    for (let i = 0; i < carrinho.length; i++) {
        if (index == carrinho[i].id) {
            achou = true
            carrinho[i].quantidade += 1
            break
        }
    }
    if (!achou) {
        let id = Number.parseInt(index)
        let quantidade = 0
        quantidade += 1
        carrinho.push({ id, quantidade })
    }
    atualizarCarrinho()
}

function excluirClick(index) {
    for (let i = 0; i < carrinho.length; i++) {
        if (index == carrinho[i].id) {
            carrinho[i].quantidade -= 1
            if (carrinho[i].quantidade == 0) {
                carrinho.splice(i, 1)
            }
            break
        }
    }
    atualizarCarrinho()
    carrinhoClick()
}


function atualizarCarrinho() {
    let itensCarrinho = carrinho.reduce((total, item) => total + item.quantidade, 0)
    document.querySelector("#carrinhoButton p").innerHTML = itensCarrinho
}

function carrinhoClick() {
    let divCarrinho = document.getElementById("carrinho")

    if (divCarrinho.hasAttribute("style")) {
        divCarrinho.removeAttribute("style")
    } else {
        let childrenToHide = document.querySelectorAll("#carrinho > *")
        for (let i = 0; i < childrenToHide.length; i++) {
            childrenToHide[i].style.display = "none"
        }
    }

    let divSegmento = document.getElementById("segmento")
    if (!divSegmento.hasAttribute("style")) {
        divSegmento.style.display = "none"
        let childrenToHide = document.querySelectorAll("#segmento > *")
        for (let i = 0; i < childrenToHide.length; i++) {
            childrenToHide[i].style.display = "none"
        }
    } else {
        let divVitrine = document.getElementById("vitrine")
        divVitrine.style.display = "none"
        let childrenToHide = document.querySelectorAll("#vitrine > *")
        for (let i = 0; i < childrenToHide.length; i++) {
            childrenToHide[i].style.display = "none"
        }
    }
    if (carrinho.length > 0) {
        for (let i = 0; i < carrinho.length; i++) {
            let divProduto = document.createElement("div")
            divProduto.setAttribute("id", "produto")
            let pNome = document.createElement("p")
            pNome.innerHTML = produtos[carrinho[i].id].nome
            let pQuantidade = document.createElement("p")
            pQuantidade.innerHTML = `Quantidade: ${carrinho[i].quantidade}`
            let bComprar = document.createElement("button")
            bComprar.innerHTML = "Comprar"
            bComprar.setAttribute("id", `${carrinho[i].id}`)
            bComprar.setAttribute("onclick", "comprarClick(this.id)")
            let bExcluir = document.createElement("button")
            bExcluir.innerHTML = "Excluir"
            bExcluir.setAttribute("id", `${carrinho[i].id}`)
            bExcluir.setAttribute("onclick", "excluirClick(this.id)")

            divProduto.append(pNome)
            divProduto.append(pQuantidade)
            divProduto.append(bComprar)
            divProduto.append(bExcluir)
            divCarrinho.append(divProduto)
           

        }
        let divTotal = document.createElement("div")
        divTotal.setAttribute("id", "total")
        divTotal.innerHTML = `Total: R$ ${calcularTotal().toFixed(2)}`
        divCarrinho.append(divTotal)
    }
}

function calcularTotal() {
    let total = carrinho.reduce((total, item) => total + item.quantidade * produtos[item.id].preco, 0)

    return total
}

