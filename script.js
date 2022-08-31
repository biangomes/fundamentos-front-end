/*
 botoes :   guarda uma LISTA de LINKS com o botao EXCLUIR
*/
window.onload = function() {
    
    let botoes = document.querySelectorAll("a.excluir");
    //console.log(botoes);
    
    // mesma coisa ---> function nome() { }
    botoes.forEach(item => {
        item.addEventListener('click', () => {
            if (confirm("Deseja realmente excluir?")) {
                item.parentNode.parentNode.remove();
            }
        })
    });

    //let xhr = new XMLHttpRequest();
    let botaoCarregar = document.querySelector("a#load");
    
    if (botaoCarregar) { 

        
        // ao clicar, localizar a tabela e abrir a conexao com a URL abaixo
        botaoCarregar.addEventListener("click", () => {
            let tabela = document.querySelector("table");
            let url = "http://my-json-server.typicode.com/danielnsilva/json/profissionais";

            // FETCH API
            fetch(url)
            .then((response) => response.json())
            .then((dados) => {
                for (let item in dados) {
                    let linha = document.createElement("tr");
                    let id = document.createElement("td");
                    let nome = document.createElement("td");
                    let registro = document.createElement("td");
                    let especialidade = document.createElement("td");
                    let unidade = document.createElement("td");
                    let telefone = document.createElement("td");
                    let email = document.createElement("td");
                    let acoes = document.createElement("td");
                    id.classList.add("fit");        // equivalente a criar uma classe em um elemento HTML
                    
                    // TODO: entender a diferenca entre o textContent e o InnerHTML
                    id.textContent = dados[item].id;
                    nome.textContent = dados[item].nome;
                    registro.textContent = dados[item].registro;
                    especialidade.textContent = dados[item].especialidade;
                    unidade.textContent = dados[item].unidade;
                    telefone.textContent = dados[item].telefone;
                    email.textContent = dados[item].email;
                    acoes.innerHTML = `<a href="javascript:void(0)" class="botao">Editar</a>\n
                    <a href="#" class="botao excluir">Excluir</a>`;

                    linha.appendChild(id);
                    linha.appendChild(nome);
                    linha.appendChild(registro);
                    linha.appendChild(especialidade);
                    linha.appendChild(unidade);
                    linha.appendChild(telefone);
                    linha.appendChild(email);
                    linha.appendChild(acoes);
                    tabela.tBodies[0].appendChild(linha);
        }});



            // XHMLHttpRequest

            // abre a conexao
            // xhr.open("GET", url);

            // // monitora quando o estado muda
            // xhr.addEventListener("readystatechange", () => {
            //     if (xhr.readyState == 4 && xhr.status == 200) {     // requisicao 200 : requisiçao foi feita, respondida e sem erro
            //         let dados = JSON.parse(xhr.responseText);       // casting da HTTPResponse para o formato JSON
                    
            //         for (let item in dados) {
            //             let linha = document.createElement("tr");
            //             let id = document.createElement("td");
            //             let nome = document.createElement("td");
            //             let registro = document.createElement("td");
            //             let especialidade = document.createElement("td");
            //             let unidade = document.createElement("td");
            //             let telefone = document.createElement("td");
            //             let email = document.createElement("td");
            //             let acoes = document.createElement("td");
            //             id.classList.add("fit");        // equivalente a criar uma classe em um elemento HTML
                        
            //             // TODO: entender a diferenca entre o textContent e o InnerHTML
            //             id.textContent = dados[item].id;
            //             nome.textContent = dados[item].nome;
            //             registro.textContent = dados[item].registro;
            //             especialidade.textContent = dados[item].especialidade;
            //             unidade.textContent = dados[item].unidade;
            //             telefone.textContent = dados[item].telefone;
            //             email.textContent = dados[item].email;
            //             acoes.innerHTML = `<a href="javascript:void(0)" class="botao">Editar</a>\n
            //             <a href="#" class="botao excluir">Excluir</a>`;

            //             linha.appendChild(id);
            //             linha.appendChild(nome);
            //             linha.appendChild(registro);
            //             linha.appendChild(especialidade);
            //             linha.appendChild(unidade);
            //             linha.appendChild(telefone);
            //             linha.appendChild(email);
            //             linha.appendChild(acoes);
            //             tabela.tBodies[0].appendChild(linha);
            //         }
            //     }
            // });

            // enviando os dados com suas propriedades acima
            //xhr.send();
        });
    }
}