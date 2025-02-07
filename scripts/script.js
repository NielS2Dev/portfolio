function EntrarLogin() {
    var nome = document.getElementById('ilogin').value;

    if (nome.trim() !== "") { // Verifica se o campo não está vazio
        localStorage.setItem('nomeUsuario', nome); // Armazena o nome no localStorage com o "código"  > (nomeUsuario)
        window.location.href = "secundaria.html"; // Redireciona para a página secundária
    } else {
        alert("Por favor, digite seu nome!");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var nomeUsuario = localStorage.getItem('nomeUsuario'); // Obtém o nome armazenado
    
    var welcome = window.document.getElementById('ola')

    if (nomeUsuario) {
        welcome.innerHTML = `Seja bem vindo(a) ${nomeUsuario}!`; // Atualiza a saudação
        // document.getElementById('ola').innerText = `Oi, ${nomeUsuario}!`;
        // Poderia ser esse também
    } else {
        welcome.innerHTML = `Olá, Sr. Misterioso...`
        // Caso não tenha nome salvo
        // document.getElementById('ola').innerText = "Oi, visitante!"; // poderia ser esse também
    }
});


document.getElementById('btnCoração').addEventListener('click', function() {
    const coracoesDiv = document.getElementById('coracoes');
    
    // Criar o coração
    const coracao = document.createElement('div');
    coracao.classList.add('coração');
    coracao.innerHTML = '❤️ ❣️ ❤️ ❣️';  // Emoji do coração
    
    // Posição aleatória para o coração
    coracao.style.left = Math.random() * 100 + '%'; // Posição aleatória na largura
    
    // Adicionando o coração à tela
    coracoesDiv.appendChild(coracao);
    
    // Adiciona a classe 'subindo' para animar o coração
    setTimeout(() => {
        coracao.classList.add('subindo');
    }, 10);
    
    // Remove o coração após a animação
    setTimeout(() => {
        coracao.remove();
    }, 1000); // Remove após 1 segundo (quando a animação terminar)
});




// 1️⃣ document → Representa a página web (o DOM - Document Object Model).

// 2️⃣ addEventListener("DOMContentLoaded", function() {...})

// addEventListener() → Escuta eventos (ações que ocorrem no site).
// "DOMContentLoaded" → Um evento que ocorre quando todo o HTML foi carregado, mas antes das imagens e estilos.
// function() { ... } → Código que será executado quando o HTML terminar de carregar







/* 
function EntrarLogin() {
    var nome = document.getElementById('ilogin').value;

    if (nome.trim() !== "") { // Verifica se o campo não está vazio
        localStorage.setItem('nomeUsuario', nome); // Armazena o nome no localStorage com o "código"  > (nomeUsuario)
        window.location.href = "secundaria.html"; // Redireciona para a página secundária
    } else {
        alert("Por favor, digite seu nome!");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var nomeUsuario = localStorage.getItem('nomeUsuario'); // Obtém o nome armazenado
    
    var welcome = window.document.getElementById('ola')

    if (nomeUsuario) {
        document.getElementById('ola').innerText = `Oi, ${nomeUsuario}!`; // Atualiza a saudação
    } else {
        document.getElementById('ola').innerText = "Oi, visitante!"; // Caso não tenha nome salvo
    }
});


// 1️⃣ document → Representa a página web (o DOM - Document Object Model).

// 2️⃣ addEventListener("DOMContentLoaded", function() {...})

// addEventListener() → Escuta eventos (ações que ocorrem no site).
// "DOMContentLoaded" → Um evento que ocorre quando todo o HTML foi carregado, mas antes das imagens e estilos.
// function() { ... } → Código que será executado quando o HTML terminar de carregar
 */