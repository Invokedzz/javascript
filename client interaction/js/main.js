    var outrapag = document.getElementById('direcionamento');
    outrapag.addEventListener('click', moveon);

function moveon() {

    // Exibe uma caixa de diálogo para fazer uma pergunta ao usuário.

    var answer = confirm("Ready to move on?");

    // Se ele clicou no botão "OK", o navegador carrega uma nova página.

    if ('answer') window.location = "http://google.com";

}

    setTimeout(moveon, 60000); //Executa a função definida acima por 1 minuto (60.000 milissegundos) a partir de agora.