// Primeira verificaçao é se meu JS esta devidamente linkado no meu HTML, com console.log.
console.log("O JS está linkado!");


// Entao para fazer acontecer algo preciso de uma funçao
//Vamos criar uma funçao para verificar se os inputs estao funcionando
//Para isso, vamos criar uma funcao chamada verificarInputs.

//Tudo que esta dentro de uma function so sera executada quando é chamada

function verificarInputs() {
    // Vamo verificar se os inputs estão coletando os dados corretamente.
    // Para isso, vamos criar uma variavel para cada input.

    let titulo = document.getElementById("input-titulo").value;
    let preco = document.getElementById("input-titulo").value;
    let descricao = document.getElementById("input-descricao").value;
    let plataforma = document.getElementById("input-plataforma").value;
    let imglink = document.getElementById("input-imglink").value;

    // Vamos dar um console para cada variavel.

    console.log("Título: " + titulo);
    console.log("Preço: " + preco);
    console.log("Descrição: " + descricao);
    console.log("Plataforma: " + plataforma);
    console.log("Link da Imagem: " + imglink);


    //Vamos entao criar uma verificaçao se os inputs estao vazios, pois se estiverem vazios eu 
    //preciso de um alerta para o usuario ou uma mensagem de erro.

    //Para isso, vamos criar uma condicional IF

    if (titulo == '' || preco == '' || descricao == '' || plataforma == '' || imglink == '') {

        // Verificar se o IF esta funcionando
        console.log("Os dados estão vazios");

        // Como esse é o primeiro IF de verificacao, vamos criar uma funcao que envia/colocana tela
        // a mensagem de erro. Usando a div que ja temos com id msg.

        return true;
    } else {
        console.log("Os dados não estão em branco");
        return false;
    }
}

function envieMsg(msg, tipo) {
    //Essa funcao vai colocar uma msg que vem parametro na tela do usuario. Logo a primeira coisa que eu tenho que fazer
    // e´usar as tecnicas de HTML com JS
    let msgdiv = document.getElementById("msg");

    const msgParaTela = `
        <p class= "${tipo}" > ${msg}</p>
        `
    msgdiv.innerHTML += msgParaTela;


    //O timeout 
    setTimeout(function () {
        msgdiv.innerHTML = "";
    }, 3000);
}


//Agora temos os dados validados se estao vazios ou nao.
//Temos os valores dos inputs passando para as variaveis agora preciso criar
//A class no singular, ou seja, se estou trabalhando com jogos, agora crio o jogo.

//Sintaxe da class
class Jogo {
    //Apos criar a class preciso criar meu contructor.
    //E nele eu irei passar todas as propriedades exeto: arrays e prorpiedades que serao
    // calculadas por alguma funcao que eu desenvolva.
    constructor(titulo,preco,descricao,plataforma,imglink){
        //Fazer as referencias das variaveis usando o THIS.
        //Aqui ira aparecer tambem os arrays (s)e precisar) e as propriedades que serao
        //calculadas com alguma funcao/metodo.
        this.titulo = titulo;
        this.preco = preco;
        this.descricao = descricao;
        this.plataforma = plataforma;
        this.imglink = imglink;

        //Apos criar o contructor, verificar se ele esta funcionando.
    }


}

//Verificacao do objeto jogo, instancia ou criar.
//Criar um objeto com o tipo dele e uma variavel do nome ou o que preferir.


//Apos criar esse objeto dou um console para verificar se ele esta sendo montado.

//Se meu objeto estiver no console, meu contructos esta ok.

//Se OK, eu agora vou compor os meus jogos, como ?
//Eu pego os valores dos inputs e instancio do objeto do tipo jogo, porem eu tenho que ser generico.

function comporJogo() {

    //Para compor meu jogo eu preciso pegar os valores dos inputs.
    //Para isso, eu preciso criar uma variavel para cada input.
    let titulo = document.getElementById("input-titulo").value;
    let preco = document.getElementById("input-preco").value;
    let descricao = document.getElementById("input-descricao").value;
    let plataforma = document.getElementById("input-plataforma").value;
    let imglink = document.getElementById("input-imglink").value;

    //Agora eu preciso instanciar/montar um objeto do tipo Jogo.
    //So´que ao inves de digitar os valores manualmente, eu vou pegar os valores das variaveis
    const jogo = new Jogo (titulo,preco,descricao,plataforma,imglink);

    //Agora vou testar se meu objeto esta pegando os valores do input e sendo mostrado

    console.log(jogo);

    //Agora eu preciso armazenar esse jogo, em uma lista.
    //Entao eu preciso criar uma class de lista de jogos.

    //Apos criada,eu volto e uso o metodo add aqui.
    bibliotecaJogos.add(jogo);

    //Apos adicionar na lista, eu volto para a instancia dda class e dou um console.log
    //nela,para ver se minha lista esta sendo criada

    //Exibir usando minha funcao render

    
}

    


class ListJogos {
    // Como sera uma lista, eu preciso criar um this.listaqualquer.
    //Com array vazio.
    constructor() {
        this.bibliotecaJogosJogos = [];
    }
    //A lista sempre sera uma class de acao, logo vou precisar
// de metodos, qual seria o primeiro metodo de acao ?
//O primeiro e mais importante metodo é conseguir adicionar
// algo nessa lista, o nosso caso add Jogo em Lista de Jogos

//Sintaxe dessa classe, o nome(){}

//Quando eu vou adicionar algo, eu vou precisar saber o que, logo eu uso paramentro

add(parametro){
    //Entao precisamos pegar o jogo que foi composto la na linha  117
    //E dar um push no array que foi criado na linha 
  // contructor () 
    //this.bibliotecaJogos.push(parametro);

   //Aqui faremos as verificacoes, antes de adicionar jogo, dentro do array
   //usando as funcoes que temos de acoes
    
   if (verificarInputs ()) {
    envieMsg("Preencha todos os campos", "erro")
   } else {
    this.bibliotecaJogosJogos.push(parametro);
    limparInputs();
    envieMsg("Cadastrado com sucesso","sucesso")
    console.log(this.bibliotecaJogosJogos);
    renderizarConteudo();
   }

    //parametro é quem ?
    //é jogo, que foi instanciado na linha

    //E apos criar esse metodo, agora eu volto para a funcao
    //comporJogo e uso apos a instancia a acao/metodo add.
    //Mas antes eu preciso ter uma bibliotecaJogos instanciada de forma global, criei ele na linha seguinte da class.
}
}

//Criar/instanciar minha lista de jogos
const bibliotecaJogos = new ListJogos();
//Console que verifica se minha lista esta sendo criada
console.log(bibliotecaJogos);
//Apos cadastrar um jogo, eu posso direto no console, digitar o nome da lista
//para verificar se esta cadastrando.

//Criar uma funcao que nos auxilia, e limpa todos os campos para mim.
//Uso ela sempre que precisar

function limparInputs (){
   // console.log("usei a função de limparInputs")
    //Pego o valor dela, e defino como vazio.
     document.getElementById("input-titulo").value = "";
     document.getElementById("input-preco").value = "";
     document.getElementById("input-descricao").value = "";
     document.getElementById("input-plataforma").value = "";
     document.getElementById("input-imglink").value = "";
}

//Tendo certeza que meu array
//Lista de algo,esta sendo contruida e armazenando todos os itens.

//Entao, eu crio uma funcao que fica responsavel por colocar
//Renderizar(mostrar) os itens de dentro do meu objeto na tela.

function renderizarConteudo(){
    //variavel para armazenar o innerHTML, que é reponsavel por rnderizar na tela

    const listaHTML = document.getElementById("containerLista");

    //faço meu laço de repeticao que cria um elemento HTML para cada elemento
    // do meu objeto. Usando de preferencia forEach.


    //preciso pegar minha lista/array de objetos, no nosso caso: Jogos

    let array = bibliotecaJogos.bibliotecaJogosJogos;

    //verificar se meu array esta vindo certo
    let jogosDiv = '';    
    array.forEach(jogo => {
        //aqui no forEach meu elemento é jogo, ou seja, o singular dos itens que eu tenho
        //dentro do array.No nosso caso,array tem jogos, entao usamos jogo.
        

        //crio uma div em html, dentro do JS mesmo.
        //que vai ser colocada dentro da div, que esta esperando no html

         jogosDiv += `
            <div class = "jogoDetalhe">
                <p> Título: ${jogo.titulo}</p>
                <p> Preço: ${jogo.preco}</p>
                <p> Descrição: ${jogo.descricao} </p>
                <p> Plataforma: ${jogo.plataforma}</p> 
                <img scr ="${jogo.imglink}" alt="${jogo.titulo}">
            </div>
        
        `;        
    });
    listaHTML.innerHTML = jogosDiv;

}
