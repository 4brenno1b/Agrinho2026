function atualizarSimulador() {
    // Pegando as caixas de seleção (checkboxes)
    const agua = document.getElementById('reuso-agua').checked;
    const energia = document.getElementById('energia-solar').checked;
    const plantio = document.getElementById('plantio-direto').checked;

    let porcentagemSustentavel = 0;

    // Somando os pontos com base nas escolhas
    if (agua) porcentagemSustentavel += 30;
    if (energia) porcentagemSustentavel += 40;
    if (plantio) porcentagemSustentavel += 30;

    // Atualizando a barra de progresso visualmente
    const barra = document.getElementById('barra');
    barra.style.width = porcentagemSustentavel + '%';
    barra.innerText = porcentagemSustentavel + '%';

    // Alterando o texto de feedback para o usuário
    const mensagem = document.getElementById('mensagem');
    
    if (porcentagemSustentavel === 0) {
        mensagem.innerText = "Sua fazenda ainda precisa adotar práticas sustentáveis!";
        mensagem.style.color = "#cc0000";
    } else if (porcentagemSustentavel < 100) {
        mensagem.innerText = "Bom caminho! Adicione mais práticas para equilibrar produção e ambiente.";
        mensagem.style.color = "#ff9800";
    } else {
        mensagem.innerText = "Parabéns! Sua fazenda atingiu o equilíbrio perfeito: Agro Forte e Futuro Sustentável! 🎉";
        mensagem.style.color = "#2e7d32";
    }
}