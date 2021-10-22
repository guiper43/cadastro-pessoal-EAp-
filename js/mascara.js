// criada a função para mascarar o CPF
function mascaraCpf() {
    //criada a variável que vai capturar o valor do campo cpf.
    var cpf = document.getElementById("cpf").value;
    // se a posição na string cpf for 3
    if (cpf.length == 3) {
        // adiciona o . após digitar o terceiro digito do cpf
        cpf = cpf + '.';
        document.forms[0].cpf.value = cpf;
    }
    if (cpf.length == 7) {
        cpf = cpf + '.';
        document.forms[0].cpf.value = cpf;
    }
    if (cpf.length == 11) {
        cpf = cpf + '-';
        document.forms[0].cpf.value = cpf;
    }
}
function mascaraCelular() {
    // aqui será usado o mesmo conseito mostrado anteriormente.
    var celular = document.getElementById("celular").value;
    if (celular.length == 0) {
        celular = celular + '(';
        document.forms[0].celular.value = celular;
    }
    if (celular.length == 3) {
        celular = celular + ')';
        document.forms[0].celular.value = celular;
    }
if(celular.length == 4){
    celular = celular + ' ';
    document.forms[0].celular.value = celular;
}
if(celular.length == 10){
    celular = celular + '-';
    document.forms[0].celular.value = celular;
}

}
function mascaraTelefone (){
var telefone =document.getElementById("telefone").value;
if(telefone.length == 0){
    telefone = telefone + '(';
    document.forms[0].telefone.value = telefone;
}
if(telefone.length == 3){
    telefone = telefone + ')';
    document.forms[0].telefone.value = telefone;
}
if(telefone.length == 4 ){
    telefone = telefone + ' ';
    document.forms[0].telefone.value = telefone;
}
if(telefone.length == 9){
    telefone = telefone + '-';
    document.forms[0].telefone.value = telefone;
}

}
