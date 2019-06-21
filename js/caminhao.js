/*var campo = document.querySelector('input');

axios.get(`http://localhost:3000/peterbilt_579_duty_cabin`).then((dados) => {
    

    campo.addEventListener('blur', () => {
        //campo.value
        
        for(item of dados.data) {
            console.log(item.img);
            document.querySelector('p').prepend(item.img);
            //item.includes("")

        }
     
        var nomeDaImagem = 'download.jpeg';   
        var imagem = document.createElement('img');
        imagem.src = 'imgs/' + nomeDaImagem;
        document.querySelector('div').prepend(imagem);

    });

});*/
/*

function buscarCep(event, form){
    event.preventDefault();

    const inputCep = form.cep;
    
    if(inputCep){
        const cep = inputCep.value;
        
            const URL = `http://localhost:3000/${cep}`;
            axios.get(URL)
            .then(resposta => mostrarResposta (resposta.data))
            .catch(erro => console.error(erro));
        
    }
}

function mostrarResposta(cep){
    const mensagem = `
    Cep: ${cep.nome},
    Cidade: ${cep.marca},
    Estado: ${cep.serie}`;
    alert(mensagem);
}  
*/
/*
var ajax = new XMLHttpRequest(); 
var nome = el:'#txtnome';
console.log(nome);
ajax.open("get","http://localhost:3000/kenworth_t680_mid_roof_sleeper",true);

ajax.send();

ajax.onreadystatechange = function(){
    if(ajax.readyState == 4 && ajax.status == 200){
        var data = ajax.responseText;
         document.querySelector('p').prepend(data);
    }
}

*/












    /*

    // faz requerimento e pega o valor do campo para o diretório
    var campo = document.querySelector('input');
    
    campo.addEventListener('blur', () => {

        var nome = document.getElementById("txtnome").value;
        
    axios.get(`http://localhost:3000/`+nome).then((dados) => {
       
    console.log(nome);

    
        //campo.value
        
        for(item of dados.data) {
            console.log(item.img);
            document.querySelector('p').prepend(item.volante);
            //item.includes("")

        }
     
        
    }).catch(erro => console.error(erro));

});
*/

//troca de spaço para 
/*
var campo = document.querySelector('input');


    campo.addEventListener('blur', () => {
    $(document).ready(function(){

    $('input[type="text"]').each(function(){
        var val = $(this).val().replace(' ','_');

        $(this).val(val);
        console.log(val);
        
    });
        });

            });

*/












        
var campo = document.querySelector('input');
var acao = document.querySelector('button');
//var fim = document.querySelector('footer');
                //captura a tecla spaço



campo.addEventListener("keydown", (evt) => {
                    if(evt.key ==" ")
                    {
                        //transforma o spaço em _
                        $(document).ready(function(){   
    
                            $('input[type="text"]').each(function(){
                                evt = $(this).val().replace(' ','_');
                        
                                $(this).val(evt);
                                
                             });
                        
                        });
                    }

                });
                        //faz requerimento quando o evento é acionado
        acao.addEventListener('click', () => {      
            //document.getElementById("ini").remove();
            var nome = document.getElementById("entrada").value; // id do input
        
            axios.get(`http://localhost:3000/`+nome).then((dados) => {

                function info(){

                    

                    const atributo1 = ` ${item.nome}`;
                    document.getElementById("1").textContent = atributo1;

                    const atributo2 =`Marca: ${item.marca}`;
                    document.getElementById("2").textContent = atributo2;

                    const atributo3 =`Série: ${item.serie}`;
                    document.getElementById("3").textContent = atributo3;

                    const atributo4 =`Chassi: ${item.chassi}`;
                    document.getElementById("4").textContent = atributo4;

                    const atributo5 =`Cabine: ${item.cabine}`;
                    document.getElementById("5").textContent = atributo5;

                    const atributo6 =`Volante: ${item.volante}`;
                    document.getElementById("6").textContent = atributo6;

                    const atributo7 =`Potência do Motor: ${item.potencia_do_motor}`;
                    document.getElementById("7").textContent = atributo7;

                    const atributo8 =`Torque do Motor: ${item.torque_do_motor}`;
                    document.getElementById("8").textContent = atributo8;

                    const atributo9 =`Transmissão: ${item.transmissao}`;
                    document.getElementById("9").textContent = atributo9;

                    const atributo10 =`Cap. do Tanque: ${item.capacidade_do_tanque}`;
                    document.getElementById("10").textContent = atributo10;

                    const atributo11 =`PREÇO $: ${item.preco}`;
                    document.getElementById("11").textContent = atributo11;


                    var nomeDaImagem = item.img;   
                    var imagem = document.createElement('img');
                    imagem.src = 'imgs/' + nomeDaImagem;
                    var img = document.getElementById("imagem");
                    img.innerHTML = '';
                    img.prepend(imagem);
                }
                
                for(item of dados.data) 
                {
                    info();
                }
               
            }).catch(erro => alert(erro));
                
    });
