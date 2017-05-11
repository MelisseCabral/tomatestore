(function (){
    var estoque = document.getElementById("estoque");
    var vendas = document.getElementById("vendas");
    var cadastroVenda = document.getElementById("cadastroVendas");
    var registroEntrada = document.getElementById("registroEntrada");
    var config = document.getElementById("config");

    estoque.addEventListener("click", showEstoque(){
        var title = document.getElementById("title-screen");
        title.value = "Estoque";
    });

    vendas.addEventListener("click", showVendas(){

    });

    cadastroVenda.addEventListener("click", showCadastroVenda(){

    });

    registroEntrada.addEventListener("click", showRegistroEntrada(){

    });

    config.addEventListener("click", showRegistroEntrada(){

    });
})
