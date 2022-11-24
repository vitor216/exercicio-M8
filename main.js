const form =document.getElementById('form-agenda'); 
const NOME =[];
const TEL =[];
const EMAIL =[];
const OBS =[];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarlinha();
    atualizatabela();
});

function adicionarlinha() {
    const inputnome = document.getElementById('nome');
    const inputtel = document.getElementById('tel');
    const inputemail = document.getElementById('email');
    const textareaobs = document.getElementById('obs');

    if (NOME.includes(inputnome.value)){
        alert (`Esta Pessoa: ${inputnome.value} ja foi Inserido`);
    }else{
    NOME.push(inputnome.value);
    TEL.push(inputtel.value);
    EMAIL.push(inputemail.value);
    OBS.push(textareaobs.value);

    let linha = '<tr>';
    linha += `<td>${inputnome.value}</td>`
    linha += `<td>${inputtel.value}</td>`
    linha += `<td>${inputemail.value}</td>`
    linha += `<td>${textareaobs.value}</td>`
    linha += '</tr>';

    linhas += linha;
}
    inputnome.value = '';
    inputtel.value = '';
    inputemail.value = '';
    textareaobs.value = '';
}

function atualizatabela() {
    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;
}