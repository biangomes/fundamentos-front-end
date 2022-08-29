/*
 botoes :   guarda uma LISTA de LINKS com o botao EXCLUIR
*/
window.onload = function() {
    let botoes = document.querySelectorAll("a.excluir");
    console.log(botoes);
    botoes.forEach(item => {
        item.addEventListener('click', () => {
            if (confirm("Deseja realmente excluir?")) {
                item.parentNode.parentNode.remove();
            }
        })
    });       // mesma coisa ---> function nome() { }
}