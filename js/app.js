let alugados = 1;
console.log(alugados);

function alterarStatus(gamenum) {
    let jogo = document.getElementById(`jogo${gamenum}`);
    let imagem = document.getElementById(`imagem${gamenum}`);
    if (jogo.classList.contains("dashboard__item__button--return")) {
        if (confirm("Tem certeza que deseja devolver o jogo?")) {
            jogo.classList.remove("dashboard__item__button--return");
            jogo.innerHTML = "Alugar";
            imagem.classList.remove("dashboard__item__img--rented");
            alugados--;
            console.log(alugados);
        } else {
            return;
        }
    } else {
        jogo.classList.add("dashboard__item__button--return");
        jogo.innerHTML = "Devolver";
        imagem.classList.add("dashboard__item__img--rented");
        alugados++;
        console.log(alugados);
    }
}