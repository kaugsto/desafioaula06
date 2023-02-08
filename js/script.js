const body = window.document.body;

function carregarProdutos(){

    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.innerHTML = "Galeria de Produtos";
    header.appendChild(h1);

    const main = document.createElement('main');

    var i = 0;

    while (i < listaProduto.length) {

        var divProduto = document.createElement('div');
        var imgProduto = document.createElement('img');
        var h2NomeProduto = document.createElement('h2');
        var h3MarcaProduto = document.createElement('h3');
        var pPreco = document.createElement('p');
    
        //Adicionamos uma imagem que vem do Array listaProduto.
        imgProduto.setAttribute ("src",listaProduto[i].thumbnail);

        //Adicionamos uma class com nome imgProduto.
        imgProduto.setAttribute ("class", "imgProduto");

        //Adicionamos uma class com nome divProduto.
        divProduto.setAttribute ("class", "divProduto");
        
        /*Basicamente atrelamos um item (title) de um dos objetos({}) do ARRAY[] listaProduto na tag H2 do HTML*/
        h2NomeProduto.innerHTML = listaProduto[i].title;

        /*Basicamente atrelamos um item (brand) de um dos objetos({}) do ARRAY[] listaProduto na tag H3 do HTML*/
        h3MarcaProduto.innerHTML = listaProduto[i].brand;

        /*Basicamente atrelamos um item (price) de um dos objetos({})do ARRAY[] listaProduto na tag p do HTML */
        pPreco.innerHTML = listaProduto[i].price;
    
        divProduto.appendChild(imgProduto);
        divProduto.appendChild(h2NomeProduto);
        divProduto.appendChild(h3MarcaProduto);
        divProduto.appendChild(pPreco);
        main.appendChild(divProduto);
        
        i++;
    
    }



    body.appendChild(header);
    body.appendChild(main);
    
}

body.addEventListener("load", carregarProdutos());