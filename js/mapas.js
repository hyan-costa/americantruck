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
                        //faz requqrimento quando o evento é acionado
        acao.addEventListener('click', () => {      
            
            var nome = document.getElementById("entrada").value; // id do input
        
            axios.get(`http://localhost:3000/`+nome).then((dados) => {
                //campo.value
                
                for(item of dados.data) 
                {
                    


                    const atributo1 = `${item.cidade}`;
                    document.getElementById("1"). textContent = atributo1;

                    const atributo2 =`Estado: ${item.estado}`;
                    document.getElementById("2").textContent = atributo2;

                    const atributo3 =`Rota: ${item.rota}`;
                    document.getElementById("3").textContent = atributo3;

                    const atributo4 =`Garagem: ${item.garagem}`;
                    document.getElementById("4").textContent = atributo4;

                    const atributo5 =`Oficína: ${item.oficina}`;
                    document.getElementById("5").textContent = atributo5;

                    const atributo6 =`concessionária: ${item.concessionaria}`;
                    document.getElementById("6").textContent = atributo6;

                    const atributo7 =`Empresa principal: ${item.principal_empresa}`;
                    document.getElementById("7").textContent = atributo7;


                    
            
        
                }
               
            }).catch(erro => alert(erro));
                
    });
