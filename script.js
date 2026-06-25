console.log("Site carregado!")

// Verificação de campo em contato
function enviar() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    if (nome ==="" || email === "" || mensagem === ""){ // Verificação se alguns dos campos estão vazios
        alert("Preencha todos os campos!") // Mensagem que aparecerá se tiver algum vazio
        return;
    }
    if (!email.includes("@")){ // Verificação se tem "@" no campo de email 
        alert("Digite um email válido!") // Mensagem que aparecerá se não possuir um "@"
        return;
    }

    alert("Mensagem enviada com sucesso!"); //Mensagem se todos os campos foram preenchidos com sucesso.

    document.getElementById("nome").value = "";     //  
    document.getElementById("email").value = "";    // "Limpeza" dos campos.
    document.getElementById("telefone").value = ""; // 
    document.getElementById("mensagem").value = ""; //
}
// --------------------------------------------------------------------------------------

// Função para mudar o site de cor (em todas as abas)
function trocarTema() { //Função para troca de tema
    document.body.classList.toggle('escuro'); //Adiciona a classe escuro ao body, se ela não existir ou remove essa classe caso ela ja exista, alternando o tema da página.

    if (document.body.classList.contains('escuro')) { //Verifica se o elemento body possui a classe escuro.
        localStorage.setItem('tema', 'escuro'); //Salva no localStorage do navegador que o tema atual é escuro.
    } else {  // Se não estiver escuro..
        localStorage.setItem('tema', 'claro'); //Salva no localStorage que o tema atual é claro
    }
}

if (localStorage.getItem('tema') === 'escuro') { //verifica se o valor salvo é igual a escuro.
    document.body.classList.add('escuro'); //Se o tema salvo for escuro, adiciona a classe escuro.
}